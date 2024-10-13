import "./top-products.scss";
import Product from "../product/product";
import PhoneProduct from "../phone-product/phone-product";

const TopProducts = () => {
  return (
    <div className="my-topProducts">
      <div className="container">
        <div className="title-wrapper">
          <h1>Top Mahsulotlar</h1>
          <p>Hammasi</p>
        </div>
        <div className="products-grid">
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <PhoneProduct term="NEW" />
          <PhoneProduct term="NEW" />
          <PhoneProduct term="NEW" />
          <PhoneProduct term="NEW" />
        </div>
        <div className="more-wrapper">
          <button>Ko’proq ko’rish</button>
        </div>
      </div>
    </div>
  );
};

export default TopProducts;
