// import { Route, Routes } from 'react-router-dom';
import DisplayMenu from "./components/pages/client/DisplayMenu";

function App() {
  return (
    <>
      <DisplayMenu />
      {/* <Routes>
        <Route path="header" element={<Header />} />
        <Route path="/" element={<Home />} />
        <Route path="admin" element={<Admin />}>
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
      </Routes> */}
    </>
  );
}

export default App;
