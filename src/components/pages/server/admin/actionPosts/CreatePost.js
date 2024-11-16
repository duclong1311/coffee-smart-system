import Tiny from "../../../../../Tiny";
import axios from "axios";
import { Field, Form, Formik } from "formik";
import * as Yup from "yup"; 
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
        .required("Ảnh là bắt buộc")
});


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
                    validationSchema={validationSchema} 
                    onSubmit={createPost}
                >
                    {({ setFieldValue, setFieldTouched, errors, touched }) => (
                        <Form className="space-y-4">
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
                            <div>
                                <Tiny
                                    onChange={(content) => {
                                        setFieldValue("content", content);
                                        setFieldTouched("content", true); // Mark field as touched
                                    }}
                                />
                                {touched.content && errors.content && (
                                    <div className="text-red-500 text-sm">{errors.content}</div>
                                )}
                            </div>
                            <div>
                                <Field
                                    type="text"
                                    name="img"
                                    placeholder="Ảnh"
                                    className="block w-full p-2 border border-gray-300 rounded"
                                />
                                {touched.img && errors.img && (
                                    <div className="text-red-500 text-sm">{errors.img}</div>
                                )}
                            </div>
                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                >
                                    Đăng tin
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
}
