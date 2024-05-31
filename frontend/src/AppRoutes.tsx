import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Homepage from "./pages/Homepage";
import AuthCallBackPage from "./pages/AuthCallBackPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallBackPage />} />
      <Route path="/user-profile" element={<span>User Profile</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
