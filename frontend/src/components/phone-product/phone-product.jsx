/* eslint-disable react/prop-types */
import "./phone-product.scss";
import productImage from "../../images/products/product1.svg";
import { useNavigate } from "react-router-dom";

const PhoneProduct = ({
  term = "",
  price,
  name,
  imageUrl,
  addToCart,
  id,
  description,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    const obj = {
      id,
      price,
      name,
      imageUrl,
      description,
    };
    navigate(`/products/product-detail/${id}`, { state: obj });
  };
  return (
    <div className="my-phone-product">
      <div className="card-header">
        <div
          style={
            term === "NEW"
              ? { backgroundColor: "rgba(45, 204, 112, 1)" }
              : term.endsWith("%")
              ? { backgroundColor: "rgba(255, 80, 0, 1)" }
              : { display: "none" }
          }
          className="term-outer"
        >
          {term}
        </div>
        {/* <FiHeart className="add-to-wishlist" /> */}
      </div>
      <div className="card-body">
        <img src={imageUrl ?? productImage} alt="product image" />
      </div>
      <div className="card-footer">
        <h2 onClick={handleNavigate} className="hover:underline">
          {name ?? "Y7 Led lampalar H4 linzali, Svetodiodli lampalar"}
        </h2>

        <h3 className="price">{price?.toLocaleString() ?? "000"} so&apos;m</h3>
        <button onClick={addToCart} className="add-btn">
          Savatga
        </button>
      </div>
    </div>
  );
};

export default PhoneProduct;
