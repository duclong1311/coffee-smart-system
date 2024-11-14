import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from '../../assets/images/Loading.jpg';
import Header from "../partial/Header";
import Footer from "../partial/Footer";

export function Profile() {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    if (!user) {
        return <div><img src={Loading} alt="Logo" className="w-full flex justify-start" /></div>;
    }

    return (
        <>
            <Header />
            <div className="bg-cover bg-center bg-[url('https://example.com/your-image.jpg')] text-gray-300 py-10">
                <section className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                    <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-2xl p-6 rounded-xl h-fit self-center bg-[#333]">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 text-white">
                            Thông Tin Cá Nhân
                        </h1>

                        {/* Ảnh nền */}
                        <div className="w-full rounded-sm bg-[url('https://png.pngtree.com/background/20210709/original/pngtree-coffee-background-for-simple-coffee-restaurant-picture-image_905317.jpg')] bg-cover bg-center bg-no-repeat items-center mb-6">
                            {/* Ảnh hồ sơ */}
                            <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://cdn.eva.vn/upload/3-2021/images/2021-07-31/182636312_1294694704259617_8777969660546104509_n-down-1627714443-420-width800height1067.jpg')] bg-cover bg-center bg-no-repeat"></div>
                        </div>

                        {/* Hiển thị thông tin cá nhân */}
                        <p className="text-white-600 mb-2 font-extrabold">Tên Đăng Nhập : {user.username}</p>
                        <p className="text-white-600 mb-2 font-extrabold">Mật Khẩu : {user.password}</p>
                        <p className="text-white-600 mb-2 font-extrabold">Họ và Tên : {user.fullName}</p>
                        <p className="text-white-600 mb-2 font-extrabold">Địa Chỉ : {user.address}</p>
                        <p className="text-white-600 mb-2 font-extrabold">Giới Tính : {user.gender}</p>
                        <p className="text-white-600 mb-2 font-extrabold">Số Điện Thoại : {user.phone}</p>
                        <p className="text-white-600 mb-2 font-extrabold">Ngày Sinh : {user.dob}</p>
                        <p className="text-white-600 mb-2 font-extrabold">Lương : {user.salary}</p>
                        <p className="text-white-600 mb-2 font-extrabold">Vị Trí : {user.position}</p>

                        <div className="flex justify-center space-x-4 mt-4">
                            <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Quay Về</Link>
                            <Link to="/update" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Cập Nhật Thông Tin</Link>
                            <Link to="/changepassword" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Thay Đổi Mật Khẩu</Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
