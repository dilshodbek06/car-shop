import { IoCloseSharp, IoSearch } from "react-icons/io5";
import "./discounts-filter.scss";
import Product from "../../components/product/product";
import CustomAccordion from "../../components/custom/customAccordion";

const DiscountsFilter = () => {
  return (
    <div className="my-discounts-filter">
      <div className="container">
        <div className="filter-wrapper">
          <h2>Filter</h2>
          <div className="filters-outer">
            <CustomAccordion index={1} title={"Brendni tanlang"}>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga,
                minus.
              </p>
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
          <Product term={"-30%"} />
          <Product term={"-30%"} />
          <Product term={"-30%"} />
          <Product term={"-30%"} />
        </div>
      </div>
    </div>
  );
};

export default DiscountsFilter;
