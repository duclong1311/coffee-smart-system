import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../partial/Header";
import Footer from "../partial/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Update() {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        username: "",
        password: "",
        fullName: "",
        address: "",
        gender: "",
        phone: "",
        dob: "",
        profileImage: "",
    });

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            const parsedUser = JSON.parse(storedUser);
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

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setUser({
                    ...user,
                    profileImage: reader.result,
                });
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user.id) {
            toast.error("Cập nhật thất bại: Không tìm thấy ID người dùng!");
            return;
        }

        fetch(`http://localhost:3000/users/${user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username: user.username,
                password: user.password,
                fullName: user.fullName,
                address: user.address,
                gender: user.gender,
                phone: user.phone,
                dob: user.dob,
                profileImage: user.profileImage,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Cập nhật thất bại: " + response.statusText);
                }
                return response.json();
            })
            .then((data) => {
                localStorage.setItem("user", JSON.stringify(data));
                toast.success("Cập nhật thông tin thành công!");
                navigate("/profile");
            })
            .catch((error) => {
                console.error("Có lỗi xảy ra:", error);
                toast.error("Cập nhật thất bại!");
            });
    };

    return (
        <>
            <Header />
            <div className="bg-[#F9F4EE] text-gray-300 py-10">
                <section className="lg:w-[80%] md:w-[90%] xs:w-[96%] mx-auto flex gap-4">
                    <div className="lg:w-[88%] md:w-[80%] sm:w-[88%] xs:w-full mx-auto shadow-xl p-6 rounded-xl h-fit self-center bg-[#fff]">
                        <h1 className="lg:text-3xl md:text-2xl sm:text-xl xs:text-xl font-serif font-extrabold mb-2 text-[#333]">
                            Cập Nhật Thông Tin
                        </h1>

                        <div className="flex justify-center mb-4 relative">
                            <div
                                className="w-[141px] h-[141px] bg-blue-300/20 rounded-full"
                                style={{
                                    backgroundImage: `url(${user.profileImage || "https://cdn.eva.vn/upload/3-2021/images/2021-07-31/182636312_1294694704259617_8777969660546104509_n-down-1627714443-420-width800height1067.jpg"})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            ></div>
                        </div>

                        <div className="text-center mb-4">
                            <label
                                htmlFor="profileImageInput"
                                className="cursor-pointer block w-[200px] mx-auto bg-[#333] text-white font-semibold p-2 rounded-md hover:opacity-90"
                            >
                                Thay đổi ảnh hồ sơ
                            </label>
                            <input
                                type="file"
                                id="profileImageInput"
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            {/* Username */}
                            <div>
                                <label className="block text-[#333] font-semibold">Tên Đăng Nhập</label>
                                <input
                                    type="text"
                                    name="username"
                                    value={user.username}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 rounded-lg text-[#333] "
                                    placeholder="Tên đăng nhập"
                                />
                            </div>

                            {/* Password */}
                            <div>
                                <label className="block text-[#333] font-bold">Mật Khẩu</label>
                                <input
                                    type="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                                    placeholder="Mật khẩu"
                                />
                            </div>

                            {/* Full Name */}
                            <div>
                                <label className="block text-[#333] font-bold">Họ và Tên</label>
                                <input
                                    type="text"
                                    name="fullName"
                                    value={user.fullName}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                                    placeholder="Họ và tên"
                                />
                            </div>

                            {/* Address */}
                            <div>
                                <label className="block text-[#333] font-bold">Địa Chỉ</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={user.address}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                                    placeholder="Địa chỉ"
                                />
                            </div>

                            {/* Gender */}
                            <div>
                                <label className="block text-[#333] font-bold">Giới Tính</label>
                                <select
                                    name="gender"
                                    value={user.gender}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                                >
                                    <option value="">Chọn Giới Tính</option>
                                    <option value="Nam">Nam</option>
                                    <option value="Nữ">Nữ</option>
                                    <option value="Khác">Khác</option>
                                </select>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-[#333] font-bold">Số Điện Thoại</label>
                                <input
                                    type="text"
                                    name="phone"
                                    value={user.phone}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                                    placeholder="Số điện thoại"
                                />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className="block text-[#333] font-bold">Ngày Sinh</label>
                                <input
                                    type="date"
                                    name="dob"
                                    value={user.dob}
                                    onChange={handleChange}
                                    className="w-full p-4 border-2 rounded-lg text-[#333] ml-auto rtl"
                                />
                            </div>
                            {/* Salary - Display Only */}
                            <div>
                                <label className="block text-[#333] font-bold">Lương</label>
                                <input
                                    type="text"
                                    name="salary"
                                    value={user.salary}
                                    readOnly
                                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                                    placeholder="Lương"
                                />
                            </div>

                            {/* Position - Display Only */}
                            <div>
                                <label className="block text-[#333] font-bold">Vị Trí</label>
                                <input
                                    type="text"
                                    name="position"
                                    value={user.position}
                                    readOnly
                                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                                    placeholder="Vị trí"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full p-4 bg-[#333] text-white rounded-lg font-semibold mt-4 hover:opacity-90"
                            >
                                Cập Nhật
                            </button>

                            {/* Cancel Button */}
                            <button
                                type="button"
                                onClick={() => navigate("/profile")}
                                className="w-full p-4 rounded-lg bg-red-500 text-white cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-700"
                            >
                                Hủy
                            </button>
                        </form>
                    </div>
                </section>
            </div>
            <Footer />
            <ToastContainer />
        </>
    );
}

export default Update;
