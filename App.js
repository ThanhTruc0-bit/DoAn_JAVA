import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import CategoryPage from "./pages/CategoryPage";
import UserOrderPage from "./pages/UserOrderPage";
import SearchPage from "./pages/SearchPage";
import CartPage from "./pages/CartPage";
import MyOrdersPage from "./pages/MyOrdersPage";

import AdminDashboard from "./pages/AdminDashboard";
import ProductAdminPage from "./pages/ProductAdminPage";
import CategoryAdminPage from "./pages/CategoryAdminPage";
import UserAdminPage from "./pages/UserAdminPage";
import OrderAdminPage from "./pages/OrderAdminPage";
import AdminRegisterPage from "./pages/AdminRegisterPage";
import AdminLoginPage from "./pages/AdminLoginPage";
import AdminSidebar from "./components/AdminSidebar";
import AdminHeader from "./components/AdminHeader";
import ProductPage from "./pages/ProductPage";
import OrderDetailAdminPage from "./pages/OrderDetailAdminPage";

// ✅ Layout dành riêng cho Admin
function AdminLayout({ children }) {
  return (
    <div className="admin-layout">
      <AdminHeader />
      <div className="admin-container">
        <AdminSidebar />
        <div className="admin-content">{children}</div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* ✅ USER ROUTES */}
      <Route path="/" element={<MainLayout />}>
        <Route index element={<HomePage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="product/:id" element={<ProductDetailPage />} />
        <Route path="category/:id" element={<CategoryPage />} />
        <Route path="/orders" element={<UserOrderPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/my" element={<MyOrdersPage />} />
        <Route path="/products" element={<ProductPage />} />

      </Route>

      {/* ✅ ADMIN AUTH ROUTES */}
      <Route path="/admin/register" element={<AdminRegisterPage />} />
      <Route path="/admin/login" element={<AdminLoginPage />} />

      {/* ✅ ADMIN DASHBOARD ROUTES */}
      <Route
        path="/admin"
        element={
          <AdminLayout>
            <AdminDashboard />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/products"
        element={
          <AdminLayout>
            <ProductAdminPage />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/categories"
        element={
          <AdminLayout>
            <CategoryAdminPage />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/users"
        element={
          <AdminLayout>
            <UserAdminPage />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/orders"
        element={
          <AdminLayout>
            <OrderAdminPage />
          </AdminLayout>
        }
      />
      <Route
        path="/admin/orders/:id"
        element={
          <AdminLayout>
            <OrderDetailAdminPage />
          </AdminLayout>
        }
      />
    </Routes>

  );
}

export default App;
