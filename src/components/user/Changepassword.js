import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../partial/Footer";
import Header from "../partial/Header";

export function ChangePassword() {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);
    const [showOldPassword, setShowOldPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (oldPassword !== storedUser.password) {
            setError('Mật khẩu cũ không đúng!');
            return;
        }

        if (newPassword !== confirmPassword) {
            setError('Mật khẩu mới và mật khẩu xác nhận không khớp!');
            return;
        }

        if (newPassword.length < 6) {
            setError('Mật khẩu mới phải có ít nhất 6 ký tự.');
            return;
        }

        storedUser.password = newPassword;
        localStorage.setItem('user', JSON.stringify(storedUser));

        const response = await fetch(`http://localhost:3000/users/${storedUser.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(storedUser),
        });

        if (response.ok) {
            setSuccess(true);
            setError('');
        } else {
            setError('Lỗi khi cập nhật mật khẩu trong cơ sở dữ liệu!');
        }
    };

    return (
        <>
            <Header />
            <div className="bg-[#F9F4EE] text-gray-300 py-10">
            <div className=" bg-[#fff] text-[#333] rounded-lg p-6 mx-auto my-5 max-w-lg shadow-md">
                <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-4 text-[#333] text-center">
                    Thay Đổi Mật Khẩu
                </h1>

                {success && (
                    <div className="mb-4 text-green-600 text-center">
                        Mật khẩu đã được thay đổi thành công!
                    </div>
                )}

                {error && (
                    <div className="mb-4 text-red-600 text-center">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-4 relative">
                        <label className="block text-[#333] font-semibold" htmlFor="oldPassword">
                            Mật khẩu cũ
                        </label>
                        <input
                            type={showOldPassword ? "text" : "password"}
                            id="oldPassword"
                            className="w-full p-4 border-2 rounded-lg text-[#333]"
                            value={oldPassword}
                            onChange={(e) => setOldPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowOldPassword(!showOldPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/5"
                        >
                            {showOldPassword ? '🙈' : '👁️'}
                        </button>
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-[#333] font-semibold" htmlFor="newPassword">
                            Mật khẩu mới
                        </label>
                        <input
                            type={showNewPassword ? "text" : "password"}
                            id="newPassword"
                            className="w-full p-4 border-2 rounded-lg text-[#333]"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowNewPassword(!showNewPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/5"
                        >
                            {showNewPassword ? '🙈' : '👁️'}
                        </button>
                    </div>

                    <div className="mb-4 relative">
                        <label className="block text-[#333] font-semibold" htmlFor="confirmPassword">
                            Xác nhận mật khẩu mới
                        </label>
                        <input
                            type={showConfirmPassword ? "text" : "password"}
                            id="confirmPassword"
                            className="w-full p-4 border-2 rounded-lg text-[#333]"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                        <button
                            type="button"
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/5"
                        >
                            {showConfirmPassword ? '🙈' : '👁️'}
                        </button>
                    </div>

                    <div className="flex justify-center space-x-4 mt-4">
                        <button
                            type="submit"
                            className="w-full p-4 bg-[#333] text-white rounded-lg font-semibold hover:opacity-90"
                        >
                            Thay Đổi Mật Khẩu
                        </button>
                    </div>
                </form>

                <div className="text-center mt-4">
                    <Link to="/profile" className="text-blue-600 hover:underline">
                        Quay lại trang hồ sơ
                    </Link>
                </div>
            </div>
            </div>
            <Footer />
        </>
    );
}
