import { Route, Routes } from "react-router-dom";
import {  ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS

import { Home } from "./components/pages/client/Home";
import { HomeAdmin } from "./components/pages/server/admin/HomeAdmin";
import { ListPost } from "./components/pages/client/Posts/ListPost";
import { CreatePost } from "./components/pages/server/admin/actionPosts/CreatePost";
import { EditPost } from "./components/pages/server/admin/actionPosts/EditPost";
import { PostManagement } from "./components/pages/server/admin/actionPosts/PostManagement";
import DashBoard from "./components/pages/server/admin/AdminDashBoard";
import { Login } from "./components/user/Login";
import { Profile } from "./components/user/Profile";
import { ChangePassword } from "./components/user/Changepassword";
import Update from "./components/user/Update";
import Staff from "./components/pages/server/staff/Staff";
import ContextDataTable from "./components/context/ContextDataTable";
import TableManagement from "./components/TableManagement/TableManagement";
import FeedbackTable from "../src/components/FeedBack/FeedbackTable";
import { DetailPost } from "./components/pages/client/Posts/DetailPost";

function App() {

  return (
    <>
      <ToastContainer 
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      draggable
      theme="light"
      />
      <Routes>
        {/* Trang người dùng */}
        <Route path="/" element={<Home />} />
        <Route path="/listpost" element={<ListPost />} />
        <Route path="/posts/:id" element={<DetailPost />} />

        {/* Trang đăng nhập và hồ sơ người dùng */}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/update" element={<Update />} />

        {/* Trang admin */}
        <Route path="admin" element={<HomeAdmin />}>
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="postmanagement" element={<PostManagement />} />
          <Route path="edit/:id" element={<EditPost />} />
        </Route>

        {/* Trang quản lý nhân viên */}
        <Route path="staff" element={<Staff />}>
          <Route
            path="sale"
            element={
              <ContextDataTable>
                <TableManagement />
              </ContextDataTable>
            }
          />
          <Route path="feedback" element={<FeedbackTable />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
