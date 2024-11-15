import { useState, useEffect } from 'react';
import { FaBars, FaPhoneAlt, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SideBar from '../partial/SideBar';
import logo from '../../assets/images/logo-dark-retina.webp';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user);
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('sidebar-open', !isOpen);
    };

    const handleLogout = () => {
        const confirmLogout = () => {
            localStorage.removeItem('user');
            setIsLoggedIn(false);
            navigate('/login');
            toast.success('Đăng xuất thành công!', { position: "top-center" });
        };

        const customToast = (
            <div>
                <p>Bạn muốn đăng xuất tài khoản?</p>
                <div className="flex justify-center  mt-2 space-x-10">
                    <button 
                        onClick={() => {
                            toast.dismiss();
                            confirmLogout();
                        }}
                        className="px-4 py-1 bg-green-600 text-white rounded"
                    >
                        Có
                    </button>
                    <button 
                        onClick={() => toast.dismiss()}
                        className="px-4 py-1 bg-red-600 text-white rounded"
                    >
                        Không
                    </button>
                </div>
            </div>
        );

        // Thêm icon: false vào đây để loại bỏ biểu tượng "i"
        toast.info(customToast, { autoClose: false, position: "top-center", icon: false });
    };

    return (
        <div className={`flex transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
            <ToastContainer />
            <SideBar isOpen={isOpen} toggleMenu={toggleMenu} />

            <div className="flex-1 transition-all duration-300">
                <div className="container shadow-[0_1px_3px_rgba(0,0,0,0.09)]">
                    <div className="md:px-40 px-5 flex items-center justify-between py-3 text-[#333]">
                        <div className="cursor-pointer w-[10%] md:hidden" onClick={toggleMenu}>
                            <FaBars className="text-[#333] text-2xl" />
                        </div>

                        <div className="md:flex w-1/3 items-center hidden">
                            <a href="tel:0373357405" className="flex items-center">
                                <div className="w-8 h-8 rounded-full bg-[#333] flex items-center">
                                    <FaPhoneAlt className="m-auto text-white" />
                                </div>
                                <span className="text-[#333] font-semibold ms-3">0364402449</span>
                            </a>
                        </div>

                        <div className="flex w-[70%] md:w-1/3 items-center py-3 justify-center">
                            <img src={logo} alt="Logo" className="h-[100px]" />
                        </div>

                        <div className="w-[20%] md:w-1/3 flex items-center justify-end text-[#333] text-4xl">
                            <div className="relative cursor-pointer mx-4 md:mx-6 group">
                                <Link to="/profile">
                                    <FaUser />
                                </Link>
                                <span className="absolute top-full mt-1 right-0 hidden group-hover:block bg-[#333] text-white text-sm px-2 py-1 rounded min-w-[150px] max-w-[300px]">
                                    Xem thông tin tài khoản
                                </span>
                            </div>

                            {isLoggedIn ? (
                                <div className="relative cursor-pointer mx-4 md:mx-6 group" onClick={handleLogout}>
                                    <FaSignOutAlt />
                                    <span className="absolute top-full mt-1 right-0 hidden group-hover:block bg-[#333] text-white text-sm px-2 py-1 rounded">
                                        Đăng xuất
                                    </span>
                                </div>
                            ) : (
                                <Link to="/login" className="cursor-pointer mx-4 md:mx-6">
                                    Đăng nhập
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                <nav className="hidden md:block md:sticky md:top-0 md:z-10 text-[#333] font-semibold">
                    <ul className="flex items-center justify-center">
                        <li className="p-4">
                            <Link to="/" className="hover:opacity-80">Trang chủ</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/menu" className="hover:opacity-80">Sản phẩm</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/blog" className="hover:opacity-80">Bài viết</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/about" className="hover:opacity-80">Giới thiệu</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/contact" className="hover:opacity-80">Liên hệ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
