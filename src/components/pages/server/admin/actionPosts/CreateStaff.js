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

  // Generate random password
  const generateRandomPassword = (length = 8) => {
    const chars =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?";
    return Array.from({ length }, () =>
      chars.charAt(Math.floor(Math.random() * chars.length))
    ).join("");
  };

  // Handle form input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const randomPassword = generateRandomPassword();
    const updatedFormData = { ...formData, password: randomPassword };

    try {
      await axios.post("http://localhost:3000/users", updatedFormData);
      toast.success(
        `Nhân viên được tạo thành công! Mật khẩu: ${randomPassword}`,
        { position: "top-right", autoClose: 5000 }
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
    <div className="p-6">
      <h1 className="text-xl font-bold text-center mb-6">Thêm Mới Nhân Viên</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto border p-6 rounded-lg shadow-md space-y-4 bg-white"
      >
        {[
          { name: "username", label: "Tên tài khoản", type: "text", required: true },
          { name: "fullName", label: "Họ và tên", type: "text", required: true },
          { name: "address", label: "Địa chỉ", type: "text" },
          { name: "phoneNumber", label: "Số điện thoại", type: "text", required: true },
          { name: "birthDate", label: "Ngày sinh", type: "date", required: true },
          { name: "salary", label: "Lương", type: "text" },
          { name: "position", label: "Vị trí", type: "text", required: true },
        ].map(({ name, label, type, required }) => (
          <div key={name}>
            <label className="block text-sm font-medium text-gray-700">{label}</label>
            <input
              type={type}
              name={name}
              value={formData[name]}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-lg px-4 py-2 w-full focus:ring-2 focus:ring-blue-800"
              required={required}
            />
          </div>
        ))}

        <div>
          <label className="block text-sm font-medium text-gray-700">Giới tính</label>
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

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 bg-white text-[#333] rounded hover:bg-[#333] hover:text-white transition border border-black"
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
