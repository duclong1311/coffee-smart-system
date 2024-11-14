import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import Header from '../../../partial/Header';
import Footer from '../../../partial/Footer';

export function DetailPost() {
    const { id } = useParams(); // Lấy id từ URL
    const [post, setPost] = useState(null);
    const [newComment, setNewComment] = useState('');
    const [comments, setComments] = useState([]);

    useEffect(() => {
        // Lấy bài viết từ db.json dựa trên id
        const fetchPost = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/posts/${id}`);
                setPost(response.data);
                setComments(response.data.comments || []);
            } catch (error) {
                console.error("Lỗi khi tải bài viết:", error);
            }
        };
        fetchPost();
    }, [id]);

    const handleCommentSubmit = async () => {
        if (newComment.trim() !== '') {
            const updatedComments = [...comments, { content: newComment, date: new Date().toLocaleString() }];
            setComments(updatedComments);

            const updatedPost = { ...post, comments: updatedComments };

            try {
                await axios.put(`http://localhost:3000/posts/${id}`, updatedPost);
                setPost(updatedPost); // Cập nhật lại bài post sau khi thêm bình luận
                setNewComment(''); // Reset input sau khi gửi
            } catch (error) {
                console.error("Lỗi khi lưu bình luận:", error);
            }
        }
    };

    if (!post) {
        return <p>Loading post...</p>;
    }

    return (
        <>
            <Header />
            <div className="px-4 py-8 max-w-7xl mx-auto">
                <div className="bg-white p-8 rounded-md shadow-md">
                    <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                    <img src={post.img} alt={post.title} className="w-full h-64 object-cover mb-4" />
                    <p className="text-gray-600">{post.content}</p>
                    <p className="text-sm text-gray-400 mt-4">{post.date}</p>

                    <div className="mt-8">
                        <h3 className="text-lg font-semibold">Bình luận</h3>
                        <ul className="mt-4 space-y-2">
                            {comments.map((comment, index) => (
                                <li key={index} className="border-b pb-2">
                                    <p>{comment.content}</p>
                                    <p className="text-sm text-gray-400">{comment.date}</p>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-4">
                            <textarea
                                value={newComment}
                                onChange={(e) => setNewComment(e.target.value)}
                                placeholder="Nhập bình luận của bạn"
                                className="w-full border rounded-md p-2"
                            />
                            <button
                                className="bg-blue-500 text-white px-4 py-2 mt-2 rounded-md"
                                onClick={handleCommentSubmit}
                            >
                                Gửi bình luận
                            </button>
                        </div>
                    </div>
                    <Link to="/listpost" className="mt-4 inline-block text-blue-500">Trở về danh sách bài viết</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
