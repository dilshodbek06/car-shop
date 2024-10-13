import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import OfferApps from "./components/offer-apps/offer-apps.jsx";
import NotFound from "./pages/404/not-found.jsx";
import LoadingPage from "./components/loading-page/loading-page.jsx";
import Login from "./pages/auth/login.jsx";
import Register from "./pages/auth/register.jsx";

// import pages and components via lazy
const Header = lazy(() => import("./components/header/header.jsx"));
const Footer = lazy(() => import("./components/footer/footer.jsx"));

const Home = lazy(() => import("./pages/home/home.jsx"));
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
const AdminCategoriesPage = lazy(() =>
  import("./pages/admin/categories/categories.jsx")
);
const AdminProductsPage = lazy(() =>
  import("./pages/admin/products/products.jsx")
);

function App() {
  const location = useLocation();

  return (
    <div>
      <Suspense fallback={<LoadingPage />}>
        {!(
          location.pathname.startsWith("/admin") ||
          ["/login", "/register"].includes(location.pathname)
        ) && <Header />}
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
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
            <Route path="/admin/categories" element={<AdminCategoriesPage />} />
            <Route path="/admin/products" element={<AdminProductsPage />} />
          </Route>
        </Routes>
        {!(
          location.pathname.startsWith("/admin") ||
          ["/login", "/register"].includes(location.pathname)
        ) && (
          <div className="offer-apps-father" style={{ marginTop: "100px" }}>
            <OfferApps />
          </div>
        )}
        {!(
          location.pathname.startsWith("/admin") ||
          ["/login", "/register"].includes(location.pathname)
        ) && (
          <div className="footer-father">
            <Footer />
          </div>
        )}
      </Suspense>
    </div>
  );
}

export default App;
