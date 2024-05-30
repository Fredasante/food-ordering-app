import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import Hero from "./components/Hero";

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Hero />
          </Layout>
        }
      />
      <Route path="/user-profile" element={<span>User Profile</span>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
