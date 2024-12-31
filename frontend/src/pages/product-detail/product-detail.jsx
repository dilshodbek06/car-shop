import "./product-detail.scss";

import productLogo from "../../images/products/product-detail.svg";
import addToCartLogo from "../../images/products/Buy 2 (1).svg";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cart/cartSlice";
import { useState } from "react";
import toast from "react-hot-toast";
import { MdKeyboardBackspace } from "react-icons/md";

const ProductDetail = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const currentProduct = location.state || {};
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    dispatch(addToCart({ ...currentProduct, quantity }));
    toast.success("Qo'shildi");
  };
  const handleBuy = () => {
    dispatch(addToCart({ ...currentProduct, quantity }));
    navigate("/cart");
  };

  return (
    <div className="my-product-detail">
      <button onClick={() => navigate(-1)} className="back-to">
        <MdKeyboardBackspace size={18} /> <span>Orqaga</span>
      </button>
      <div className="container">
        <div className="image-wrapper">
          <div className="image-father">
            <img
              src={currentProduct?.imageUrl ?? productLogo}
              alt="product logo"
            />
          </div>
        </div>
        <div className="details-wrapper">
          <h1 className="product-title">
            {currentProduct?.name ?? "Product name"}
          </h1>
          <p className="product-desc">
            {currentProduct?.description ?? "Product detail"}
          </p>
          <div className="quantity-wrapper">
            <button
              disabled={quantity <= 1}
              onClick={() => setQuantity(quantity - 1)}
              className="minus-btn"
            >
              -
            </button>
            <div className="number">{quantity}</div>
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="plus-btn"
            >
              +
            </button>
          </div>
          <h2>{currentProduct?.price?.toLocaleString() ?? 0} so’m</h2>
          <div className="buttons-wrapper">
            <button onClick={handleAddToCart} className="add-to-cart-btn">
              <img src={addToCartLogo} alt="cart" />
              <span>Savatga qo&apos;shish</span>
            </button>
            <button onClick={handleBuy} className="buy-btn">
              Sotib olish
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
