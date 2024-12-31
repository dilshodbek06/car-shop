import { Suspense, lazy, useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import OfferApps from "./components/offer-apps/offer-apps.jsx";
import NotFound from "./pages/404/not-found.jsx";
import LoadingPage from "./components/loading-page/loading-page.jsx";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";
import ProtectedRoute from "./context/ProtectedRoute.jsx";
import { Toaster } from "react-hot-toast";

// import pages and components via lazy
const Header = lazy(() => import("./components/header/header.jsx"));
const Footer = lazy(() => import("./components/footer/footer.jsx"));

const Home = lazy(() => import("./pages/home/home.jsx"));
const Cart = lazy(() => import("./pages/cart/cart.jsx"));
const Categories = lazy(() => import("./pages/categories/categories.jsx"));
const ProductsFilter = lazy(() =>
  import("./pages/products-filter/products-filter.jsx")
);

const NewProductsFilter = lazy(() =>
  import("./pages/new-products-filter/new-products-filter.jsx")
);

const ProductsDiscountFilter = lazy(() =>
  import("./pages/discounts-filter/discounts-filter.jsx")
);
const ProductDetail = lazy(() =>
  import("./pages/product-detail/product-detail.jsx")
);

// admin imports
const AdminPage = lazy(() => import("./pages/admin/admin.jsx"));
const AdminDashboardPage = lazy(() =>
  import("./pages/admin/dashboard/dashboard.jsx")
);
const AdminCategoriesPage = lazy(() =>
  import("./pages/admin/categories/categories.jsx")
);
const AdminProductsPage = lazy(() =>
  import("./pages/admin/products/products.jsx")
);
const AdminBrandsPage = lazy(() => import("./pages/admin/brands/brands.jsx"));
const AdminCarsPage = lazy(() => import("./pages/admin/cars/cars.jsx"));

const AdminSettingsPage = lazy(() =>
  import("./pages/admin/settings/settings.jsx")
);
const AdvertisementPage = lazy(() =>
  import("./pages/admin/advertisement/advertisement.jsx")
);
const UsersPage = lazy(() => import("./pages/admin/users/users.jsx"));

// operator orders import
const NewOrdersPage = lazy(() =>
  import("./pages//admin/orders/new-orders/new-orders.jsx")
);
const ProgressOrdersPage = lazy(() =>
  import("./pages//admin/orders/progress-orders/progress-orders.jsx")
);
const CompletedOrdersPage = lazy(() =>
  import("./pages//admin/orders/completed-orders/completed-orders.jsx")
);
const DeclinedOrdersPage = lazy(() =>
  import("./pages//admin/orders/declined-orders/declined-orders.jsx")
);

function App() {
  const location = useLocation();

  const isAuthOrAdminPage = useMemo(
    () =>
      location.pathname.startsWith("/admin") ||
      ["/login", "/register"].includes(location.pathname),
    [location.pathname]
  );

  return (
    <div>
      <Toaster />
      <Suspense fallback={<LoadingPage />}>
        {!isAuthOrAdminPage && <Header />}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/products/filter" element={<ProductsFilter />} />
          {/* <Route path="/products/new" element={<NewProducts />} /> */}
          <Route path="/products/new/filter" element={<NewProductsFilter />} />
          {/* <Route path="/products/discount" element={<ProductsDiscount />} /> */}
          <Route
            path="/products/discount/filter"
            element={<ProductsDiscountFilter />}
          />

          <Route
            path="/products/product-detail/:id"
            element={<ProductDetail />}
          />
          {/* protected routes */}
          <Route path="/admin" element={<AdminPage />}>
            <Route
              path="/admin"
              element={
                <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
                  <AdminDashboardPage />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/admin" element={<AdminDashboardPage />} /> */}

            {/* <Route path="/admin/categories" element={<AdminCategoriesPage />} /> */}
            <Route
              path="/admin/categories"
              element={
                <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
                  <AdminCategoriesPage />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/admin/products" element={<AdminProductsPage />} /> */}
            <Route
              path="/admin/products"
              element={
                <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
                  <AdminProductsPage />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/admin/brands" element={<AdminBrandsPage />} /> */}
            <Route
              path="/admin/brands"
              element={
                <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
                  <AdminBrandsPage />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/admin/cars" element={<AdminCarsPage />} /> */}
            <Route
              path="/admin/cars"
              element={
                <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
                  <AdminCarsPage />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/admin/settings" element={<AdminSettingsPage />} /> */}
            <Route
              path="/admin/settings"
              element={
                <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
                  <AdminSettingsPage />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/admin/advertisement"
              element={<AdvertisementPage />}
            /> */}
            <Route
              path="/admin/advertisement"
              element={
                <ProtectedRoute allowedRoles={["ROLE_ADMIN"]}>
                  <AdvertisementPage />
                </ProtectedRoute>
              }
            />
            {/* super admin routes */}
            <Route
              path="/admin/users"
              element={
                <ProtectedRoute allowedRoles={["ROLE_SUPER_ADMIN"]}>
                  <UsersPage />
                </ProtectedRoute>
              }
            />
            {/* operator routes */}
            <Route
              path="/admin/orders-new"
              element={
                <ProtectedRoute allowedRoles={["ROLE_OPERATOR"]}>
                  <NewOrdersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders-progress"
              element={
                <ProtectedRoute allowedRoles={["ROLE_OPERATOR"]}>
                  <ProgressOrdersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders-completed"
              element={
                <ProtectedRoute allowedRoles={["ROLE_OPERATOR"]}>
                  <CompletedOrdersPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/orders-declined"
              element={
                <ProtectedRoute allowedRoles={["ROLE_OPERATOR"]}>
                  <DeclinedOrdersPage />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
        {!isAuthOrAdminPage && (
          <div className="offer-apps-father" style={{ marginTop: "100px" }}>
            <OfferApps />
          </div>
        )}
        {!isAuthOrAdminPage && (
          <div className="footer-father">
            <Footer />
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default App;
