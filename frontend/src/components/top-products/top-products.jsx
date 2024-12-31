import "./top-products.scss";
import Product from "../product/product";
import PhoneProduct from "../phone-product/phone-product";
import { useProductsFetch } from "../../hooks/use-products";
import { baseUrl } from "../../helpers/apiClient";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cart/cartSlice";
import toast from "react-hot-toast";

const TopProducts = () => {
  const getImage = (name) => {
    return `${baseUrl}/file/getFile/${name}`;
  };

  const dispatch = useDispatch();

  const { data } = useProductsFetch(`/product`);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Qo'shildi");
  };

  return (
    <div className="my-topProducts">
      <div className="container">
        <div className="title-wrapper">
          <h1>Top Mahsulotlar</h1>
        </div>
        <div className="products-grid">
          {data?.map((item, ind) => (
            <Product
              key={ind}
              imageUrl={getImage(item?.photo?.id)}
              price={item?.price}
              name={item?.name}
              description={item?.description}
              addToCart={() => handleAddToCart(item)}
              id={item.id}
            />
          ))}
          {data?.map((item, ind) => (
            <PhoneProduct
              key={ind}
              term="NEW"
              imageUrl={getImage(item?.photo?.id)}
              price={item?.price}
              name={item?.name}
              description={item?.description}
              addToCart={() => handleAddToCart(item)}
              id={item.id}
            />
          ))}
        </div>
        <div className="more-wrapper">
          <button>Ko’proq ko’rish</button>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
