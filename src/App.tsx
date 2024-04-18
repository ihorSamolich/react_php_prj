import CategoryDetail from "components/category/CategoryDetail.tsx";
import AdminLayout from "components/layout/AdminLayout.tsx";
import CategoriesPage from "pages/CategoriesPage.tsx";
import HomePage from "pages/HomePage.tsx";
import NotFoundPage from "pages/NotFoundPage.tsx";
import UsersPage from "pages/UsersPage.tsx";
import { Route, Routes } from "react-router-dom";

import "./index.css";

export default function App() {
  console.log("render app");

  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<HomePage />} />
        <Route path="users" element={<UsersPage />} />
        <Route path="categories" element={<CategoriesPage />} />
        <Route path="categories/:categoryId" element={<CategoryDetail />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
