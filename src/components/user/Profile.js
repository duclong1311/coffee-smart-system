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
            <div className="bg-cover bg-center bg-[#F9F4EE] bg-[url('https://example.com/your-image.jpg')] text-gray-300 py-10">
                <section className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                    <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-xl p-6 rounded-xl h-fit self-center bg-[#fff] text-[#333]">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-bold mb-4 text-[#333] text-center">
                            Thông Tin Cá Nhân
                        </h1>

                        {/* Cover photo */}
                        <div className="w-full h-[150px] bg-[url('https://images8.alphacoders.com/134/1349209.png')] bg-cover bg-center mb-6 rounded-xl"></div>

                        {/* Container for user information and profile image */}
                        <div className="flex flex-col md:flex-row-reverse gap-6 items-start md:items-center mb-6">
                            {/* Profile image */}
                            <div className="w-[250px] h-[250px] bg-[url('https://cdn.eva.vn/upload/3-2021/images/2021-07-31/182636312_1294694704259617_8777969660546104509_n-down-1627714443-420-width800height1067.jpg')] bg-cover bg-center bg-no-repeat"></div>

                            {/* User information */}
                            <div className="flex-1">
                                <p className="mb-2 font-semibold">Tên Đăng Nhập: <span className="font-normal">{user.username}</span></p>
                                <p className="mb-2 font-semibold">Mật Khẩu: <span className="font-normal">{user.password}</span></p>
                                <p className="mb-2 font-semibold">Họ và Tên: <span className="font-normal">{user.fullName}</span></p>
                                <p className="mb-2 font-semibold">Địa Chỉ: <span className="font-normal">{user.address}</span></p>
                                <p className="mb-2 font-semibold">Giới Tính: <span className="font-normal">{user.gender}</span></p>
                                <p className="mb-2 font-semibold">Số Điện Thoại: <span className="font-normal">{user.phone}</span></p>
                                <p className="mb-2 font-semibold">Ngày Sinh: <span className="font-normal">{user.dob}</span></p>
                                <p className="mb-2 font-semibold">Lương: <span className="font-normal">{user.salary}</span></p>
                                <p className="mb-2 font-semibold">Vị Trí: <span className="font-normal">{user.position}</span></p>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex justify-center space-x-4 mt-4">
                            <Link to="/" className="px-4 py-2 bg-white text-[#333] rounded hover:bg-[#333] hover:text-white transition border border-black">
                                Quay Về
                            </Link>
                            <Link to="/update" className="px-4 py-2 bg-white text-[#333] rounded hover:bg-[#333] hover:text-white transition border border-black">Cập Nhật Thông Tin</Link>
                            <Link to="/changepassword" className="px-4 py-2 bg-white text-[#333] rounded hover:bg-[#333] hover:text-white transition border border-black">Thay Đổi Mật Khẩu</Link>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}
