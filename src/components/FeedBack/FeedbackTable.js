import React, { useContext, useState } from "react";
import { FaEye } from "react-icons/fa";
import { MyFeedBackContext } from "../context/FeedbackContext";

const FeedbackTable = () => {
  const { listFeedback } = useContext(MyFeedBackContext);
  const [formattedDate, setFormattedDate] = useState(""); // Định dạng dd/mm/yyyy
  const [rawDate, setRawDate] = useState(""); // Định dạng yyyy-MM-dd cho input

  const handleDateChange = (e) => {
    const rawDateValue = e.target.value;
    setRawDate(rawDateValue);
    const [year, month, day] = rawDateValue.split("-");
    setFormattedDate(`${day}/${month}/${year}`);
  };

  const filteredList = formattedDate
    ? listFeedback.filter((item) => {
        const [day] = formattedDate.split("/");
        const [feedbackDay] = item.feedbackDate.split("/");
        return feedbackDay === day;
      })
    : listFeedback;
  return (
    <div>
      <div className="p-1">
        <h1 className=" text-xl font-bold text-center mb-6">
          Quản lý phản hồi
        </h1>
        <div className="mb-2 flex justify-end">
          <input
            type="date"
            value={rawDate}
            onChange={handleDateChange}
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm h-9 
                   focus:outline-none focus:ring-2 focus:ring-blue-500 
                   focus:border-blue-500 transition-all 
                   hover:border-blue-400 text-gray-700"
          />
        </div>

        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">STT</th>
              <th className="border border-gray-400 px-4 py-2">
                Mã số phản hồi
              </th>
              <th className="border border-gray-400 px-4 py-2">
                Ngày phản hồi
              </th>
              <th className="border border-gray-400 px-4 py-2">Người tạo</th>
              <th className="border border-gray-400 px-4 py-2">Email</th>
              <th className="border border-gray-400 px-4 py-2">Phản hồi</th>
              <th className="border border-gray-400 px-4 py-2">Xem</th>
            </tr>
          </thead>
          <tbody>
            {filteredList && filteredList.length > 0 ? (
              filteredList.map((item) => (
                <tr className="bg-white" key={item.id}>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.id}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {item.feedbackCode}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.feedbackDate}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.createdBy}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.email}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.feedback}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    <button>
                      <FaEye />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  Không có dữ liệu
                </td>
              </tr>
            )}
          </tbody>
        </table>

        {/* <div className="mt-8 flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
            Tính tiền
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
            Làm mới bảng
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default FeedbackTable;
