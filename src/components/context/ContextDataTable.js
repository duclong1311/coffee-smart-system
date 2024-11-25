import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const MyContextDataTable = createContext();

function ContextDataTable({ children }) {
  const [listTable, setListTable] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedTable, setSelectedTable] = useState(null);

  const getDataTable = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/listTable");
      setLoading(false);
      setListTable(response.data);
    } catch (e) {
      setLoading(false);
      console.error("Error fetching data:", e);
    }
  };

  useEffect(() => {
    getDataTable();
  }, []);
  return (
    <MyContextDataTable.Provider
      value={{ listTable, loading, selectedTable, setSelectedTable }}
    >
      {children}
    </MyContextDataTable.Provider>
  );
}

export default ContextDataTable;
