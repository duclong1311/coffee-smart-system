import axios from 'axios';
import Tiny from "../../../../../Tiny";
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import {
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
} from "../../../../../firebase";

export function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState({ title: '', content: '', img: '', date: '' });
    const navigate = useNavigate();

    // Lấy dữ liệu bài viết từ API
    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                setPost(response.data); // Lưu dữ liệu bài viết vào state
            } catch (error) {
                toast.error('Không thể tải bài viết!', {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        };

        getPost();
    }, [id]);

    // Validation với Yup
    const validationSchema = Yup.object({
        title: Yup.string()
            .required("Tiêu đề là bắt buộc")
            .min(5, "Tiêu đề phải có ít nhất 5 ký tự")
            .max(100, "Tiêu đề không được vượt quá 100 ký tự"),
        content: Yup.string()
            .required("Nội dung là bắt buộc")
            .min(20, "Nội dung phải có ít nhất 20 ký tự"),
    });

    // Upload ảnh lên Firebase
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

    // Hàm xử lý sửa bài viết
    const handleEdit = async (values) => {
        const updatedPost = { ...values, date: new Date().toISOString() };

        try {
            // Nếu người dùng chọn file ảnh mới, upload lên Firebase
            if (values.imageFile) {
                const downloadURL = await uploadImage(values.imageFile);
                updatedPost.img = downloadURL; // Cập nhật URL ảnh mới
            }

            // Cập nhật bài viết
            await axios.put(`http://localhost:3000/posts/${id}`, updatedPost);
            toast.success("Cập nhật tin thành công!", {
                position: "top-right",
                autoClose: 3000,
            });
            navigate('/admin/postmanagement');
        } catch (error) {
            toast.error("Cập nhật tin thất bại!", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="flex flex-col px-4 py-8 max-w-2xl mx-auto">
            <div className="w-full ml-0 md:ml-8">
                <h1 className="text-center text-3xl font-bold mb-8">Chỉnh sửa bài viết</h1>
                <Formik
                    initialValues={{ ...post, imageFile: null }}
                    enableReinitialize
                    validationSchema={validationSchema}
                    onSubmit={handleEdit}
                >
                    {({ setFieldValue, errors, touched }) => (
                        <Form>
                            {/* Tiêu đề */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Tiêu đề:</label>
                                <Field
                                    type="text"
                                    name="title"
                                    className="border border-gray-300 p-2 w-full"
                                />
                                <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Nội dung */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Nội dung:</label>
                                <Tiny
                                    initialValue={post.content}
                                    onChange={(content) => setFieldValue("content", content)}
                                />
                                {touched.content && errors.content && (
                                    <div className="text-red-500 text-sm">{errors.content}</div>
                                )}
                            </div>

                            {/* Hình ảnh */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Hình ảnh hiện tại:</label>
                                <img src={post.img} alt="Current" className="w-32 h-32 object-cover mb-2" />
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => setFieldValue("imageFile", e.target.files[0])}
                                    className="border border-gray-300 p-2 w-full"
                                />
                                <ErrorMessage name="img" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Nút lưu thay đổi */}
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-white text-[#333] rounded hover:bg-[#333] hover:text-white transition border border-black"
                                >
                                    Lưu thay đổi
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </div>
    );
}
