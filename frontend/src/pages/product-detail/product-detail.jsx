import "./product-detail.scss";

import productLogo from "../../images/products/product-detail.svg";
import addToCartLogo from "../../images/products/Buy 2 (1).svg";

const ProductDetail = () => {
  return (
    <div className="my-product-detail">
      <div className="container">
        <div className="image-wrapper">
          <div className="image-father">
            <img src={productLogo} alt="product logo" />
          </div>
        </div>
        <div className="details-wrapper">
          <h1 className="product-title">
            Avtomobilillar uchun qopqoqlar, g’ildirak diskalari R15
          </h1>
          <p className="product-desc">
            Mahsulot har qanday iqlim sharoitida elastiklikni saqlab, sovuqqa
            chidamliligini oshiradi. O`rnatish qulflari yukni teng taqsimlash
            uchun qopqoqning butun perimetri bo`ylab joylashgan.
          </p>
          <div className="quantity-wrapper">
            <button className="minus-btn">-</button>
            <div className="number">1</div>
            <button className="plus-btn">+</button>
          </div>
          <h2>320 000 so’m</h2>
          <div className="buttons-wrapper">
            <button className="add-to-cart-btn">
              <img src={addToCartLogo} alt="cart" />
              <span>Add To Cart</span>
            </button>
            <button className="buy-btn">Sotib olish</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
