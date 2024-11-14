import React from 'react';
import { useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from '../partial/Header';
import Footer from '../partial/Footer';

export function Login() {
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        try {
            const response = await fetch('http://localhost:3000/users');
            const users = await response.json();

            const user = users.find(
                (user) => user.username === values.username && user.password === values.password
            );

            if (user) {
                toast.success('Đăng nhập thành công!', { position: "top-center" });
                localStorage.setItem('user', JSON.stringify(user));
                setTimeout(() => {
                    navigate('/');
                }, 1000); // thoi gian chay vao trang chu
            } else {
                toast.error('Tên đăng nhập hoặc mật khẩu không đúng!', { position: "top-center" });
            }
        } catch (error) {
            toast.error('Đã xảy ra lỗi khi đăng nhập!', { position: "top-center" });
            console.error('Error during login:', error);
        }
    };

    return (
        <>
            <Header />
            <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
                <ToastContainer />
                <div className="grid md:grid-cols-2 items-center gap-4 max-md:gap-8 max-w-6xl max-md:max-w-lg w-full p-4 m-4 shadow-lg rounded-md bg-white">
                    <div className="md:max-w-md w-full px-4 py-4">
                        <Formik
                            initialValues={{
                                username: '',
                                password: ''
                            }}
                            onSubmit={handleLogin}
                        >
                            <Form>
                                <div className="mb-12">
                                    <h3 className="text-gray-800 text-3xl font-extrabold">Đăng Nhập</h3>
                                </div>

                                <div>
                                    <label className="text-gray-800 text-xs block mb-2">Tên Đăng Nhập</label>
                                    <div className="relative flex items-center">
                                        <Field
                                            type="text"
                                            name="username"
                                            required
                                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                            placeholder="Tên Đăng Nhập"
                                        />
                                    </div>
                                </div>

                                <div className="mt-8">
                                    <label className="text-gray-800 text-xs block mb-2">Mật Khẩu</label>
                                    <div className="relative flex items-center">
                                        <Field
                                            type="password"
                                            name="password"
                                            required
                                            className="w-full text-gray-800 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none"
                                            placeholder="Mật Khẩu"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-wrap items-center justify-between gap-4 mt-6">
                                    <div className="flex items-center">
                                        <input
                                            id="remember-me"
                                            name="remember-me"
                                            type="checkbox"
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember-me" className="ml-3 block text-sm text-gray-800">Nhớ Đăng Nhập</label>
                                    </div>
                                    <div>
                                        <a href="javascript:void(0);" className="text-blue-600 font-semibold text-sm hover:underline">Quên Mật Khẩu ?</a>
                                    </div>
                                </div>

                                <div className="mt-12">
                                    <button
                                        type="submit"
                                        className="w-full p-2 bg-gray-800 text-white font-semibold rounded hover:bg-white hover:text-[#c19977] border hover:border-[#c19977]"
                                    >
                                        Đăng Nhập
                                    </button>
                                </div>

                                <div className="space-x-6 flex justify-center mt-6">
                                    <button type="button" className="border-none outline-none">
                                        {/* <!-- Google Icon --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" className="inline" viewBox="0 0 512 512">
                                            {/* <!-- Google SVG Paths --> */}
                                            <path fill="#fbbd00" d="..."></path>
                                            <path fill="#0f9d58" d="..."></path>
                                            <path fill="#31aa52" d="..."></path>
                                            <path fill="#3c79e6" d="..."></path>
                                            <path fill="#cf2d48" d="..."></path>
                                            <path fill="#eb4132" d="..."></path>
                                        </svg>
                                    </button>
                                    <button type="button" className="border-none outline-none">
                                        {/* <!-- Apple Icon --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" fill="#000" viewBox="0 0 22.773 22.773">
                                            <path d="..."></path>
                                        </svg>
                                    </button>
                                    <button type="button" className="border-none outline-none">
                                        {/* <!-- Facebook Icon --> */}
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32px" fill="#007bff" viewBox="0 0 167.657 167.657">
                                            <path d="..."></path>
                                        </svg>
                                    </button>
                                </div>
                            </Form>
                        </Formik>
                    </div>

                    <div className="md:h-full bg-[#fff] rounded-xl lg:p-12 p-8">
                        <img src="https://readymadeui.com/signin-image.webp" className="w-full h-full object-contain" alt="login-image" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
