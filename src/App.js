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
      {/* <ContextDataTable>
        <Routes>
          <Route path="header" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="admin" element={<Admin />}>
            <Route path="sale" element={<TableManagement />} />
            <FeedbackContext>
              <Route path="feedback" element={<FeedbackTable />} />
            </FeedbackContext>
          </Route>
        </Routes>
      </ContextDataTable> */}
      <Routes>
        {/* <Route path="header" element={<Head />} />
        <Route path="/" element={<Home />} /> */}
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
      </Routes>
    </>
  );
}

export default App;
