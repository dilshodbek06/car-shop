import "./header.scss";
import { LuSearch } from "react-icons/lu";
import brandLogo from "../../images/brand.svg";
import cartLogo from "../../images/cart.svg";
import heartLogo from "../../images/heart.svg";
import userLogo from "../../images/user.svg";
import notificationLogo from "../../images/notification.svg";
import { RxHamburgerMenu } from "react-icons/rx";
import { useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
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
      url: "/products/new",
    },
    {
      id: 4,
      name: "Chegirmalar",
      url: "/products/discount",
    },
    {
      id: 5,
      name: "Ijtimoiy tarmoq",
      url: "/test",
    },
  ];
  return (
    <header className="my-header">
      {/* top */}
      <div className="top-header">
        <div className="container">
          <div onClick={() => navigate("/")} className="brand-wrapper">
            <img src={brandLogo} alt="brand logo" />
            <h1>Zap-chast.uz</h1>
          </div>
          <div className="input-wrapper">
            <input type="text" placeholder="Qidirish..." />
            <LuSearch className="search-btn" />
          </div>
          <div className="buttons-wrapper">
            <button className="cart-btn">
              <div className="cart-inner">
                <img src={cartLogo} alt="cart" />
                <h5 className="">Cart</h5>
              </div>
              <div className="quantity-btn">2</div>
            </button>
            <button className="like-btn">
              <img className="" src={heartLogo} alt="heart icon" />
            </button>
            <button className="user-btn">
              <img className="" src={userLogo} alt="user icon" />
            </button>
            <div className="notification-btn">
              <img src={notificationLogo} alt="notification" />
            </div>
          </div>
        </div>
      </div>
      <div className="phone-screen-input">
        <input type="text" placeholder="Qidirish..." />
        <LuSearch className="search-btn" />
      </div>
      {/* bottom */}
      <div className="bottom-header">
        <div className="container">
          <div className="menus-wrapper">
            <div className="dropdown-btn">
              <RxHamburgerMenu className="dropdown-icon" />
              <p className="">Mahsulotlar</p>
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
              Contact: <span>+99 888 111 47 47</span>
            </p>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </header>
  );
};

export default Header;
