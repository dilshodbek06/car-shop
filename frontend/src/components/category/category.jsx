import "./category.scss";

import categoryPhoto from "../../images/category/image 21.svg";

const Category = () => {
  return (
    <div className="my-category">
      <div className="card-body">
        <img src={categoryPhoto} alt={categoryPhoto} />
      </div>
      <div className="card-footer">
        <h5>Suspension</h5>
      </div>
    </div>
  );
};

export default Category;
