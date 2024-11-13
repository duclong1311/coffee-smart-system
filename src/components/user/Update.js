import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Update() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        fullName: "",
        address: "",
        gender: "",
        phone: "",
        dob: "",
    });

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
            console.log("User fetched from localStorage:", parsedUser); // Debug log
            setUser(parsedUser);
        }
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    
        // Kiểm tra xem ID người dùng có tồn tại không
        if (!user.id) {
            console.error("User ID is missing!");
            alert("Cập nhật thất bại: Không tìm thấy ID người dùng!");
            return;
        }
    
        fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PUT", // hoặc PATCH tùy vào yêu cầu của API
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullName: user.fullName,
                address: user.address,
                gender: user.gender,
                phone: user.phone,
                dob: user.dob,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Cập nhật thất bại: " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                // Cập nhật lại thông tin người dùng trong localStorage
                localStorage.setItem("user", JSON.stringify(data));
                alert("Cập nhật thông tin thành công!");
                navigate("/profile"); // Điều hướng về trang profile sau khi cập nhật
            })
            .catch((error) => {
                console.error("Có lỗi xảy ra:", error);
                alert("Cập nhật thất bại!");
            });
    };

    return (
        <div className="bg-gray-100 rounded-lg p-6 mx-auto my-5 max-w-4xl shadow-md">
            <h1 className="text-2xl text-gray-800 text-center mb-4">Cập Nhật Thông Tin</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-gray-700">Họ và Tên</label>
                    <input
                        type="text"
                        name="fullName"
                        value={user.fullName}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Địa Chỉ</label>
                    <input
                        type="text"
                        name="address"
                        value={user.address}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Giới Tính</label>
                    <select
                        name="gender"
                        value={user.gender}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    >
                        <option value="">Chọn Giới Tính</option>
                        <option value="Nam">Nam</option>
                        <option value="Nữ">Nữ</option>
                        <option value="Khác">Khác</option>
                    </select>
                </div>
                <div>
                    <label className="block text-gray-700">Số Điện Thoại</label>
                    <input
                        type="text"
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <div>
                    <label className="block text-gray-700">Ngày Sinh</label>
                    <input
                        type="date"
                        name="dob"
                        value={user.dob}
                        onChange={handleChange}
                        className="w-full p-2 border border-gray-300 rounded"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full p-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
                >
                    Cập Nhật
                </button>
                <button
                        type="button"
                        onClick={() => navigate("/profile")}
                        className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition"
                    >
                        Hủy
                    </button>
            </form>
        </div>
    );
}

export default Update;
