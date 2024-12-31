/* eslint-disable react/prop-types */
import "./category.scss";

import categoryPhoto from "../../images/category/image 21.svg";
import { useNavigate } from "react-router-dom";

const Category = ({ name, imageUrl, id }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/products/filter?category=${id}`)}
      className="my-category"
    >
      <div className="card-body">
        <img src={imageUrl ?? categoryPhoto} alt={categoryPhoto} />
      </div>
      <div className="card-footer">
        <h5>{name ?? "Suspension"}</h5>
      </div>
    </div>
  );
};

export default Category;
