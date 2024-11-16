import Tiny from "../../../../../Tiny";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export function CreatePost() {
    const navigate = useNavigate();

    const createPost = async (value) => {
        const currentDateTime = new Date().toISOString();
        const postData = { ...value, date: currentDateTime };
        console.log("Form values:", value);
        try {
            await axios.post('http://localhost:3000/posts', postData);
            toast.success("Thêm tin thành công", {
                position: "top-right",
                autoClose: 3000,
            });
            navigate("/admin/postmanagement");
        } catch (error) {
            toast.error("Thêm tin thất bại", {
                position: "top-right",
                autoClose: 3000,
            });
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
                        img: ""
                    }}
                    onSubmit={createPost}
                >
                    {({ setFieldValue, setFieldTouched }) => (
                        <Form className="space-y-4">
                            <div>
                                <Field
                                    type="text"
                                    name="title"
                                    placeholder="Tiêu đề"
                                    className="block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <div>
                                <Tiny
                                    onChange={(content) => {
                                        setFieldValue("content", content);
                                        setFieldTouched("content", true); // Mark field as touched
                                    }}
                                />
                            </div>
                            <div>
                                <Field
                                    type="text"
                                    name="img"
                                    placeholder="Ảnh"
                                    className="block w-full p-2 border border-gray-300 rounded"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
                            >
                                Đăng tin
                            </button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}
