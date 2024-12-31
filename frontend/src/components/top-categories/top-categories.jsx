import "./top-categories.scss";

import Category from "../category/category";
import { useCategoriesFetch } from "../../hooks/use-categories";
import { baseUrl } from "../../helpers/apiClient";
import { useNavigate } from "react-router-dom";

const TopCategories = () => {
  const navigate = useNavigate();
  const getImage = (name) => {
    return `${baseUrl}/file/getFile/${name}`;
  };
  const { data, error, loading } = useCategoriesFetch("/carPart");

  return (
    <div className="my-topCategories">
      <div className="container">
        <div className="title-wrapper">
          <h1>Top Kategoriyalar</h1>
          <p>Hammasi</p>
        </div>
        <div className="categories-grid">
          {data?.map((item, ind) => (
            <Category
              key={ind}
              name={item?.name}
              imageUrl={getImage(item?.photo?.id)}
            />
          ))}
          <Category />
          <Category />
          <Category />
        </div>
        <div className="all-wrapper">
          <button onClick={() => navigate("/categories")}>
            Barchasini ko’rish
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCategories;
