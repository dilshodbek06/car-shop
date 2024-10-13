/* eslint-disable react/prop-types */
import "./phone-product.scss";
import productImage from "../../images/products/product1.svg";
import { FiHeart } from "react-icons/fi";

const PhoneProduct = ({ term = "" }) => {
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
        <FiHeart className="add-to-wishlist" />
      </div>
      <div className="card-body">
        <img src={productImage} alt="product image" />
      </div>
      <div className="card-footer">
        <h2>Y7 Led lampalar H4 linzali, Svetodiodli lampalar</h2>
        <p>11 штук</p>
        <h3 className="price">14 000 сум</h3>
        <button className="add-btn">В корзину</button>
      </div>
    </div>
  );
};

export default PhoneProduct;
