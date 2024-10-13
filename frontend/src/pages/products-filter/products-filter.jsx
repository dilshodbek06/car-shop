import { IoCloseSharp, IoSearch } from "react-icons/io5";
import "./products-filter.scss";
import CustomAccordion from "../../components/custom/customAccordion";
import Product from "../../components/product/product";
import PhoneNavigation from "../../components/phone-navigation/phone-navigation";
import PhoneProduct from "../../components/phone-product/phone-product";
const ProductsFilter = () => {
  return (
    <div className="my-products-filter">
      <div className="container-products-filter">
        <div className={`filter-wrapper`}>
          <h2>Filter</h2>
          <div className="filters-outer">
            <CustomAccordion index={1} title={"Brendni tanlang"}>
              <p>Category 1</p>
              <p>Category 2</p>
              <p>Category 3</p>
            </CustomAccordion>

            <CustomAccordion index={2} title={"Modelni tanlang"}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                minus.
              </p>
            </CustomAccordion>

            <CustomAccordion index={3} title={"Extiyot qismni tanlang"}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                minus.
              </p>
            </CustomAccordion>
          </div>
          {/* buttons */}
          <div className="buttons-wrapper">
            <button className="clear-btn">
              <span>Tozalash</span>
              <IoCloseSharp className="clear-icon" />
            </button>
            <button className="search-btn">
              <span>Qidirish</span>
              <IoSearch className="search-icon" />
            </button>
          </div>
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

export default ProductsFilter;
