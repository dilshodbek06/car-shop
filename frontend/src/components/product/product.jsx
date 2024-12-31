/* eslint-disable react/prop-types */
import "./product.scss";

import addToCartLogo from "../../images/addToCart.svg";
import productImage from "../../images/products/product1.svg";
import ratingImage from "../../images/products/rating.svg";
import { Link } from "react-router-dom";

const Product = ({ term = "", price, name, imageUrl, addToCart, id }) => {
  return (
    <div className="my-product">
      <div className="card-header">
        <span
          style={
            term === "NEW"
              ? { color: "rgba(255,80,0,1)" }
              : { color: "rgba(255,0,0,1)" }
          }
        >
          {term}
        </span>
        <div className="icons-wrapper">
          <div onClick={addToCart} className="cart-div">
            <img src={addToCartLogo} alt="add to cart" />
          </div>
          {/* <div className="like-div cart-div">
            <img src={addToWishlistLogo} alt="add to wishlist" />
          </div> */}
        </div>
      </div>
      <div className="card-body">
        <img src={imageUrl ?? productImage} alt="product image" />
      </div>
      <div className="card-footer">
        <Link className="hover:underline" to={`/products/product-detail/${id}`}>
          <h2>{name ?? "Avtomobil yukxonasi uchun organayzer"}</h2>
        </Link>
        <div className="rating-wrapper">
          <img src={ratingImage} alt="rating" />
          <span>4.8</span>
        </div>
        <button className="price-btn">
          {price?.toLocaleString() ?? 36_000} so’m
        </button>
      </div>
    </div>
  );
};

export default Product;
