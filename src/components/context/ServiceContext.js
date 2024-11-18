import axios from "axios";
import React, { createContext, useEffect, useState } from "react";

export const MyServiceContext = createContext();
const ServiceContext = ({ children }) => {
  const [menuList, setMenuList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [inittialValue, setInnittialValue] = useState({
    groupCode: "",
    groupName: "",
  });

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
      alert("them thanh cong");
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
      alert("xoa thanh cong");
      getMenuList();
    } catch (e) {
      alert(e.message);
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
        }}
      >
        {children}
      </MyServiceContext.Provider>
    </div>
  );
};

export default ServiceContext;
