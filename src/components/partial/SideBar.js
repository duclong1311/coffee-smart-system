import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-dark-retina.webp';
import { FaTimes } from "react-icons/fa";


function SideBar({ isOpen, toggleMenu }) {
    return (
        <nav className={`fixed top-0 left-0 w-full h-full bg-white z-50 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
            <div className="flex justify-between items-center p-4 text-[#333]">
                <img src={logo} alt="Logo" className="w-1/3 flex justify-start" />
                {/* Icon đóng menu */}
                <div className="cursor-pointer w-1/3 flex justify-end items-center" onClick={toggleMenu}>
                    <FaTimes className="text-2xl text-[#333]"/>
                </div>
            </div>
            <ul className="flex flex-col items-center justify-center h-2/3 space-y-6 text-xl font-semibold">
                <li>
                    <Link to="/" onClick={toggleMenu} className="hover:opacity-80">HOME</Link>
                </li>
                <li>
                    <Link to="/shop" onClick={toggleMenu} className="hover:opacity-80">SHOP</Link>
                </li>
                <li>
                    <Link to="/blog" onClick={toggleMenu} className="hover:opacity-80">BLOG</Link>
                </li>
                <li>
                    <Link to="/contact" onClick={toggleMenu} className="hover:opacity-80">CONTACT</Link>
                </li>
                <li>
                    <Link to="/about" onClick={toggleMenu} className="hover:opacity-80">ABOUT</Link>
                </li>
            </ul>
        </nav>
    );
}

export default SideBar;
