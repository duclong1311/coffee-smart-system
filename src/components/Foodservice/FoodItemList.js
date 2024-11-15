import React from "react";

const FoodItemList = () => {
  const data = [
    {
      id: 1,
      code: "Sv01",
      name: "Cà phê đen",
      price: "15,000 VND",
      group: "Coffee",
    },
    {
      id: 2,
      code: "Sv02",
      name: "Tiramisu",
      price: "30,000 VND",
      group: "Bánh",
    },
    {
      id: 3,
      code: "Sv03",
      name: "Bò húc",
      price: "20,000 VND",
      group: "Nước tăng lực",
    },
    {
      id: 4,
      code: "Sv04",
      name: "Ép cam",
      price: "25,000 VND",
      group: "Nước trái cây",
    },
    {
      id: 5,
      code: "Sv05",
      name: "Cà phê sữa đá",
      price: "20,000 VND",
      group: "Coffee",
    },
  ];
  return (
    <div>
      <div className="container mx-auto mt-8">
        <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 border-b">STT</th>
              <th className="py-2 px-4 border-b">Mã số món</th>
              <th className="py-2 px-4 border-b">Tên món</th>
              <th className="py-2 px-4 border-b">Giá</th>
              <th className="py-2 px-4 border-b">Nhóm món</th>
              <th className="py-2 px-4 border-b">Hành động</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={item.id} className="text-center">
                <td className="py-2 px-4 border-b">{index + 1}</td>
                <td className="py-2 px-4 border-b">{item.code}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.price}</td>
                <td className="py-2 px-4 border-b">{item.group}</td>
                <td className="py-2 px-4 border-b">
                  <button className="text-blue-500 hover:text-blue-700 mx-1">
                    ✏️
                  </button>
                  <button className="text-red-500 hover:text-red-700 mx-1">
                    🗑️
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodItemList;
