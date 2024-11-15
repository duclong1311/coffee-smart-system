import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function PostManagement() {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null); // State cho bài viết được chọn để xem chi tiết
    const navigate = useNavigate();

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3000/posts/${id}`);
            setPosts(posts.filter((post) => post.id !== id));
            setSelectedPost(null); // Đóng modal sau khi xóa
        } catch (error) {
            alert("Xóa bài viết không thành công");
        }
    };

    const handleEdit = async (id) => {
        navigate(`/admin/edit/${id}`);
    };

    const handleViewDetails = (post) => {
        setSelectedPost(post); // Gán bài viết được chọn vào state để hiển thị modal
    };

    const closeModal = () => {
        setSelectedPost(null); // Đóng modal bằng cách reset state
    };

    const getPosts = async () => {
        try {
            const response = await axios.get("http://localhost:3000/posts");
            setPosts(response.data);
        } catch (error) {
            alert(error);
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
                            <th className="py-3 px-6 font-semibold text-gray-800 border-b">Detail</th>
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
                                <td className="py-4 px-6 border-b text-gray-600">
                                    {post.content.split(" ").slice(0, 6).join(" ")}...

                                </td>
                                <td className="py-4 px-6 border-b text-gray-400">{post.date}</td>
                                <td className="py-4 px-6 border-b">
                                    <button
                                        className="text-blue-500 underline ml-2"
                                        onClick={() => handleViewDetails(post)}
                                    >
                                        Xem chi tiết
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Modal hiển thị chi tiết bài viết */}
            {selectedPost && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white rounded-lg p-6 max-w-lg w-full">
                        <h2 className="text-2xl font-bold mb-4">{selectedPost.title}</h2>
                        <img
                            src={selectedPost.img}
                            alt={selectedPost.title}
                            className="w-full h-64 object-cover rounded-lg mb-4"
                        />
                        <p className="text-gray-600 mb-4">{selectedPost.content}</p>
                        <p className="text-gray-400 mb-4">Ngày đăng: {selectedPost.date}</p>

                        {/* Nút "Edit" và "Delete" trong modal */}
                        <div className="flex justify-end space-x-4">
                            <button
                                className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                                onClick={() => handleEdit(selectedPost.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
                                onClick={() => handleDelete(selectedPost.id)}
                            >
                                Delete
                            </button>
                            <button
                                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                                onClick={closeModal}
                            >
                                Đóng
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
