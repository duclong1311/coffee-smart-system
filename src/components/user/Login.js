import React, { useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Field, Form, Formik } from "formik";

export function Login() {
    const navigate = useNavigate();

    const handleLogin = async (values) => {
        const response = await fetch('http://localhost:3000/users');
        const users = await response.json();

        const user = users.find(
            (user) => user.username === values.username && user.password === values.password
        );

        if (user) {
            alert('Đăng nhập thành công!');
            navigate('/'); 
        } else {
            alert('Tên đăng nhập hoặc mật khẩu không đúng!');
        }
    };

    return (
        <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-80">
                <Formik
                    initialValues={{
                        username: '',
                        password: ''
                    }}
                    onSubmit={handleLogin}
                >
                    <Form>
                        <h1 className="text-center text-2xl font-bold text-black mb-4">Đăng Nhập Ngay</h1>
                        <Field 
                            type="text" 
                            name="username" 
                            placeholder="Tên Đăng Nhập" 
                            className="w-full p-2 mb-3 border border-gray-300 rounded bg-gray-200 font-semibold"
                        />
                        <Field 
                            type="password" 
                            name="password" 
                            placeholder="Mật Khẩu" 
                            className="w-full p-2 mb-4 border border-gray-300 rounded bg-gray-200 font-semibold"
                        />
                        <button 
                            type="submit" 
                            className="w-full p-2 bg-gray-800 text-white font-semibold rounded hover:bg-white hover:text-[#c19977] border hover:border-[#c19977]"
                        >
                            Đăng Nhập
                        </button>
                    </Form>
                </Formik>
                {/* <Link to="/forgot-password" className="block text-center mt-3 text-sm text-blue-600">Quên Mật Khẩu</Link>
                <hr className="my-4 border-gray-300" />
                <Link to="/register" className="block">
                    <button 
                        className="w-full p-2 bg-[#c19977] text-white font-bold rounded hover:bg-[#c0865f]"
                    >
                        Đăng kí ngay
                    </button>
                </Link> */}
            </div>
        </div>
        </>
    );
}
