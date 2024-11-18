import React, { useContext, useEffect } from "react";
import { MyContextDataTable } from "../context/ContextDataTable";
function ListServices() {
  const { selectedTable } = useContext(MyContextDataTable);
  useEffect(() => {}, [selectedTable]);
  return (
    <div>
      <div className="p-1">
        <h1 className=" text-xl font-bold text-center mb-6">Danh sách món</h1>
        <table className="w-full border-collapse border border-gray-400 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">STT</th>
              <th className="border border-gray-400 px-4 py-2">Tên món</th>
              <th className="border border-gray-400 px-4 py-2">Số lượng</th>
              <th className="border border-gray-400 px-4 py-2">Giá</th>
              <th className="border border-gray-400 px-4 py-2">Số bàn</th>
              <th className="border border-gray-400 px-4 py-2">Tổng tiền</th>
            </tr>
          </thead>
          <tbody>
            {selectedTable && selectedTable.food.length > 0 ? (
              selectedTable.food.map((item, index) => (
                <tr className="bg-white font-sans   " key={item.id}>
                  <td className="border border-gray-400  px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-400 px-4 py-2">
                    {item.foodName}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.quantity}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.price} VND
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {selectedTable.tableNumber}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.totalPrice} VND
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
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-4 py-2 bg-[#6F4F37] hover:shadow-lg hover:shadow-amber-700 active:opacity-[0.85] text-white font-semibold rounded-lg shadow-md hover:bg-[#c48355] focus:outline-none">
            Tính tiền
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListServices;
