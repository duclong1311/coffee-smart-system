import { Route, Routes } from "react-router-dom";
import { Header } from "./components/pages/server/admin/Header";
import { Home } from "./components/pages/client/Home"; // home của Như
import { HomeAdmin } from "./components/pages/server/admin/HomeAdmin";
import { ListPost } from "./components/pages/client/Posts/ListPost";
import { CreatePost } from "./components/pages/server/admin/actionPosts/CreatePost";
import { EditPost } from "./components/pages/server/admin/actionPosts/EditPost";
import { PostManagement } from "./components/pages/server/admin/actionPosts/PostManagement";
import DashBoard from "./components/pages/server/admin/AdminDashBoard";
import { Login } from './components/user/Login';
import { Profile } from './components/user/Profile';
import { ChangePassword } from './components/user/Changepassword';
import Update from './components/user/Update';
import  Staff  from "./components/pages/server/staff/Staff"; // Nếu bạn muốn hiển thị staff
import ContextDataTable from "./components/context/ContextDataTable";
import TableManagement from "./components/TableManagement/TableManagement";
import FeedbackContext from "../src/components/context/FeedbackContext";
import FeedbackTable from "../src/components/FeedBack/FeedbackTable";
import { DetailPost } from "./components/pages/client/Posts/DetailPost"; // Trang chi tiết bài viết

function App() {
  return (
    <>
      <Routes>
        {/* Trang người dùng */}
        <Route path="/" element={<Home />} />
        <Route path="/listpost" element={<ListPost />} />
        <Route path="/posts/:id" element={<DetailPost />} /> {/* Chi tiết bài viết */}

        {/* Trang đăng nhập và hồ sơ người dùng */}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/update" element={<Update />} />

        {/* Trang admin */}
        <Route path="admin" element={<HomeAdmin />}>
          <Route path="dashboard" element={<DashBoard />} /> {/* Bảng điều khiển admin */}
          <Route path="createpost" element={<CreatePost />} />
          <Route path="postmanagement" element={<PostManagement />} />
          <Route path="edit/:id" element={<EditPost />} /> {/* Edit post với ID */}
        </Route>

        {/* Trang quản lý nhân viên */}
        <Route path="staff" element={<Staff />}>
          <Route path="sale" element={
            <ContextDataTable>
              <TableManagement />
            </ContextDataTable>
          } />
          <Route path="feedback" element={
            <FeedbackContext>
              <FeedbackTable />
            </FeedbackContext>
          } />
        </Route>
      </Routes>
    </>
  );
}

export default App;
