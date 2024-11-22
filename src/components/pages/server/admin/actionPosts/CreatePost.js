import Tiny from "../../../../../Tiny";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "../../../../../firebase"; // Import Firebase methods

// Validation schema
const validationSchema = Yup.object({
    title: Yup.string()
        .required("Tiêu đề là bắt buộc")
        .min(5, "Tiêu đề phải có ít nhất 5 ký tự")
        .max(100, "Tiêu đề không được vượt quá 100 ký tự"),
    content: Yup.string()
        .required("Nội dung là bắt buộc")
        .min(20, "Nội dung phải có ít nhất 20 ký tự"),
});

export function CreatePost() {
    const navigate = useNavigate();

    // Function to upload an image to Firebase
    const uploadImage = async (file) => {
        const fileName = `${new Date().getTime()}_${file.name}`;
        const storageRef = ref(storage, `post_images/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) => {
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progress =
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log(`Upload progress: ${progress}%`);
                },
                (error) => {
                    console.error("Upload failed:", error);
                    toast.error("Upload ảnh thất bại");
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    resolve(downloadURL);
                }
            );
        });
    };

    // Function to create a post
    const createPost = async (values, { setSubmitting, resetForm }) => {
        const currentDateTime = new Date().toISOString();
        const postData = { ...values, date: currentDateTime };

        try {
            // If there is an image file, upload it first
            if (values.imageFile) {
                const downloadURL = await uploadImage(values.imageFile);
                postData.img = downloadURL; // Add the image URL to the post data
            }

            // Send post data to the server
            await axios.post("http://localhost:3000/posts", postData);
            toast.success("Thêm tin thành công", {
                position: "top-right",
                autoClose: 3000,
            });

            resetForm(); // Reset the form
            navigate("/admin/postmanagement");
        } catch (error) {
            console.error("Error creating post:", error);
            toast.error("Thêm tin thất bại", {
                position: "top-right",
                autoClose: 3000,
            });
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <div className="max-w-2xl mx-auto p-4">
                <h1 className="text-2xl font-bold mb-4">Đăng tin</h1>

                <Formik
                    initialValues={{
                        title: "",
                        content: "",
                        imageFile: null, // Store the uploaded image file
                        img: "", // Store the image URL
                    }}
                    validationSchema={validationSchema}
                    onSubmit={createPost}
                >
                    {({ setFieldValue, errors, touched, isSubmitting }) => (
                        <Form className="space-y-4">
                            {/* Title */}
                            <div>
                                <Field
                                    type="text"
                                    name="title"
                                    placeholder="Tiêu đề"
                                    className="block w-full p-2 border border-gray-300 rounded"
                                />
                                {touched.title && errors.title && (
                                    <div className="text-red-500 text-sm">{errors.title}</div>
                                )}
                            </div>

                            {/* Content */}
                            <div>
                                <Tiny
                                    onChange={(content) => setFieldValue("content", content)}
                                />
                                {touched.content && errors.content && (
                                    <div className="text-red-500 text-sm">{errors.content}</div>
                                )}
                            </div>

                            {/* Image */}
                            <div>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        setFieldValue("imageFile", file); // Store the file object
                                    }}
                                    className="block w-full p-2 border border-gray-300 rounded"
                                />
                                {touched.img && errors.img && (
                                    <div className="text-red-500 text-sm">{errors.img}</div>
                                )}
                            </div>

                            {/* Submit Button */}
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-white text-[#333] rounded hover:bg-[#333] hover:text-white transition border border-black"
                                    disabled={isSubmitting} // Disable the button while submitting
                                >
                                    {isSubmitting ? "Đang xử lý..." : "Đăng tin"}
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}
