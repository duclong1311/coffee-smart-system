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
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-semisemibold mb-2 text-white">
                            Thông Tin Cá Nhân
                        </h1>

                        {/* Ảnh nền */}
                        <div className="w-full rounded-xl bg-[url('https://png.pngtree.com/background/20210709/original/pngtree-coffee-background-for-simple-coffee-restaurant-picture-image_905317.jpg')] bg-cover bg-center bg-no-repeat items-center mb-6">
                            {/* Ảnh hồ sơ */}
                            <div className="mx-auto flex justify-center w-[141px] h-[141px] bg-blue-300/20 rounded-full bg-[url('https://cdn.eva.vn/upload/3-2021/images/2021-07-31/182636312_1294694704259617_8777969660546104509_n-down-1627714443-420-width800height1067.jpg')] bg-cover bg-center bg-no-repeat"></div>
                        </div>

                        {/* Hiển thị thông tin cá nhân */}
                        <p className=" mb-2 font-semibold">Tên Đăng Nhập : <span className="font-normal">{user.username}</span></p>
                        <p className=" mb-2 font-semibold">Mật Khẩu : <span className="font-normal">{user.password}</span></p>
                        <p className=" mb-2 font-semibold">Họ và Tên : <span className="font-normal">{user.fullName}</span></p>
                        <p className=" mb-2 font-semibold">Địa Chỉ : <span className="font-normal">{user.address}</span></p>
                        <p className=" mb-2 font-semibold">Giới Tính : <span className="font-normal">{user.gender}</span></p>
                        <p className=" mb-2 font-semibold">Số Điện Thoại : <span className="font-normal">{user.phone}</span></p>
                        <p className=" mb-2 font-semibold">Ngày Sinh : <span className="font-normal">{user.dob}</span></p>
                        <p className=" mb-2 font-semibold">Lương : <span className="font-normal">{user.salary}</span></p>
                        <p className=" mb-2 font-semibold">Vị Trí : <span className="font-normal">{user.position}</span></p>

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
