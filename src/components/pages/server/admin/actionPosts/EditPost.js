import React, { useEffect, useState } from 'react';
import Tiny from "../../../../../Tiny";
import axios from 'axios';
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
    const [preview, setPreview] = useState(null); // State for image preview
    const [progress, setProgress] = useState(0); // State for upload progress
    const navigate = useNavigate();

    // Fetch the post data
    useEffect(() => {
        const getPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                setPost(response.data);
            } catch (error) {
                toast.error('Không thể tải bài viết!', {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        };

        getPost();
    }, [id]);

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

    // Upload image to Firebase
    const uploadImage = async (file) => {
        const fileName = `${new Date().getTime()}_${file.name}`;
        const storageRef = ref(storage, `post_images/${fileName}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        return new Promise((resolve, reject) => {
            uploadTask.on(
                "state_changed",
                (snapshot) => {
                    const progressPercentage = Math.round(
                        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                    );
                    setProgress(progressPercentage); // Update progress state
                },
                (error) => {
                    console.error("Upload failed:", error);
                    toast.error("Upload ảnh thất bại");
                    reject(error);
                },
                async () => {
                    const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
                    setProgress(0); // Reset progress state after upload
                    resolve(downloadURL);
                }
            );
        });
    };

    // Handle form submission
    const handleEdit = async (values) => {
        const updatedPost = { ...values, date: new Date().toISOString() };

        try {
            // If a new image is selected, upload it
            if (values.imageFile) {
                const downloadURL = await uploadImage(values.imageFile);
                updatedPost.img = downloadURL;
            }

            // Update the post
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
                            {/* Title */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Tiêu đề:</label>
                                <Field
                                    type="text"
                                    name="title"
                                    className="border border-gray-300 p-2 w-full"
                                />
                                <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Content */}
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

                            {/* Image */}
                            <div className="mb-4">
                                <label className="block text-gray-700">Hình ảnh hiện tại:</label>
                                <img src={post.img} alt="Current" className="w-32 h-32 object-cover mb-2" />
                                <label className="block text-gray-700">Hình ảnh mới:</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={(e) => {
                                        const file = e.target.files[0];
                                        if (file) {
                                            setPreview(URL.createObjectURL(file)); // Set preview
                                            setFieldValue("imageFile", file);
                                        }
                                    }}
                                    className="border border-gray-300 p-2 w-full"
                                />
                                {preview && (
                                    <div className="mt-2">
                                        <p className="text-gray-600">Xem trước ảnh mới:</p>
                                        <img
                                            src={preview}
                                            alt="Preview"
                                            className="w-32 h-32 object-cover border rounded"
                                        />
                                    </div>
                                )}
                                <ErrorMessage name="img" component="div" className="text-red-500 text-sm" />
                            </div>

                            {/* Progress Bar */}
                            {progress > 0 && (
                                <div className="mb-4">
                                    <p className="text-gray-600">Đang tải ảnh: {progress}%</p>
                                    <div className="w-full bg-gray-200 h-2 rounded">
                                        <div
                                            className="bg-[#C48355] h-2 rounded"
                                            style={{ width: `${progress}%` }}
                                        ></div>
                                    </div>
                                </div>
                            )}

                            {/* Submit Button */}
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
