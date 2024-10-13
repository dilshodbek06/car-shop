import Product from "../product/product";
import PhoneProduct from "../phone-product/phone-product";
import "./our-products.scss";

const OurProducts = () => {
  return (
    <div className="my-ourProducts">
      <div className="container">
        <div className="title-wrapper">
          <h1>Bizning Mahsulotlar</h1>
          <div className="filters-wrapper">
            <p className="active">Hammasi</p>
            <p>Yangilari</p>
            <p>Chegirmalar</p>
            <p>Best sellers</p>
          </div>
        </div>
        <div className="products-grid">
          <Product />
          <Product />
          <Product />
          <Product />
          <PhoneProduct term="-15%" />
          <PhoneProduct term="-15%" />
          <PhoneProduct term="-15%" />
          <PhoneProduct term="-15%" />
        </div>
        <div className="more-wrapper">
          <button>Ko’proq ko’rish</button>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
