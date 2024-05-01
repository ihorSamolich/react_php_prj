import AdminLayout from "components/layout/AdminLayout.tsx";
import AdminAuth from "components/role-based/AdminAuth.tsx";
import CategoriesPage from "pages/CategoriesPage.tsx";
import EmailConfirmPage from "pages/EmailConfirm.tsx";
import HomePage from "pages/HomePage.tsx";
import LoginPage from "pages/LoginPage.tsx";
import NotFoundPage from "pages/NotFoundPage.tsx";
import ProductsPage from "pages/ProductsPage.tsx";
import RegisterPage from "pages/RegisterPage.tsx";
import UsersPage from "pages/UsersPage.tsx";
import { Route, Routes } from "react-router-dom";

import "./index.css";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<AdminLayout />}>
        <Route index element={<HomePage />} />

        <Route element={<AdminAuth />}>
          <Route path="users" element={<UsersPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route path="categories/:categoryId" element={<ProductsPage />} />
        </Route>

        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="confirm-email" element={<EmailConfirmPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}
