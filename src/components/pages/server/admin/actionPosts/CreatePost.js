import axios from "axios";
import { Field, Form, Formik } from "formik";

export function CreatePost() {


    const createPost = async (value) => {
        try {
            await axios.post('http://localhost:3000/posts', value)
            alert("Thêm tin thành công");
        } catch (error) {
            alert("Thêm tin thất bại")
        }
    }


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
                        <Field 
                            as="textarea" 
                            name="content" 
                            placeholder="Nội dung" 
                            className="block w-full p-2 border border-gray-300 rounded"
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
            </Formik>
        </div>
        </>
    )
}