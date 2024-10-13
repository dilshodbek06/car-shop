/* eslint-disable react/prop-types */
import "./product.scss";

import addToCartLogo from "../../images/addToCart.svg";
import addToWishlistLogo from "../../images/addToWishlist.svg";
import productImage from "../../images/products/product1.svg";
import ratingImage from "../../images/products/rating.svg";

const Product = ({ term = "" }) => {
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
          <div className="cart-div">
            <img src={addToCartLogo} alt="add to cart" />
          </div>
          <div className="like-div cart-div">
            <img src={addToWishlistLogo} alt="add to wishlist" />
          </div>
        </div>
      </div>
      <div className="card-body">
        <img src={productImage} alt="product image" />
      </div>
      <div className="card-footer">
        <h2>Avtomobil yukxonasi uchun organayzer</h2>
        <div className="rating-wrapper">
          <img src={ratingImage} alt="rating" />
          <span>4.8</span>
        </div>
        <button className="price-btn">236 000 so’m</button>
      </div>
    </div>
  );
};

export default Product;
