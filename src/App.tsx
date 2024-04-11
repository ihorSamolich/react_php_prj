import "./index.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage.tsx";
import UsersPage from "./pages/UsersPage.tsx";
import CategoriesPage from "./pages/CategoriesPage.tsx";
import NotFoundPage from "./pages/NotFoundPage.tsx";
import AdminLayout from "./components/layout/AdminLayout.tsx";

export default function App() {
  console.log("render app");

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="categories" element={<CategoriesPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
