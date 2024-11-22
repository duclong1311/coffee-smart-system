import React, { useContext, useState } from "react";
import { MyServiceContext } from "../../context/ServiceContext";
import DishItems from "./DishItems";
import AddNewDish from "./ActionMenuByGroup/AddNewDish";

const CategoryDishList = () => {
  const { groupDetails } = useContext(MyServiceContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [isModalAddDishOpen, setIsModalAddDishOpen] = useState(false);
  const dishList = groupDetails.items;

  const filteredDishes = searchQuery
    ? dishList.filter((data) =>
        data.foodName.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : dishList;

  const handleAddDishClick = () => {
    setIsModalAddDishOpen(true);
  };
  const closeModalAddDish = () => {
    setIsModalAddDishOpen(false);
  };

  return (
    <>
      <div className="p-1 ">
        <h1 className=" text-xl font-bold text-center mt-2">
          Thực đơn của nhóm <span>{groupDetails.groupName}</span>
        </h1>

        <div className="w-full flex justify-center mb-2">
          <div className="w-4/6 flex justify-between items-end">
            <div className=" flex justify-start items-start">
              <button
                onClick={handleAddDishClick}
                class="h-8 relative inline-flex items-center justify-center px-3.5 py-2.5 overflow-hidden font-medium text-amber-700 transition duration-300 ease-out border-2 border-amber-700 rounded-lg shadow-md group"
              >
                <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#6F4F37] group-hover:translate-x-0 ease">
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
                      d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </span>
                <span class="absolute flex items-center text-base font-semibold justify-center w-full h-full text-amber-700 transition-all duration-300 transform group-hover:translate-x-full ease">
                  Thêm món
                </span>
                <span class="relative text-base font-semibold invisible">
                  Thêm mới
                </span>
              </button>
              {isModalAddDishOpen && (
                <AddNewDish
                  closeModalAddDish={closeModalAddDish}
                  groupDetails={groupDetails}
                />
              )}
            </div>
            <div class="md:flex md:items-center flex justify-end items-end ">
              <div class="">
                <input
                  class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-56 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="Search: Tên món ăn "
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <table className="w-4/6 border-collapse border border-gray-400 ">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-400 px-4 py-2">STT</th>
                <th className="border border-gray-400 px-4 py-2">Mã số món</th>
                <th className="border border-gray-400 px-4 py-2">Tên món</th>
                <th className="border border-gray-400 px-4 py-2">Giá tiền</th>
                <th className="border border-gray-400 px-4 py-2">Hành động</th>
              </tr>
            </thead>
            {filteredDishes.length === 0 ? (
              <div className="text-center text-danger">Không có kết quả</div>
            ) : (
              <tbody>
                {filteredDishes.map((item, index) => (
                  <DishItems key={item.id} item={item} index={index} />
                ))}
              </tbody>
            )}
          </table>
        </div>
      </div>
    </>
  );
};

export default CategoryDishList;
