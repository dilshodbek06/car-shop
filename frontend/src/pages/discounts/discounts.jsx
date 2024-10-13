import PhoneNavigation from "../../components/phone-navigation/phone-navigation";
import PhoneProduct from "../../components/phone-product/phone-product";
import Product from "../../components/product/product";
import "./discounts.scss";

const Discounts = () => {
  return (
    <div className="my-discounts">
      <div className="container">
        <h1 className="title">Chegirmalar</h1>
        <div className="products-grid">
          <Product term={"-30%"} />
          <Product term={"-30%"} />
          <Product term={"-30%"} />
          <Product term={"-30%"} />
          <PhoneProduct term="-15%" />
          <PhoneProduct term="-15%" />
          <PhoneProduct term="-15%" />
          <PhoneProduct term="-15%" />
        </div>
      </div>
      <div className="phone-navigation-father">
        <PhoneNavigation />
      </div>
    </div>
  );
};

export default Discounts;
