import { Link, useNavigate } from "react-router-dom";

export function Profile() {
    return (
        <>
        <div className="bg-gray-100 rounded-lg p-6 mx-auto my-5 max-w-4xl shadow-md">
            <h1 className="text-2xl text-gray-800 text-center mb-4">Thông Tin Cá Nhân</h1>
            <p className="text-gray-600 mb-2">Tên Đăng Nhập :</p>
            <p className="text-gray-600 mb-2">Mật Khẩu :</p>
            <p className="text-gray-600 mb-2">Họ và Tên :</p>
            <p className="text-gray-600 mb-2">Địa Chỉ :</p>
            <p className="text-gray-600 mb-2">Giới Tính :</p>
            <p className="text-gray-600 mb-2">Số điện thoại :</p>
            <p className="text-gray-600 mb-2">Ngày Sinh :</p>
            <p className="text-gray-600 mb-2">Lương :</p>
            <p className="text-gray-600 mb-2">Vị Trí :</p>
            
            <div className="flex justify-center space-x-4 mt-4">
                <Link to="/" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Quay Về</Link>
                <Link to="/update" className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">Cập Nhập Thông Tin</Link>
                <Link to="/change-password" className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Thay Đổi Mật Khẩu</Link>
            </div>
        </div>
        </>
    );
}
