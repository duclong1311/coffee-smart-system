import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import Header from '../../../partial/Header';
import Footer from '../../../partial/Footer';

export function ListPost() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const getPosts = async () => {
        try {
            const response = await axios.get('http://localhost:3000/posts');
            setPosts(response.data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getPosts();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error loading posts: {error.message}</p>;
    }

    // Hàm cắt nội dung
    const truncateContent = (content) => {
        const words = content.split(' ');
        if (words.length > 5) {
            return words.slice(0, 5).join(' ') + '...';
        }
        return content;
    };

    return (
        <>
            <Header />
            <div className="flex flex-col md:flex-row px-4 py-8 max-w-7xl mx-auto">
                <div className="w-full md:w-3/4 ml-0 md:ml-8">
                    <h1 className="text-center text-3xl font-bold mb-8 ml-64">Tin tức</h1>
                    <div className="flex justify-center space-x-4 mb-6 ml-64">
                        <button className="bg-white font-bold text-gray-600 border border-gray-300 rounded-full px-4 py-2 focus:bg-yellow-300 focus:text-orange-800 focus:font-bold focus:outline-none">
                            Tất cả
                        </button>
                        <button className="bg-white font-bold text-gray-600 border border-gray-300 rounded-full px-4 py-2 focus:bg-yellow-300 focus:text-orange-800 focus:font-bold focus:outline-none">
                            Nghiện Coffee
                        </button>
                        <button className="bg-white font-bold text-gray-600 border border-gray-300 rounded-full px-4 py-2 focus:bg-yellow-300 focus:text-orange-800 focus:font-bold focus:outline-none">
                            Nghiện Trà
                        </button>
                    </div>

                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {posts.map((post) => (
                            <li key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <Link to={`/posts/${post.id}`} className="md:flex cursor-pointer">
                                    <div className="md:w-1/3">
                                        <img
                                            src={post.img}
                                            alt={post.title}
                                            className="object-cover w-full h-48 md:h-full"
                                        />
                                    </div>
                                    <div className="p-6 md:w-2/3">
                                        <h2 className="text-xl font-semibold text-gray-800">{post.title}</h2>
                                        <p className="text-gray-600 mt-2">{truncateContent(post.content)}</p>
                                        <p className="text-sm text-gray-400 mt-4">{post.date}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="w-full md:w-1/4 bg-white p-6 mb-8 md:mb-0 mt-28">
                    <h3 className="text-xl font-bold mb-4">Về Chúng Tôi</h3>
                    <p className="text-gray-600 mt-8">
                        Chào mừng đến với Hot Coffee, nơi mang đến cho bạn niềm đam mê và sự thư thái từ thế giới cà phê, trà và các loại thức uống khác...
                    </p>
                    <a href="#" className="text-green-600 mt-4 inline-block">Đọc Thêm...</a>

                    <h3 className="text-xl font-bold mt-8 mb-4">Bài viết mới nhất</h3>
                    <ul className="space-y-4 mt-8">
                        {posts.slice().reverse().slice(0, 3).map((post) => (
                            <li key={post.id} className="flex items-center">
                                <img
                                    src={post.img}
                                    alt={post.title}
                                    className="w-12 h-12 rounded-md object-cover mr-4 mt-4"
                                />
                                <div>
                                    <a href="#" className="text-lg font-medium text-gray-800 mt-4">{post.title}</a>
                                    <p className="text-sm text-gray-400">{truncateContent(post.content)}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
}
