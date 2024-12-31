import CategorySkeleton from "../../components/category-skeleton/category-skeleton";
import Category from "../../components/category/category";
import PhoneNavigation from "../../components/phone-navigation/phone-navigation";
import { baseUrl } from "../../helpers/apiClient";
import { useCategoriesFetch } from "../../hooks/use-categories";
import "./categories.scss";

const Categories = () => {
  const getImage = (name) => {
    return `${baseUrl}/file/getFile/${name}`;
  };
  const { data = [], loading } = useCategoriesFetch("/carPart");

  return (
    <div className="my-categories">
      <div className="container">
        <h1 className="title">Barcha Kategoriyalar</h1>
        <div className="categories-grid">
          {loading
            ? Array.from({ length: 3 }, (_, i) => <CategorySkeleton key={i} />)
            : data.map((item, ind) => (
                <Category
                  imageUrl={getImage(item?.photo?.id)}
                  name={item?.name}
                  key={ind}
                  id={item?.id}
                />
              ))}
        </div>
      </div>
      <div className="phone-navigation-father">
        <PhoneNavigation />
      </div>
    </div>
  );
};

export default Categories;
