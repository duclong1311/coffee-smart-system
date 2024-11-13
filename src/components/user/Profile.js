import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from '../../assets/images/Loading.jpg';

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
        <div className="bg-gray-100 rounded-lg p-6 mx-auto my-5 max-w-4xl shadow-md">
            <h1 className="text-2xl text-gray-800 text-center mb-4">Thông Tin Cá Nhân</h1>
            <p className="text-gray-600 mb-2">Tên Đăng Nhập : {user.username}</p>
            <p className="text-gray-600 mb-2">Mật Khẩu : {user.password}</p>
            <p className="text-gray-600 mb-2">Họ và Tên : {user.fullName}</p>
            <p className="text-gray-600 mb-2">Địa Chỉ : {user.address}</p>
            <p className="text-gray-600 mb-2">Giới Tính : {user.gender}</p>
            <p className="text-gray-600 mb-2">Số Điện Thoại : {user.phone}</p>
            <p className="text-gray-600 mb-2">Ngày Sinh : {user.dob}</p>
            <p className="text-gray-600 mb-2">Lương : {user.salary}</p>
            <p className="text-gray-600 mb-2">Vị Trí : {user.position}</p>

            <div className="flex justify-center space-x-4 mt-4">
                <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Quay Về</Link>
                <Link to="/update" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Cập Nhật Thông Tin</Link>
                <Link to="/changepassword" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Thay Đổi Mật Khẩu</Link>
            </div>
        </div>
    );
}
