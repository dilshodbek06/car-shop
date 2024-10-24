import { Suspense, lazy, useMemo } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import OfferApps from "./components/offer-apps/offer-apps.jsx";
import NotFound from "./pages/404/not-found.jsx";
import LoadingPage from "./components/loading-page/loading-page.jsx";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";
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
const NewProducts = lazy(() => import("./pages/new-products/new-products.jsx"));
const NewProductsFilter = lazy(() =>
  import("./pages/new-products-filter/new-products-filter.jsx")
);
const ProductsDiscount = lazy(() => import("./pages/discounts/discounts.jsx"));
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
const AdminOrdersPage = lazy(() => import("./pages/admin/orders/orders.jsx"));
const AdminSettingsPage = lazy(() =>
  import("./pages/admin/settings/settings.jsx")
);
const AdvertisementPage = lazy(() =>
  import("./pages/admin/advertisement/advertisement.jsx")
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
          <Route path="/products/new" element={<NewProducts />} />
          <Route path="/products/new/filter" element={<NewProductsFilter />} />
          <Route path="/products/discount" element={<ProductsDiscount />} />
          <Route
            path="/products/discount/filter"
            element={<ProductsDiscountFilter />}
          />

          <Route
            path="/products/product-detail/:id"
            element={<ProductDetail />}
          />
          <Route path="/admin" element={<AdminPage />}>
            <Route path="/admin/" element={<AdminDashboardPage />} />
            <Route path="/admin/categories" element={<AdminCategoriesPage />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
            <Route path="/admin/brands" element={<AdminBrandsPage />} />
            <Route path="/admin/cars" element={<AdminCarsPage />} />
            <Route path="/admin/orders" element={<AdminOrdersPage />} />
            <Route path="/admin/settings" element={<AdminSettingsPage />} />
            <Route
              path="/admin/advertisement"
              element={<AdvertisementPage />}
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
