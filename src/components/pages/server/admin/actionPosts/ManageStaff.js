import React, { useEffect, useState } from "react";
import axios from "axios";
import { FaEdit, FaTrash, FaSave } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ManageStaff = () => {
  const [staffList, setStaffList] = useState([]); // Danh sách nhân viên
  const [editId, setEditId] = useState(null); // ID của nhân viên đang được chỉnh sửa
  const [editedData, setEditedData] = useState({}); // Dữ liệu đang chỉnh sửa

  // Hàm tải dữ liệu từ API
  const fetchStaff = async () => {
    try {
      const response = await axios.get("http://localhost:3000/users");
      setStaffList(response.data);
    } catch (error) {
      toast.error("Lỗi khi tải dữ liệu nhân viên!");
    }
  };

  // Hàm xóa nhân viên
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/users/${id}`);
      setStaffList((prev) => prev.filter((staff) => staff.id !== id));
      toast.success("Xóa nhân viên thành công!");
    } catch (error) {
      toast.error("Lỗi khi xóa nhân viên!");
    }
  };

  // Hàm bắt đầu chỉnh sửa
  const handleEdit = (id, staff) => {
    setEditId(id); // Đặt ID đang chỉnh sửa
    setEditedData({ ...staff }); // Lưu dữ liệu nhân viên hiện tại vào trạng thái chỉnh sửa
  };

  // Hàm thay đổi dữ liệu khi người dùng chỉnh sửa
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedData({ ...editedData, [name]: value });
  };

  // Hàm lưu thay đổi
  const handleSave = async (id) => {
    try {
      // Gửi yêu cầu cập nhật thông tin qua API
      await axios.put(`http://localhost:3000/users/${id}`, editedData);
      // Cập nhật lại danh sách nhân viên
      setStaffList((prev) =>
        prev.map((staff) =>
          staff.id === id ? { ...staff, ...editedData } : staff
        )
      );
      setEditId(null); // Kết thúc chỉnh sửa
      toast.success("Cập nhật thông tin thành công!");
    } catch (error) {
      toast.error("Lỗi khi cập nhật thông tin!");
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  return (
    <div className="p-4">
      <ToastContainer />
      <h1 className="text-xl font-bold text-center mb-6">Quản lý nhân viên</h1>
      <table className="w-full border-collapse border border-gray-400">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-400 px-4 py-2">STT</th>
            <th className="border border-gray-400 px-4 py-2">Tên tài khoản</th>
            <th className="border border-gray-400 px-4 py-2">Họ và tên</th>
            <th className="border border-gray-400 px-4 py-2">Địa chỉ</th>
            <th className="border border-gray-400 px-4 py-2">Số điện thoại</th>
            <th className="border border-gray-400 px-4 py-2">Lương</th>
            <th className="border border-gray-400 px-4 py-2">Vị trí</th>
            <th className="border border-gray-400 px-4 py-2">Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {staffList.map((staff, index) => (
            <tr key={staff.id} className="bg-white">
              <td className="border border-gray-400 px-4 py-2 text-center">
                {index + 1}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {editId === staff.id ? (
                  <input
                    type="text"
                    name="username"
                    value={editedData.username || ""}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-4 py-1 w-24"
                  />
                ) : (
                  staff.username
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {editId === staff.id ? (
                  <input
                    type="text"
                    name="fullName"
                    value={editedData.fullName || ""}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-52"
                  />
                ) : (
                  staff.fullName
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {editId === staff.id ? (
                  <input
                    type="text"
                    name="address"
                    value={editedData.address || ""}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-24"
                  />
                ) : (
                  staff.address
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {editId === staff.id ? (
                  <input
                    type="text"
                    name="phoneNumber"
                    value={editedData.phone || ""}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-28"
                  />
                ) : (
                  staff.phone
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {editId === staff.id ? (
                  <input
                    type="text"
                    name="salary"
                    value={editedData.salary || ""}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-24"
                  />
                ) : (
                  staff.salary
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center">
                {editId === staff.id ? (
                  <input
                    type="text"
                    name="position"
                    value={editedData.position || ""}
                    onChange={handleChange}
                    className="border border-gray-300 rounded px-2 py-1 w-24"
                  />
                ) : (
                  staff.position
                )}
              </td>
              <td className="border border-gray-400 px-4 py-2 text-center flex justify-center gap-2">
                {editId === staff.id ? (
                  <button
                    onClick={() => handleSave(staff.id)}
                    className="text-green-500 hover:text-green-700 transition"
                  >
                    <FaSave size={18} />
                  </button>
                ) : (
                  <button
                    onClick={() => handleEdit(staff.id, staff)}
                    className="text-blue-500 hover:text-blue-700 transition"
                  >
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                        />
                      </svg>
                    </span>
                  </button>
                )}
                <button
                  onClick={() => handleDelete(staff.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  {/* <FaTrash size={18} /> */}
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="size-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                      />
                    </svg>
                  </span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageStaff;
