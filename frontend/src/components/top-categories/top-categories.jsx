import "./top-categories.scss";

import Category from "../category/category";

const TopCategories = () => {
  return (
    <div className="my-topCategories">
      <div className="container">
        <div className="title-wrapper">
          <h1>Top Kategoriyalar</h1>
          <p>Hammasi</p>
        </div>
        <div className="categories-grid">
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
        <div className="all-wrapper">
          <button>Barchasini ko’rish</button>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
