import Category from "../../components/category/category";
import PhoneNavigation from "../../components/phone-navigation/phone-navigation";
import "./categories.scss";

const Categories = () => {
  return (
    <div className="my-categories">
      <div className="container">
        <h1 className="title">Barcha Kategoriyalar</h1>
        <div className="categories-grid">
          <Category />
          <Category />
          <Category />
          <Category />
          <Category />
        </div>
      </div>
      <div className="phone-navigation-father">
        <PhoneNavigation />
      </div>
    </div>
  );
};

export default Categories;
