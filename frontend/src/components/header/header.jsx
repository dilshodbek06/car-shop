import "./header.scss";
import { LuSearch } from "react-icons/lu";
import brandLogo from "../../assets/logo.png";
import cartLogo from "../../images/cart.svg";
import heartLogo from "../../images/heart.svg";
import userLogo from "../../images/user.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { FiShoppingCart } from "react-icons/fi";

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import SearchInput from "../input-suggest/search-input";
import apiClient from "../../helpers/apiClient";

const menus = [
  {
    id: 1,
    name: "Bosh sahifa",
    url: "/",
  },
  {
    id: 2,
    name: "Kategoriyalar",
    url: "/categories",
  },
  {
    id: 3,
    name: "Yangi mahsulotlar",
    url: "/products/new/filter",
  },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { products } = useSelector((state) => state.cart);

  const [query, setQuery] = useState(""); // Input value
  const [results, setResults] = useState([]); // Filtered results
  const [isSearching, setIsSearching] = useState(false);

  // Handle input change
  const handleInputChange = async (e) => {
    const value = e.target.value;
    setQuery(value);
    if (value.trim() === "") {
      setResults([]); // Clear results if input is empty
    } else {
      setIsSearching(true);
      const res = await apiClient(`/product`, "get", null, {
        name: value,
      });
      console.log(res?.data.content);

      setIsSearching(false);
      // const filtered = res?.data?.content?.map((item) => ({
      //   name: item?.name,
      //   car: item?.car?.name,
      //   brand: item?.car?.brand?.name,
      //   id: item?.id,
      // }));
      setResults(res?.data?.content);
    }
  };

  const isShowInput = ["/"].includes(location.pathname);

  return (
    <header className="my-header">
      {/* top */}
      <div className="top-header">
        <div className="container">
          <div onClick={() => navigate("/")} className="brand-wrapper">
            <img src={brandLogo} alt="brand logo" />
            <h1>Zap-chast.uz</h1>
          </div>
          {/* <div className="input-wrapper">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Qidirish..."
            />
            <LuSearch className="search-btn" />
          </div> */}
          <SearchInput />
          <div className="buttons-wrapper">
            <button onClick={() => navigate("/cart")} className="cart-btn">
              <div className="cart-inner">
                <img src={cartLogo} alt="cart" />
                <h5>Savat</h5>
              </div>
              <div className="quantity-btn">{products?.length}</div>
            </button>
            <button className="like-btn">
              <img src={heartLogo} alt="heart icon" />
            </button>
            <button className="user-btn">
              <img src={userLogo} alt="user icon" />
            </button>
            <Link to={"/cart"}>
              <div className="notification-btn">
                <FiShoppingCart className="cart-icon" />
                <div className="quantity-div">{products?.length ?? 0}</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
      {isShowInput && (
        <div className="relative">
          <div className="phone-screen-input">
            <input
              onChange={handleInputChange}
              type="text"
              placeholder="Qidirish..."
            />
            <LuSearch className="search-btn" />
          </div>
          {isSearching ? (
            <div className="loading-result">Loading...</div>
          ) : (
            query !== "" && (
              <div className="results bg-white rounded mt-1 max-h-28 overflow-y-auto px-3 z-[30]">
                <div className="result-div">
                  {results.length > 0 ? (
                    results.map((product, index) => (
                      <div
                        key={index}
                        className="px-2 py-1 hover:bg-gray-100 cursor-pointer text-sm flex items-center gap-5 border result-result"
                        onClick={() => setQuery(product)}
                      >
                        <span>{product?.name}</span>
                        <div className="flex items-center gap-4">
                          <span className="car-name">{product?.car?.name}</span>
                          <span className="car-name">
                            {product?.car?.brand?.name}
                          </span>
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="px-2 py-1 text-sm text-gray-500">
                      Topilmadi
                    </div>
                  )}
                </div>
              </div>
            )
          )}
        </div>
      )}

      {/* bottom */}
      <div className="bottom-header">
        <div className="container">
          <div className="menus-wrapper">
            <div className="dropdown-btn">
              <RxHamburgerMenu className="dropdown-icon" />
              <p
                onClick={() => navigate("/products/filter")}
                className={`${
                  location.pathname === "/products/filter" && "active"
                }`}
              >
                Mahsulotlar
              </p>
            </div>
            <ul className="menu-list">
              {menus?.map((menu) => (
                <li
                  className={`${location.pathname === menu?.url && "active"}`}
                  onClick={() => navigate(menu?.url)}
                  key={menu.id}
                >
                  {menu?.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-wrapper">
            <p>
              Contact: <span>+998 88 111 47 47</span>
            </p>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </header>
  );
};

export default Header;
