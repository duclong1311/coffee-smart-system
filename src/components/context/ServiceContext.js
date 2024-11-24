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
      toast.warning(e.message);
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
      toast.warning(e.message);
    }
  };

  const removeDishGroup = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/listFood/${id}`);
      // thiếu toast
      toast.success("xoá nhóm món thành công");

      getMenuList();
    } catch (e) {
      toast.warning(e.message);
    }
  };

  const updateFoodList = async (data) => {
    try {
      await axios.put(`http://localhost:3000/listFood/${data.id}`, data);
      getMenuList();
    } catch (e) {
      toast.warning(e.message);
    }
  };

  /// danh sách món ăn

  const fetchDishGroup = (item) => {
    console.log("🚀 ~ fetchDishGroup ~ item:", item);
    setGroupDetails(item);
  };

  // thêm món ăn
  const AddDishGroup = async (data) => {
    try {
      const newItem = {
        ...data,
        id: uuidv4(), // ID ngẫu nhiên
      };
      const res = await axios.patch(
        `http://localhost:3000/listFood/${groupDetails.id}`,
        {
          ...groupDetails,
          items: [...groupDetails.items, newItem],
        }
      );
      toast.success("Thêm món mới thành công");
      setGroupDetails(res.data);
      getMenuList();
    } catch (e) {
      toast.warning(e.message);
    }
  };

  const removeDish = async (id) => {
    try {
      const group = menuList.find((group) =>
        group.items.some((item) => item.id === id)
      );

      if (!group) toast.warning("Dish not found in any group!");

      // Lọc danh sách items để xóa sản phẩm
      const updatedItems = group.items.filter((item) => item.id !== id);

      const updatedGroup = { ...group, items: updatedItems };
      console.log("🚀 ~ removeDish ~ updatedGroup:", updatedGroup);

      const res = await axios.patch(
        `http://localhost:3000/listFood/${group.id}`,
        updatedGroup
      );
      setGroupDetails(res.data);
      getMenuList();
    } catch (e) {
      toast.warning(e.message);
    }
  };
  const updateDishDetails = async (data) => {
    try {
      // Kiểm tra món có tồn tại hay không
      const itemExists = groupDetails.items.some((item) => item.id === data.id);

      const updatedItems = itemExists
        ? groupDetails.items.map(
            (item) => (item.id === data.id ? { ...item, ...data } : item) // Cập nhật món nếu đã tồn tại
          )
        : [...groupDetails.items, data]; // Thêm mới nếu chưa tồn tại

      // Gửi danh sách items mới lên server
      const res = await axios.patch(
        `http://localhost:3000/listFood/${groupDetails.id}`,
        {
          ...groupDetails,
          items: updatedItems, // Cập nhật danh sách items
        }
      );

      console.log("🚀 ~ UpdateDish ~ res:", res.data);

      // Cập nhật state
      setGroupDetails(res.data);
      getMenuList(); // Làm mới danh sách trên giao diện
    } catch (e) {
      toast.warning(`Cập nhật thất bại: ${e.message}`);
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
          AddDishGroup,
          defaultDishValues,
          removeDish,
          updateDishDetails,
        }}
      >
        {children}
      </MyServiceContext.Provider>
    </div>
  );
};

export default ServiceContext;
