import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
export const MyFeedBackContext = createContext();

const FeedbackContext = ({ children }) => {
  const [listFeedback, setListFeedback] = useState([]);
  const [loading, setLoading] = useState(false);
  const getDataFeedBack = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/feedBack");
      setLoading(false);
      // console.log("🚀 ~ getDataFeedBack ~ response:", response.data);
      setListFeedback(response.data);
    } catch (e) {
      setLoading(false);

      console.error("Error fetching data:", e);
    }
  };
  useEffect(() => {
    getDataFeedBack();
  }, []);
  return (
    <div>
      <MyFeedBackContext.Provider value={{ loading, listFeedback }}>
        {children}
      </MyFeedBackContext.Provider>
    </div>
  );
};

export default FeedbackContext;
