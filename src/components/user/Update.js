import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../partial/Header";
import Footer from "../partial/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  storage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "../../firebase"; // Import Firebase methods

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
    role: 0,
  });
  const [imageFile, setImageFile] = useState(null); // State to hold the image file before uploading
  const [uploadProgress, setUploadProgress] = useState(0); // State to track upload progress
  const [isUploading, setIsUploading] = useState(false); // Trạng thái đang upload

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
    const MAX_SIZE = 5 * 1024 * 1024; // 5MB

    if (file) {
      // Check if the file size exceeds the limit
      if (file.size > MAX_SIZE) {
        toast.error("Ảnh quá lớn! Vui lòng chọn ảnh có kích thước dưới 5MB.");
        return;
      }

      setImageFile(file); // Store the image file locally
      const imageUrl = URL.createObjectURL(file); // Generate a URL for the selected image
      setUser({
        ...user,
        profileImage: imageUrl, // Set the preview image
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!user.id) {
      toast.error("Cập nhật thất bại: Không tìm thấy ID người dùng!");
      return;
    }

    setIsUploading(true); // Bắt đầu upload

    let profileImageUrl = user.profileImage;
    if (imageFile) {
      const storageRef = ref(storage, `profile_images/${imageFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, imageFile);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress); // Update progress state
        },
        (error) => {
          toast.error("Upload ảnh thất bại!");
          console.error("Error uploading image:", error);
          setIsUploading(false); // Kết thúc upload khi có lỗi
        },
        () => {
          // Get the download URL of the uploaded image
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            profileImageUrl = downloadURL; // Use the uploaded image URL
            updateUserData(profileImageUrl);
          });
        }
      );
    } else {
      updateUserData(profileImageUrl);
    }
  };

  const updateUserData = (profileImageUrl) => {
    fetch(`http://localhost:3000/users/${user.id}`, {
      method: "PATCH",
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
        profileImage: profileImageUrl, // Send the updated image URL
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
      })
      .finally(() => setIsUploading(false)); // Kết thúc upload
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
                  backgroundImage: `url(${
                    user.profileImage ||
                    "https://cdn.eva.vn/upload/3-2021/images/2021-07-31/182636312_1294694704259617_8777969660546104509_n-down-1627714443-420-width800height1067.jpg"
                  })`,
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

            {uploadProgress > 0 && uploadProgress < 100 && (
              <div className="mb-4">
                <div className="text-center text-[#333] font-semibold">
                  Tải ảnh lên: {Math.round(uploadProgress)}%
                </div>
                <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
                  <div
                    className="bg-[#3333FF] h-2 rounded-full"
                    style={{ width: `${uploadProgress}%` }}
                  ></div>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {/* Username */}
                <div>
                  <label className="block text-[#333] font-semibold">
                    Tên Đăng Nhập
                  </label>
                  <input
                    type="text"
                    name="username"
                    value={user.username}
                    onChange={handleChange}
                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                    placeholder="Tên đăng nhập"
                  />
                </div>

                {/* Password */}
                <div>
                  <label className="block text-[#333] font-bold">
                    Mật Khẩu
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                    placeholder="Mật khẩu"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Full Name */}
                <div>
                  <label className="block text-[#333] font-bold">
                    Họ và Tên
                  </label>
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
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Gender */}
                <div>
                  <label className="block text-[#333] font-bold">
                    Giới Tính
                  </label>
                  <select
                    name="gender"
                    value={user.gender}
                    onChange={handleChange}
                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                  >
                    <option value="male">Nam</option>
                    <option value="female">Nữ</option>
                    <option value="other">Khác</option>
                  </select>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[#333] font-bold">
                    Số Điện Thoại
                  </label>
                  <input
                    type="text"
                    name="phone"
                    value={user.phone}
                    onChange={handleChange}
                    className="w-full p-4 border-2 rounded-lg text-[#333]"
                    placeholder="Số điện thoại"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Date of Birth */}
                <div>
                  <label className="block text-[#333] font-bold">
                    Ngày Sinh
                  </label>
                  <input
                    type="date"
                    name="dob"
                    value={user.dob}
                    onChange={handleChange}
                    className="w-full p-4 border-2 rounded-lg text-[#333]"
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
              </div>

              <div className="grid grid-cols-2 gap-4">
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
              </div>

              <div className="flex justify-center space-x-16 mt-4">
                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-[#333] rounded hover:bg-[#333] hover:text-white transition border border-black"
                  disabled={isUploading} // Disable nếu đang upload
                >
                  {isUploading ? "Đang cập nhật..." : "Cập Nhật"}
                </button>

                {/* Cancel Button */}
                <button
                  type="button"
                  onClick={() => navigate("/profile")}
                  className="px-4 py-2 bg-white text-[#333] rounded hover:bg-[#FF0000] hover:text-white transition border border-black"
                >
                  Hủy
                </button>
              </div>
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