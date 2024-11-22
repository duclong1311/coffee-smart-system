import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Nếu chưa cài, hãy cài `uuid` qua npm: npm install uuid
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const MyServiceContext = createContext();
const ServiceContext = ({ children }) => {
  const [menuList, setMenuList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inittialValue, setInnittialValue] = useState({
    groupCode: "",
    groupName: "",
  });
  const [defaultDishValues, setDefaultDishValues] = useState({
    code: "",
    foodName: "",
    price: "",
  });

  const [groupDetails, setGroupDetails] = useState("");

  const getMenuList = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/listFood");
      setLoading(false);
      setMenuList(response.data);
    } catch (e) {
      setLoading(false);

      console.error("Error fetching data:", e);
    }
  };

  const AddNewDishGroup = async (data) => {
    try {
      await axios.post("http://localhost:3000/listFood", {
        ...data,
        items: [],
      });
      toast.success("Thêm nhóm món thành công");
      setInnittialValue(inittialValue);
      getMenuList();
      // closeModal();
    } catch (e) {
      alert(e.message);
    }
  };

  const removeDishGroup = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/listFood/${id}`);
      // thiếu toast
      toast.success("xoá nhóm món thành công");

      getMenuList();
    } catch (e) {
      alert(e.message);
    }
  };

  const updateFoodList = async (data) => {
    try {
      await axios.put(`http://localhost:3000/listFood/${data.id}`, data);
      getMenuList();
    } catch (e) {
      alert(e.message);
    }
  };

  const fetchDishGroup = (item) => {
    console.log("🚀 ~ fetchDishGroup ~ item:", item);
    setGroupDetails(item);
  };

  const updateDishGroup = async (data) => {
    try {
      const newItem = {
        ...data,
        id: uuidv4(), // ID ngẫu nhiên
      };
      const res = await axios.put(
        `http://localhost:3000/listFood/${groupDetails.id}`,
        {
          ...groupDetails,
          items: [...groupDetails.items, newItem],
        }
      );
      toast.success("Thêm món mới thành công");
      setGroupDetails(res.data);
    } catch (e) {
      alert(e.message);
    }
  };

  const removeDish = async (id) => {
    try {
      const group = menuList.find((group) =>
        group.items.some((item) => item.id === id)
      );

      if (!group) throw new Error("Dish not found in any group!");

      // Lọc danh sách items để xóa sản phẩm
      const updatedItems = group.items.filter((item) => item.id !== id);

      // Tạo nhóm mới sau khi xóa
      const updatedGroup = { ...group, items: updatedItems };

      // Gửi dữ liệu cập nhật lên server
      const res = await axios.put(
        `http://localhost:3000/listFood/${group.id}`,
        updatedGroup
      );
      setGroupDetails(res.data);
    } catch (e) {
      toast.warning(e.message);
    }
  };

  useEffect(() => {
    getMenuList();
  }, []);

  return (
    <div>
      <MyServiceContext.Provider
        value={{
          menuList,
          loading,
          removeDishGroup,
          AddNewDishGroup,
          setMenuList,
          inittialValue,
          updateFoodList,
          fetchDishGroup,
          groupDetails,
          updateDishGroup,
          defaultDishValues,
          removeDish,
        }}
      >
        {children}
      </MyServiceContext.Provider>
    </div>
  );
};

export default ServiceContext;
