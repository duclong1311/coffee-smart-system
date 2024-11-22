import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageStaff = () => {
    const [staffList, setStaffList] = useState([]);
    const [searchUsername, setSearchUsername] = useState("");
    const [searchFullName, setSearchFullName] = useState("");
    const [searchPhoneNumber, setSearchPhoneNumber] = useState("");

    // Lấy danh sách nhân viên từ API
    const fetchStaff = async () => {
        try {
            const response = await axios.get("http://localhost:3000/users");
            console.log(response.data); // Xem cấu trúc dữ liệu
            setStaffList(response.data);
        } catch (error) {
            toast.error("Lỗi khi tải dữ liệu nhân viên!");
        }
    };
    // Xử lý tìm kiếm khi người dùng nhấn nút "Tìm kiếm"
    const handleSearch = () => {
        // Nếu không có điều kiện tìm kiếm, không thực hiện tìm kiếm
        if (!searchUsername && !searchFullName && !searchPhoneNumber) {
            toast.warning("Vui lòng nhập thông tin tìm kiếm.");
            return;
        }

        // Đảm bảo rằng tìm kiếm được thực hiện với dữ liệu nhập vào
        toast.success("Đang tìm kiếm nhân viên...");
        fetchStaff(); // Tải lại danh sách nhân viên để lọc kết quả

    };

    const handleEdit = (id) => {
        toast.info(`Chỉnh sửa nhân viên với ID: ${id}`);
        // Thêm logic chỉnh sửa tại đây
    };
    const handleDelete = (id) => {
        // Hiển thị thông báo yêu cầu xác nhận xóa nhân viên với hai lựa chọn
        toast.info(
            <div>
                <p className="mb-4 text-center">Bạn có chắc chắn muốn xóa nhân viên này?</p>
                <div className="flex justify-center space-x-4">
                    <button
                        className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
                        onClick={() => confirmDelete(id)} // Xác nhận xóa
                    >
                        Có
                    </button>
                    <button
                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
                        onClick={() => toast.dismiss()} // Hủy bỏ
                    >
                        Không
                    </button>
                </div>
            </div>,
            {
                position: "top-center",
                autoClose: false,  // Tắt tự động đóng
                closeOnClick: false, // Không đóng khi click vào toast
                draggable: false,  // Không cho phép kéo thả
                pauseOnHover: false,  // Không dừng khi hover
            }
        );
    };

    // Hàm thực hiện xóa nhân viên
    const confirmDelete = (id) => {
        // Gọi API xóa nhân viên
        fetch(`/api/staff/${id}`, { method: 'DELETE' })
            .then(() => {
                setStaffList(prevList => prevList.filter(staff => staff.id !== id)); // Cập nhật lại danh sách
                toast.success("Xóa nhân viên thành công.");
            })
            .catch(() => {
                toast.error("Có lỗi xảy ra khi xóa nhân viên.");
            });
    };

    useEffect(() => {
        fetchStaff();
    }, []);

    // Lọc danh sách nhân viên dựa trên các giá trị tìm kiếm
    const filteredStaff = staffList.filter(
        (staff) =>
            (staff.username && staff.username.toLowerCase().includes(searchUsername.toLowerCase())) &&
            (staff.fullName && staff.fullName.toLowerCase().includes(searchFullName.toLowerCase())) &&
            (staff.phoneNumber && staff.phoneNumber.includes(searchPhoneNumber))
    );

    return (
        <div className="p-4">
            <ToastContainer /> {/* Thêm ToastContainer */}
            <h1 className="text-xl font-bold text-center mb-6">Quản lý nhân viên</h1>
            {/* Tìm kiếm */}
            <div className="mb-4 flex items-center gap-4">
                <input
                    type="text"
                    value={searchUsername}
                    onChange={(e) => setSearchUsername(e.target.value)}
                    placeholder="Tìm theo tài khoản"
                    className="border border-gray-300 rounded px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    value={searchFullName}
                    onChange={(e) => setSearchFullName(e.target.value)}
                    placeholder="Tìm theo họ và tên"
                    className="border border-gray-300 rounded px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                    type="text"
                    value={searchPhoneNumber}
                    onChange={(e) => setSearchPhoneNumber(e.target.value)}
                    placeholder="Tìm theo số điện thoại"
                    className="border border-gray-300 rounded px-3 py-2 w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={handleSearch}  // Xử lý sự kiện tìm kiếm
                    className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Tìm Kiếm
                </button>
            </div>
            {/* Bảng nhân viên */}
            <table className="w-full border-collapse border border-gray-400">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border border-gray-400 px-4 py-2">STT</th>
                        <th className="border border-gray-400 px-4 py-2">Tên tài khoản</th>
                        <th className="border border-gray-400 px-4 py-2">Họ và tên</th>
                        <th className="border border-gray-400 px-4 py-2">Địa chỉ</th>
                        <th className="border border-gray-400 px-4 py-2">Số điện thoại</th>
                        <th className="border border-gray-400 px-4 py-2">Giới tính</th>
                        <th className="border border-gray-400 px-4 py-2">Ngày sinh</th>
                        <th className="border border-gray-400 px-4 py-2">Lương</th>
                        <th className="border border-gray-400 px-4 py-2">Vị trí</th>
                        <th className="border border-gray-400 px-4 py-2">Thao tác</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredStaff.length > 0 ? (
                        filteredStaff.map((users, index) => (
                            <tr key={users.id} className="bg-white">
                                <td className="border border-gray-400 px-4 py-2 text-center">
                                    {index + 1}
                                </td>
                                <td className="border border-gray-400 px-4 py-2 text-center">
                                    {users.username}
                                </td>
                                <td className="border border-gray-400 px-4 py-2 text-center">
                                    {users.fullName}
                                </td>
                                <td className="border border-gray-400 px-4 py-2 text-center">
                                    {users.address}
                                </td>
                                <td className="border border-gray-400 px-4 py-2 text-center">
                                    {users.phoneNumber}
                                </td>
                                <td className="border border-gray-400 px-4 py-2 text-center">
                                    {users.gender}
                                </td>
                                <td className="border border-gray-400 px-4 py-2 text-center">
                                    {users.birthDate}
                                </td>
                                <td className="border border-gray-400 px-4 py-2 text-center">
                                    {users.salary}
                                </td>
                                <td className="border border-gray-400 px-4 py-2 text-center">
                                    {users.position}
                                </td>
                                <td className="border border-gray-400 px-4 py-2 text-center flex justify-center gap-2">
                                    <button
                                        onClick={() => handleEdit(users.id)}
                                        className="text-blue-500 hover:text-blue-700 transition"
                                    >
                                        <FaEdit size={18} />
                                    </button>
                                    <button
                                        onClick={() => handleDelete(users.id)}
                                        className="text-red-500 hover:text-red-700 transition"
                                    >
                                        <FaTrash size={18} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="10" className="text-center py-4">
                                Không tìm thấy nhân viên nào
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div >
    );
};

export default ManageStaff;
