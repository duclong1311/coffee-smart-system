import { Route, Routes } from 'react-router-dom';
import { Home } from './components/pages/client/Home';
import { Login } from './components/user/Login';
import { Profile } from './components/user/Profile';
import { ChangePassword } from './components/user/Changepassword';
import  Update  from './components/user/Update';

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
        <Route path="login" element={<Login/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="changepassword" element={<ChangePassword/>} />
        <Route path="update" element={<Update/>} />
      </Routes>
    </>
  );
}

export default App;
