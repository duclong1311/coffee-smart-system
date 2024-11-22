import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreateStaff = () => {
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    address: "",
    phoneNumber: "",
    gender: "",
    birthDate: "",
    salary: "",
    position: "",
  });

  // Hàm tạo mật khẩu ngẫu nhiên
  const generateRandomPassword = (length = 8) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * chars.length);
      password += chars[randomIndex];
    }
    return password;
  };

  // Hàm xử lý thay đổi dữ liệu trong form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Hàm xử lý gửi dữ liệu
  const handleSubmit = async (e) => {
    e.preventDefault();

    const randomPassword = generateRandomPassword();
    const updatedFormData = { ...formData, password: randomPassword };

    try {
      await axios.post("http://localhost:3000/staff", updatedFormData);
      toast.success(
        `Nhân viên đã được tạo thành công! Mật khẩu: ${randomPassword}`,
        {
          position: "top-right",
          autoClose: 5000,
        }
      );
      setFormData({
        username: "",
        fullName: "",
        address: "",
        phoneNumber: "",
        gender: "",
        birthDate: "",
        salary: "",
        position: "",
      });
    } catch (error) {
      console.error("Error creating staff:", error);
      toast.error("Có lỗi xảy ra khi tạo nhân viên!", {
        position: "top-right",
        autoClose: 5000,
      });
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold text-center mb-6">Thêm Mới Nhân Viên</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-xl mx-auto border p-4 rounded-lg shadow-lg space-y-4"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Tên tài khoản
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-800"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Họ và tên
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-800"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Địa chỉ
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-800"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Số điện thoại
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-800"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Giới tính
          </label>
          <select
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-800"
            required
          >
            <option value="">-- Chọn giới tính --</option>
            <option value="Nam">Nam</option>
            <option value="Nữ">Nữ</option>
            <option value="Khác">Khác</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Ngày sinh
          </label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-800"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Lương</label>
          <input
            type="text"
            name="salary"
            value={formData.salary}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-800"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Vị trí</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleInputChange}
            className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-800"
            required
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition"
          >
            Thêm Nhân Viên
          </button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default CreateStaff;
