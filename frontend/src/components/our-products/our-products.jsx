import Product from "../product/product";
import PhoneProduct from "../phone-product/phone-product";
import "./our-products.scss";
import { useState } from "react";
import { baseUrl } from "../../helpers/apiClient";
import ProductSkeleton from "../product-skeleton/product-skeleton";
import { useNavigate } from "react-router-dom";
import { useOurProductsFetch } from "../../hooks/use-our-product";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/slices/cart/cartSlice";

const menus = [
  { id: 1, name: "Hammasi", key: "all" },
  { id: 2, name: "Yangilari", key: "new" },
  { id: 3, name: "Chegirmalar", key: "discount" },
];

const OurProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [selectedItem, setSelectedItem] = useState("all"); // all | new | discount | best

  const getImage = (name) => {
    return `${baseUrl}/file/getFile/${name}`;
  };

  const { data, loading } = useOurProductsFetch(
    `/product/top`,
    1,
    selectedItem,
    8
  );
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Qo'shildi");
  };

  return (
    <div className="my-ourProducts">
      <div className="container">
        <div className="title-wrapper">
          <h1>Bizning Mahsulotlar</h1>
          <div className="filters-wrapper">
            {menus.map((menu) => (
              <p
                key={menu.id}
                onClick={() => setSelectedItem(menu.key)}
                className={`${menu.key === selectedItem ? "active" : ""}`}
              >
                {menu.name}
              </p>
            ))}
          </div>
        </div>
        <div className="products-grid">
          {loading
            ? [1, 1].map((_, ind) => <ProductSkeleton key={ind} />)
            : data?.map((item, ind) => (
                <Product
                  key={ind}
                  imageUrl={getImage(item?.photo?.id)}
                  name={item?.title}
                  description={item?.description}
                  price={item?.price}
                  addToCart={() => handleAddToCart(item)}
                />
              ))}
          {loading
            ? [1, 1].map((_, ind) => <ProductSkeleton key={ind} />)
            : data?.map((item, ind) => (
                <PhoneProduct
                  key={ind}
                  imageUrl={getImage(item?.photo?.id)}
                  name={item?.title}
                  description={item?.description}
                  price={item?.price}
                  term="-15%"
                  addToCart={() => handleAddToCart(item)}
                />
              ))}
        </div>
        <div className="more-wrapper">
          <button onClick={() => navigate("/products/filter")}>
            Barchasini ko’rish
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
