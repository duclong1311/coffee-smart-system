import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify"; // Import ToastContainer
import "react-toastify/dist/ReactToastify.css"; // Import CSS
import { Main } from "./components/pages/client/Main";
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
import BillManagement from "./components/pages/server/staff/BillManagement";
import ContextDataTable from "./components/context/ContextDataTable";
import TableManagement from "./components/TableManagement/TableManagement";
import FeedbackTable from "../src/components/FeedBack/FeedbackTable";
import { DetailPost } from "./components/pages/client/Posts/DetailPost";
import { ProtectedRoute } from "./components/user/ProtectedRoute";
import DisplayMenu from "./components/pages/client/DisplayMenu";
import DishGroupList from "./components/Foodservice/DishGroupList";
import ServiceContext from "./components/context/ServiceContext";
import CategoryDishList from "./components/Foodservice/MenuByGroup/CategoryDishList";
import ManageStaff from "./components/pages/server/admin/actionPosts/ManageStaff";
import CreateStaff from "./components/pages/server/admin/actionPosts/CreateStaff";

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
        <Route path="/" element={<Main />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="/listpost" element={<ListPost />} />
        <Route path="/posts/:id" element={<DetailPost />} />
        <Route path="/menu" element={<DisplayMenu />} />

        {/* Trang đăng nhập và hồ sơ người dùng */}
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/update" element={<Update />} />

        {/* Trang admin */}
        <Route
          path="admin"
          element={
            <ProtectedRoute requiredRole={1}>
              <HomeAdmin />
            </ProtectedRoute>
          }
        >
          <Route path="dashboard" element={<DashBoard />} />
          <Route path="createpost" element={<CreatePost />} />
          <Route path="postmanagement" element={<PostManagement />} />
          <Route path="managestaff" element={<ManageStaff />} />
          <Route path="createstaff" element={<CreateStaff/>} />
          <Route path="edit/:id" element={<EditPost />} />
        </Route>

        {/* Trang quản lý nhân viên */}
        <Route
          path="staff"
          element={
            <ProtectedRoute requiredRole={1}>
              <Staff />
            </ProtectedRoute>
          }
        >
          <Route
            path="sale"
            element={
              <ContextDataTable>
                <TableManagement />
              </ContextDataTable>
            }
          />
          <Route path="feedback" element={<FeedbackTable />} />
          <Route
            path="service"
            element={
              <ServiceContext>
                <DishGroupList />
              </ServiceContext>
            }
          ></Route>
          <Route
            path="groupeddishes"
            element={
              <ServiceContext>
                <CategoryDishList />
              </ServiceContext>
            }
          />
          <Route path="bill" element={<BillManagement />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
