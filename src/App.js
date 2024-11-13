import { Route, Routes } from "react-router-dom";
import Staff from "./components/pages/server/staff/Staff";
import ContextDataTable from "./components/context/ContextDataTable";
import TableManagement from "./components/TableManagement/TableManagement";
import FeedbackContext from "../src/components/context/FeedbackContext";
import FeedbackTable from "../src/components/FeedBack/FeedbackTable";
import { Header } from "./components/pages/server/admin/Header";
import { CreatePost } from "./components/pages/server/admin/actionPosts/CreatePost";
import { ListPost } from "./components/pages/client/Posts/ListPost";
import { PostManagement } from "./components/pages/server/admin/actionPosts/PostManagement";
import { EditPost } from "./components/pages/server/admin/actionPosts/EditPost";
import DashBoard from "./components/pages/server/admin/AdminDashBoard";
import { Login } from './components/user/Login';
import { Profile } from './components/user/Profile';
import { ChangePassword } from './components/user/Changepassword';
import Update from './components/user/Update';
import { Home } from "./components/pages/client/Home";//home của Như
import { HomeAdmin } from "./components/pages/server/admin/HomeAdmin";


// import TableManagement from "./TableManagement";
function App() {
  return (
    <>
      <Routes>
{/* Trang admin */}


        <Route path="listpost" element={<ListPost />} />
        <Route path="admin" element={<HomeAdmin />} >
          <Route path="createpost" element={<CreatePost />} />
          <Route path="postmanagement" element={<PostManagement />} />
          <Route path="edit/:id" element={<EditPost />} />
        </Route>
        {/* <Route path="staff" element={<Staff />}/> */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

        <Route path="staff" element={<Staff />}>
          <Route
            path="sale"
            element={
              <ContextDataTable>
                <TableManagement />
              </ContextDataTable>
            }
          />
          <Route
            path="feedback"
            element={
              <FeedbackContext>
                <FeedbackTable />
              </FeedbackContext>
            }
          />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="profile" element={<Profile />} />
        <Route path="changepassword" element={<ChangePassword />} />
        <Route path="update" element={<Update />} />
      </Routes>
    </>
  );
}

export default App;
