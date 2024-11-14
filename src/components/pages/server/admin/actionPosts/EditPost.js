import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export function EditPost() {
    const { id } = useParams();
    const [post, setPost] = useState({ title: '', content: '', img: '' });
    const navigate = useNavigate();



    useEffect(() => {
    const getPost = async () => {
        try {
            const response = await axios.get(`http://localhost:3000/posts/${id}`);
            setPost(response.data);
        } catch (error) {
            alert('Error fetching post', error);
        }
    };
        getPost();
    }, [id]);


    const handleEdit = async () => {
        try {
            await axios.put(`http://localhost:3000/posts/${id}`, post);
            alert('Post updated successfully');
            navigate('/admin/postmanagement');
        } catch (error) {
            alert('Error updating post', error);
        }
    };

    return (
        <div className="flex flex-col px-4 py-8 max-w-7xl mx-auto">
            <div className="w-full ml-0 md:ml-8">
                <h1 className="text-center text-3xl font-bold mb-8 ">Quản lý bài viết</h1>                <div className="mb-4">
                    <label className="block text-gray-700">Tiêu đề:</label>
                    <input
                        type="text"
                        value={post.title}
                        onChange={(e) => setPost({ ...post, title: e.target.value })}
                        className="border border-gray-300 p-2 w-full"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Nội dung:</label>
                    <textarea
                        value={post.content}
                        onChange={(e) => setPost({ ...post, content: e.target.value })}
                        className="border border-gray-300 p-2 w-full"
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-gray-700">Image URL:</label>
                    <input
                        type="text"
                        value={post.img}
                        onChange={(e) => setPost({ ...post, img: e.target.value })}
                        className="border border-gray-300 p-2 w-full"
                    />
                </div>
                <button
                    onClick={handleEdit}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Lưu thay đổi
                </button>
            </div>
        </div>
    );
}
