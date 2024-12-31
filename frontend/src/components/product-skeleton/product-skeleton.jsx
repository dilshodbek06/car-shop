import "./product-skeleton.scss";

const ProductSkeleton = () => {
  return (
    <div className="my-product-skeleton">
      <div className="my-product skeleton">
        <div className="card-header">
          <span className="skeleton-box term-skeleton"></span>
          <div className="icons-wrapper">
            <div className="cart-div skeleton-box"></div>
            <div className="like-div cart-div skeleton-box"></div>
          </div>
        </div>
        <div className="card-body">
          <div className="skeleton-box image-skeleton"></div>
        </div>
        <div className="card-footer">
          <h2 className="skeleton-box title-skeleton"></h2>
          <div className="rating-wrapper skeleton-box"></div>
          <button className="price-btn skeleton-box"></button>
        </div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
