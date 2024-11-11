import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";

export function PostManagement() {

    const [posts, setPosts] = useState([])
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/posts/${id}`);
            setPosts(posts.filter(post => post.id !== id));
        } catch (error) {
            alert('Xóa bài viết không thành công');
        }
    };

    const handleEdit = async (id) => {
        navigate(`/edit/${id}`)
    };


    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/posts');
            setPosts(response.data);

        } catch (error) {
            alert(error)
        }
    };

    useEffect(() => {
        getPosts();
    }, []);


    return (

        <div className="flex flex-col px-4 py-8 max-w-7xl mx-auto">
            <h1 className="text-center text-3xl font-bold mb-8 ">Quản lý bài viết</h1>

            <div className="w-full ml-0 md:ml-8">
                <table className="min-w-full bg-white border border-gray-200">
                    <thead>
                        <tr className="bg-gray-100 text-left">
                            <th className="py-3 px-6 font-semibold text-gray-800 border-b">Image</th>
                            <th className="py-3 px-6 font-semibold text-gray-800 border-b">Title</th>
                            <th className="py-3 px-6 font-semibold text-gray-800 border-b">Content</th>
                            <th className="py-3 px-6 font-semibold text-gray-800 border-b">Date</th>
                            <th className="py-3 px-6 font-semibold text-gray-800 border-b">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id} className="hover:bg-gray-50">
                                <td className="py-4 px-6 border-b">
                                    <img
                                        src={post.img}
                                        alt={post.title}
                                        className="w-20 h-20 object-cover rounded-lg"
                                    />
                                </td>
                                <td className="py-4 px-6 border-b text-gray-800">{post.title}</td>
                                <td className="py-4 px-6 border-b text-gray-600">{post.content}</td>
                                <td className="py-4 px-6 border-b text-gray-400">{post.date}</td>
                                <td className="py-4 px-6 border-b">
                                    <button
                                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 mr-2"
                                        onClick={() => handleEdit(post.id)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                        onClick={() => handleDelete(post.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>

    )
}

