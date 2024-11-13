import { useState, useEffect } from 'react';
import { FaBars } from "react-icons/fa6";
import { FaPhoneAlt, FaSearch, FaShoppingCart, FaUser, FaSignOutAlt } from "react-icons/fa"; // Import thêm icon đăng xuất
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate để điều hướng
import SideBar from '../partial/SideBar';
import logo from '../../assets/images/logo-dark-retina.webp';

function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Trạng thái đăng nhập
    const navigate = useNavigate();

    useEffect(() => {
        // Kiểm tra xem người dùng đã đăng nhập hay chưa
        const user = localStorage.getItem('user');
        setIsLoggedIn(!!user); // Nếu có thông tin người dùng trong localStorage thì đã đăng nhập
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
        document.body.classList.toggle('sidebar-open', !isOpen);
    };

    // Hàm đăng xuất
    const handleLogout = () => {
        // Xóa thông tin người dùng khỏi localStorage hoặc sessionStorage
        localStorage.removeItem('user');
        
        // Điều hướng người dùng về trang đăng nhập
        setIsLoggedIn(false); // Cập nhật trạng thái đăng nhập
        navigate('/login');
    };

    return (
        <div className={`flex transition-all duration-300 ${isOpen ? 'ml-64' : 'ml-0'}`}>
            {/* Sidebar menu */}
            <SideBar isOpen={isOpen} toggleMenu={toggleMenu} />

            <div className={`flex-1 transition-all duration-300`}>
                <div className="container shadow-[0_1px_3px_rgba(0,0,0,0.09)]">
                    <div className="md:px-40 px-5 flex items-center justify-between py-3 text-[#333]">
                        {/* Icon mở menu */}
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

                        {/* Logo */}
                        <div className="flex w-[70%] md:w-1/3 items-center py-3 justify-center">
                            <img src={logo} alt="Logo" className="h-[100px]" />
                        </div>

                        {/* Icons bên phải */}
                        <div className="w-[20%] md:w-1/3 flex items-center justify-end text-[#333] text-2xl">
                            <div className="cursor-pointer">
                                <FaSearch className="hidden md:block"/>
                            </div>
                            <Link to="/profile" className="cursor-pointer mx-4 md:mx-6">
                                <FaUser />
                            </Link>
                            <Link to="/cart" className="cursor-pointer">
                                <FaShoppingCart />
                            </Link>
                            {/* Hiển thị nút Đăng nhập/Đăng xuất */}
                            {isLoggedIn ? (
                                <div className="cursor-pointer mx-4 md:mx-6" onClick={handleLogout}>
                                    <FaSignOutAlt />
                                </div>
                            ) : (
                                <Link to="/login" className="cursor-pointer mx-4 md:mx-6">
                                    Đăng nhập
                                </Link>
                            )}
                        </div>
                    </div>
                </div>

                {/* Menu bình thường trên desktop */}
                <nav className="hidden md:block md:sticky md:top-0  md:z-10 text-[#333] font-semibold">
                    <ul className="flex items-center justify-center">
                        <li className="p-4">
                            <Link to="/" className="hover:opacity-80">Trang chủ</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/shop" className="hover:opacity-80">Sản phẩm</Link>
                        </li>
                        <li className="p-4">
                            <Link to="/listpost" className="hover:opacity-80">Bài viết</Link>
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
