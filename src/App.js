import { Route, Routes } from "react-router-dom";
import Staff from "./components/pages/server/staff/Staff";
import ContextDataTable from "./components/context/ContextDataTable";
import TableManagement from "./components/TableManagement/TableManagement";
import FeedbackContext from "../src/components/context/FeedbackContext";
import FeedbackTable from "../src/components/FeedBack/FeedbackTable";
// import TableManagement from "./TableManagement";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} >
          <Route path="header" element={<Header />} />
          <Route path="create" element={<CreatePost />} />
          <Route path="list" element={<ListPost />} />
          <Route path="postmanagement" element={<PostManagement />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="dash" element={<Dashboard />} />
        </Route>
        {/* <Route path="admin" element={<Admin />}>
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
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
