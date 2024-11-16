import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

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
                alert('Error fetching post', error);
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
        img: Yup.string()
            .url("Ảnh phải là một URL hợp lệ")
            .required("Ảnh là bắt buộc"),
    });

    // Hàm xử lý sửa bài viết
    const handleEdit = async (values) => {
        const updatedPost = { ...values, date: new Date().toISOString() };
        try {
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
                <h1 className="text-center text-3xl font-bold mb-8">Quản lý bài viết</h1>
                <Formik
                    initialValues={post} // Gán giá trị ban đầu từ state 'post'
                    enableReinitialize // Cập nhật giá trị khi 'post' thay đổi
                    validationSchema={validationSchema}
                    onSubmit={handleEdit}
                >
                    {() => (
                        <Form>
                            <div className="mb-4">
                                <label className="block text-gray-700">Tiêu đề:</label>
                                <Field
                                    type="text"
                                    name="title"
                                    className="border border-gray-300 p-2 w-full"
                                />
                                <ErrorMessage name="title" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Nội dung:</label>
                                <Field
                                    as="textarea"
                                    name="content"
                                    className="border border-gray-300 p-2 w-full"
                                />
                                <ErrorMessage name="content" component="div" className="text-red-500 text-sm" />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700">Image URL:</label>
                                <Field
                                    type="text"
                                    name="img"
                                    className="border border-gray-300 p-2 w-full"
                                />
                                <ErrorMessage name="img" component="div" className="text-red-500 text-sm" />
                            </div>
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
