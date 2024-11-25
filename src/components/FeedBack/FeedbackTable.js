import React, { useEffect, useState } from "react";

import axios from "axios";

const FeedbackTable = () => {
  const [listFeedback, setListFeedback] = useState([]);
  // const [loading, setLoading] = useState(false);
  const [searchDate, setSearchDate] = useState("");

  const getDataFeedBack = async () => {
    try {
      // setLoading(true);
      const response = await axios.get("http://localhost:3000/feedBack");
      // setLoading(false);
      setListFeedback(response.data);
    } catch (e) {
      // setLoading(false);

      console.error("Error fetching data:", e);
    }
  };

  const filteredList = searchDate
    ? listFeedback.filter((post) => post.feedbackDate.includes(searchDate))
    : listFeedback;

  useEffect(() => {
    getDataFeedBack();
  }, []);

  return (
    <div>
      <div className="p-1">
        <h1 className=" text-xl font-bold text-center mb-6">
          Quản lý phản hồi
        </h1>
        <div className="mb-2 flex justify-end">
          <input
            type="search"
            value={searchDate}
            placeholder="Ex: 25/10/2024"
            onChange={(e) => setSearchDate(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm h-9 
                   focus:outline-none focus:ring-2 focus:ring-amber-800 
                    transition-all 
                   hover:ring-amber-600 text-gray-700"
          />
        </div>
        <table className="w-full border-collapse border border-gray-400 z-0">
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
            </tr>
          </thead>
          <tbody>
            {filteredList && filteredList.length > 0 ? (
              filteredList.map((item, index) => (
                <tr className="bg-white" key={item.id}>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {item.id}
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
      </div>
    </div>
  );
};

export default FeedbackTable;
