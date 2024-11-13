import React, { useContext, useEffect, useState } from "react";
import { MyServiceContext } from "../context/ServiceContext";
import AddDishGroup from "./ActionFoodService/AddDishGroup";
import EditDishGroup from "./ActionFoodService/EditDishGroup";

const DishGroupList = () => {
  const {
    isModalOpen,
    handleAddClick,
    closeModal,
    menuList,
    removeDishGroup,
    isModaEditlOpen,
    closeModalEdit,
    handleEditClick,
    setMenuList,
  } = useContext(MyServiceContext);
  const [groupCode, setGroupCode] = useState("");
  const [groupName, setGroupName] = useState("");
  const [filteredDishGroup, setFilteredDishGroup] = useState(menuList); // State để lưu danh sách đã lọc
  const handleGroupCodeChange = (event) => {
    setGroupCode(event.target.value);
  };

  const handleGroupNameChange = (event) => {
    setGroupName(event.target.value);
  };

  const handleSearch = (event) => {
    // event.preventDefault();
    const filteredList =
      groupCode || groupName
        ? menuList.filter(
            (item) =>
              (groupCode
                ? item.groupCode.toLowerCase().includes(groupCode.toLowerCase())
                : true) &&
              (groupName
                ? item.groupName.toLowerCase().includes(groupName.toLowerCase())
                : true)
          )
        : menuList;
    setFilteredDishGroup(filteredList);
    setGroupName("");
    setGroupCode("");
  };

  return (
    <div className="p-1 ">
      <h1 className=" text-xl font-bold text-center mb-6">Danh sách món</h1>

      <div className="w-full flex justify-center mb-2">
        <div className="w-4/5 flex justify-between items-end">
          <div className=" flex justify-start items-start">
            <button
              onClick={handleAddClick}
              class="h-8 relative inline-flex items-center justify-center px-3.5 py-2.5 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-lg shadow-md group"
            >
              <span class="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
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
              <span class="absolute flex items-center text-base font-semibold justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease">
                Thêm nhóm
              </span>
              <span class="relative text-base font-semibold invisible">
                Thêm mới
              </span>
            </button>
            {isModalOpen && <AddDishGroup closeModal={closeModal} />}
          </div>
          <div class="md:flex md:items-center flex justify-end items-end ">
            <div class="mr-3">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-40 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Mã số nhóm"
                onChange={handleGroupCodeChange}
                value={groupCode}
              />
            </div>
            <div class="">
              <input
                class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-56 py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                type="text"
                placeholder="Tên nhóm"
                value={groupName}
                onChange={handleGroupNameChange}
              />
            </div>

            <button
              type="submit"
              className="ml-3 bg-purple-500 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center justify-center">
        <table className="w-4/5 border-collapse border border-gray-400 ">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-4 py-2">STT</th>
              <th className="border border-gray-400 px-4 py-2">Mã số nhóm</th>
              <th className="border border-gray-400 px-4 py-2">Tên nhóm</th>
              <th className="border border-gray-400 px-4 py-2">Hành động</th>
            </tr>
          </thead>
          {menuList.length === 0 ? (
            <div className="text-center text-danger">Không có kết quả</div>
          ) : (
            <tbody>
              {menuList.map((item, index) => (
                <tr className="bg-white" key={item.id}>
                  <td className="border border-gray-400 px-4 py-2 text-center">
                    {index + 1}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-start">
                    {item.groupCode}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 text-start">
                    {item.groupName}
                  </td>
                  <td className="border border-gray-400 px-4 py-2 flex justify-center gap-4">
                    {/* edit */}
                    <div>
                      <button
                        type="button"
                        onClick={handleEditClick}
                        class="py-1 px-1 text-sm rounded-full border border-solid border-amber-200 text-amber-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-amber-600 hover:text-white"
                      >
                        <span>
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
                              d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                          </svg>
                        </span>
                      </button>
                      {isModaEditlOpen && (
                        <EditDishGroup closeModalEdit={closeModalEdit} />
                      )}
                    </div>

                    {/* delete */}
                    <button
                      type="button"
                      onClick={() => removeDishGroup(item.id)}
                      class="py-1 px-1 text-sm rounded-full border border-solid border-red-200 text-red-600 cursor-pointer font-semibold text-center shadow-xs transition-all duration-500 hover:bg-red-600 hover:text-white"
                    >
                      <span>
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
                            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                          />
                        </svg>
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </div>
  );
};

export default DishGroupList;
