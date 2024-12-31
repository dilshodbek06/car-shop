import "./category-skeleton.scss";

const CategorySkeleton = () => {
  return (
    <div className="my-category-skeleton">
      <div className="skeleton-category-card">
        <div className="skeleton-card-body">
          <div className="skeleton-image"></div>
        </div>
        <div className="skeleton-card-footer">
          <div className="skeleton-text"></div>
        </div>
      </div>
    </div>
  );
};

export default CategorySkeleton;
