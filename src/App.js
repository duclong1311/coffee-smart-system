import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/client/Home';
import {Login} from "../src/components/user/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />

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
