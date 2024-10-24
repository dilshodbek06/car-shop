import "./cart.scss";

const Cart = () => {
  return (
    <div className="my-cart">
      <div className="cart">
        <h1 className="cart__title">Shopping Cart</h1>
        <div className="cart__content">
          <div className="cart__items">
            {[1, 1, 1, 1, 1, 1, 1, 1].map((item, ind) => (
              <div key={ind} className="cart__item">
                <div className="cart__item-details">
                  <div className="cart__item-image">
                    <img
                      src="https://readymadeui.com/images/product14.webp"
                      alt="Velvet Sneaker"
                    />
                  </div>
                  <div className="cart__item-info">
                    <h3 className="cart__item-name">Velvet Sneaker</h3>
                    <p className="cart__item-size">
                      Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.{" "}
                    </p>
                    <button type="button" className="cart__item-remove">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="cart__item-icon"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 7a1 1 0 0 0-1 1v11.191A1.92 1.92 0 0 1 15.99 21H8.01A1.92 1.92 0 0 1 6 19.191V8a1 1 0 0 0-2 0v11.191A3.918 3.918 0 0 0 8.01 23h7.98A3.918 3.918 0 0 0 20 19.191V8a1 1 0 0 0-1-1Zm1-3h-4V2a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v2H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM10 4V3h4v1Z"></path>
                        <path d="M11 17v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Zm4 0v-7a1 1 0 0 0-2 0v7a1 1 0 0 0 2 0Z"></path>
                      </svg>
                      REMOVE
                    </button>
                  </div>
                </div>
                <div className="cart__item-price">
                  <h4>$20.00</h4>
                  <button type="button" className="cart__item-quantity">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="cart__item-icon"
                      viewBox="0 0 124 124"
                    >
                      <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z"></path>
                    </svg>
                    <span>2</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="cart__item-icon"
                      viewBox="0 0 42 42"
                    >
                      <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="order-summary">
            <h3 className="order-summary__title">Order Summary</h3>
            <form className="order-summary__form">
              <div className="order-summary__details">
                <h3 className="order-summary__subtitle">Enter Details</h3>
                <div className="order-summary__inputs">
                  <div className="order-summary__input-group">
                    <input
                      type="text"
                      placeholder="Full Name..."
                      className="order-summary__input"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="order-summary__icon"
                    ></svg>
                  </div>
                  <div className="order-summary__input-group">
                    <input
                      type="email"
                      placeholder="Email..."
                      className="order-summary__input"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="order-summary__icon"
                    ></svg>
                  </div>
                  <div className="order-summary__input-group">
                    <input
                      type="number"
                      placeholder="Phone..."
                      className="order-summary__input"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="order-summary__icon"
                    ></svg>
                  </div>
                </div>
              </div>
            </form>

            <ul className="order-summary__pricing">
              <li className="order-summary__pricing-item">
                Subtotal <span>$200.00</span>
              </li>
              <li className="order-summary__pricing-item">
                Shipping <span>$2.00</span>
              </li>
              <li className="order-summary__pricing-total">
                Total <span>$206.00</span>
              </li>
            </ul>

            <div className="order-summary__actions">
              <button className="order-summary__checkout">Checkout</button>
              <button className="order-summary__continue">
                Continue Shopping
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
