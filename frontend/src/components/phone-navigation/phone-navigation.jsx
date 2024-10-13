import { GoHomeFill } from "react-icons/go";
import "./phone-navigation.scss";
import { TiThLargeOutline } from "react-icons/ti";
import { FiShoppingCart } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const PhoneNavigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const menus = [
    {
      id: 1,
      name: "Главная",
      url: "/",
      icon: (
        <GoHomeFill
          className={`icon ${location.pathname === "/" ? "active" : ""}`}
        />
      ),
    },
    {
      id: 2,
      name: "Каталог",
      url: "/categories",
      icon: (
        <TiThLargeOutline
          className={`icon ${
            location.pathname === "/categories" ? "active" : ""
          }`}
        />
      ),
    },
    {
      id: 3,
      name: "Корзина",
      url: "/products/product-detail/1",
      icon: (
        <FiShoppingCart
          className={`icon ${location.pathname === "/cart" ? "active" : ""}`}
        />
      ),
    },
    {
      id: 4,
      name: "Избранное",
      url: "/products/filter", // wishlist
      icon: (
        <FaRegHeart
          className={`icon ${
            location.pathname === "/wishlist" ? "active" : ""
          }`}
        />
      ),
    },
    {
      id: 5,
      name: "Профиль",
      url: "/profile",
      icon: (
        <FaRegCircleUser
          className={`icon ${location.pathname === "/profile" ? "active" : ""}`}
        />
      ),
    },
  ];

  return (
    <div className="my-phone-navigation">
      <div className="container">
        {menus?.map((menu) => (
          <div
            onClick={() => navigate(menu?.url)}
            className={`menu-item`}
            key={menu.id}
          >
            <div className="icon-wrapper">{menu.icon}</div>
            {menu?.url === "/cart" && <div className="qty-btn">3</div>}
            <p
              className={`icon-title ${
                location.pathname === menu.url ? "active" : ""
              }`}
            >
              {menu?.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneNavigation;
