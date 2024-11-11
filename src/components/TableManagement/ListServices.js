import React, { useContext, useEffect } from "react";
import { MyContextDataTable } from "../context/ContextDataTable";
function ListServices() {
  const { selectedTable } = useContext(MyContextDataTable);
  useEffect(() => {}, [selectedTable]);
  return (
    <div>
      <div className="p-1">
        <h1 className=" text-xl font-bold text-center mb-6">Danh sách món</h1>
        <table className="w-full border-collapse border border-gray-400">
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
              selectedTable.food.map((item) => (
                <tr className="bg-white" key={item.id}>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {item.id}
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
        {/* {dataTable.map((table) => (
          <div key={table.soBan} className="mb-8">
            <h2 className="text-xl font-semibold mb-4">Bàn {table.soBan}</h2>
            <table className="w-full border-collapse border border-gray-400">
              <thead>
                <tr className="bg-gray-200">
                  <th className="border border-gray-400 px-4 py-2">STT</th>
                  <th className="border border-gray-400 px-4 py-2">Tên món</th>
                  <th className="border border-gray-400 px-4 py-2">Số lượng</th>
                  <th className="border border-gray-400 px-4 py-2">Giá</th>
                  <th className="border border-gray-400 px-4 py-2">
                    Tổng tiền
                  </th>
                </tr>
              </thead>
              <tbody>
                {table.monAn.length > 0 ? (
                  table.monAn.map((item) => (
                    <tr key={item.id} className="bg-white">
                      <td className="border border-gray-400 px-4 py-2 text-center">
                        {item.id}
                      </td>
                      <td className="border border-gray-400 px-4 py-2">
                        {item.tenMon}
                      </td>
                      <td className="border border-gray-400 px-4 py-2 text-center">
                        {item.soLuong}
                      </td>
                      <td className="border border-gray-400 px-4 py-2 text-center">
                        {item.gia} VND
                      </td>
                      <td className="border border-gray-400 px-4 py-2 text-center">
                        {item.tongTien} VND
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="text-center py-4">
                      Không có món ăn
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        ))} */}
        <div className="mt-8 flex justify-center space-x-4">
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
            Tính tiền
          </button>
          <button className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none">
            Làm mới bảng
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListServices;
