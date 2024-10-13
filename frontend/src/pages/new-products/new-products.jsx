import "./new-products.scss";
import Product from "../../components/product/product";
import PhoneProduct from "../../components/phone-product/phone-product";
import PhoneNavigation from "../../components/phone-navigation/phone-navigation";

const NewProducts = () => {
  return (
    <div className="my-newProducts">
      <div className="container">
        <h1 className="title">Yangi Mahsulotlar</h1>
        <div className="products-grid">
          <Product term={"NEW"} />
          <Product term={"NEW"} />
          <Product term={"NEW"} />
          <Product term={"NEW"} />
          <PhoneProduct term="NEW" />
          <PhoneProduct term="NEW" />
          <PhoneProduct term="NEW" />
          <PhoneProduct term="NEW" />
        </div>
      </div>
      <div className="phone-navigation-father">
        <PhoneNavigation />
      </div>
    </div>
  );
};

export default NewProducts;
