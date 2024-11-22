import axios from "axios";
import { Field, Form, Formik } from "formik";
import React, { useContext, useState } from "react";
import { MyServiceContext } from "../../../context/ServiceContext";
import { storage, ref, uploadBytesResumable, getDownloadURL } from "../../../../firebase";

const AddNewDish = ({ closeModalAddDish, groupDetails }) => {
  const { updateDishGroup, defaultDishValues } = useContext(MyServiceContext);
  const [uploading, setUploading] = useState(false);
  const [previewImage, setPreviewImage] = useState(""); // State lưu URL ảnh preview
  const [imageToUpload, setImageToUpload] = useState(null); // Lưu trữ file ảnh chưa upload

  // Hàm xử lý submit
  const onSubmitHandler = async (data) => {
    console.log("🚀 ~ Dữ liệu nhận được:", data);

    // Nếu có ảnh cần upload thì gọi hàm upload ảnh
    if (imageToUpload) {
      setUploading(true);
      const fileName = `${new Date().getTime()}_${imageToUpload.name}`;
      const storageRef = ref(storage, `dish_images/${fileName}`);
      const uploadTask = uploadBytesResumable(storageRef, imageToUpload);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload progress: ${progress}%`);
        },
        (error) => {
          console.error("Upload failed:", error);
          alert("Upload ảnh thất bại. Vui lòng thử lại.");
          setUploading(false);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          console.log("URL ảnh đã upload:", downloadURL);
          setUploading(false);
          data.image = downloadURL; // Gán URL ảnh vào dữ liệu

          // Gửi dữ liệu đã bao gồm URL ảnh lên server
          updateDishGroup(data);
          closeModalAddDish();
        }
      );
    } else {
      // Nếu không có ảnh, gửi luôn dữ liệu mà không upload ảnh
      updateDishGroup(data);
      closeModalAddDish();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Tạo URL preview
      const previewUrl = URL.createObjectURL(file);
      setPreviewImage(previewUrl);
      setImageToUpload(file); // Lưu trữ ảnh chưa upload
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded-lg shadow-lg w-2/6">
        <h2 className="text-xl font-semibold mb-4">Thêm mới món</h2>
        <Formik
          initialValues={{ ...defaultDishValues, image: "" }}
          onSubmit={onSubmitHandler}
        >
          {({ setFieldValue }) => (
            <Form>
              <div className="mb-4 flex justify-between pr-16 pl-3 items-center">
                <label className="block text-sm font-medium text-gray-700">
                  Mã số món
                </label>
                <Field
                  type="text"
                  name="code"
                  className="w-2/3 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 flex justify-between pr-16 pl-3 items-center">
                <label className="block text-sm font-medium text-gray-700">
                  Tên món
                </label>
                <Field
                  type="text"
                  name="foodName"
                  className="w-2/3 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 flex justify-between pr-16 pl-3 items-center">
                <label className="block text-sm font-medium text-gray-700">
                  Giá món
                </label>
                <Field
                  type="text"
                  name="price"
                  className="w-2/3 p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div className="mb-4 flex flex-col items-start">
                <label className="block text-sm font-medium text-gray-700">
                  Hình ảnh món
                </label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="w-full mt-2"
                />
                {previewImage && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">Xem trước:</p>
                    <img
                      src={previewImage}
                      alt="Preview"
                      className="w-32 h-32 object-cover mt-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                )}
              </div>
              {uploading && (
                <div className="text-sm text-blue-500 text-center mb-4">
                  Đang tải ảnh lên...
                </div>
              )}
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={closeModalAddDish}
                  className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition"
                  disabled={uploading}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default AddNewDish;
