import { IoCloseSharp, IoSearch } from "react-icons/io5";
import "./products-filter.scss";
import CustomAccordion from "../../components/custom/customAccordion";
import Product from "../../components/product/product";
import PhoneNavigation from "../../components/phone-navigation/phone-navigation";
import PhoneProduct from "../../components/phone-product/phone-product";
import { useCategoriesFetch } from "../../hooks/use-categories";
import { useBrandsFetch } from "../../hooks/use-brands";
import { useCarsFetch } from "../../hooks/use-cars";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { useEffect, useState } from "react";
import useResponsive from "../../hooks/use-responsive";
import { useOurProductsFetch } from "../../hooks/use-our-product";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { addToCart } from "../../redux/slices/cart/cartSlice";
import { getImage } from "../../helpers/get-image";
import ProductSkeleton from "../../components/product-skeleton/product-skeleton";
import { useLocation, useNavigate } from "react-router-dom";

const ProductsFilter = () => {
  //
  const isTablet = useResponsive(768);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(isTablet ? true : false);
  const [selectedFilters, setSelectedFilters] = useState({
    brands: [], // Store selected brand IDs
    cars: [], // Store selected car IDs
    categories: [], // Store selected category IDs
  });

  const { data: categories } = useCategoriesFetch(`/carPart`);
  const { data: brands } = useBrandsFetch(`/brand`);
  const { data: cars } = useCarsFetch(`/car`);
  const { data: products, loading: productsLoading } =
    useOurProductsFetch(`/product`);

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      setSelectedFilters((prev) => ({
        ...prev,
        categories: [categoryParam], // Replace with the category from the URL
      }));
    }
  }, [location.search]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success("Qo'shildi");
  };

  const handleFilterToggle = (type, id) => {
    setSelectedFilters((prevFilters) => {
      return {
        ...prevFilters,
        [type]: [id], // Replace the current selection with the new one
      };
    });
  };

  // const filteredProducts = products?.content?.filter((product) => {
  //   const matchesBrand =
  //     selectedFilters.brands.length === 0 ||
  //     selectedFilters.brands.includes(product.brandId);
  //   const matchesCar =
  //     selectedFilters.cars.length === 0 ||
  //     selectedFilters.cars.includes(product.carId);
  //   const matchesCategory =
  //     selectedFilters.categories.length === 0 ||
  //     selectedFilters.categories.includes(product.categoryId);

  //   return matchesBrand && matchesCar && matchesCategory;
  // });

  const handleClearFilters = () => {
    setSelectedFilters({ brands: [], cars: [], categories: [] });
    navigate("/products/filter", { replace: true });
  };

  const handleSearch = () => {
    console.log(selectedFilters);
    setOpen(false);
  };

  return (
    <div className="my-products-filter">
      <div className="container-products-filter">
        <div
          style={{ height: open ? "fit-content" : "" }}
          className={`filter-wrapper ${open ? "" : "close"}`}
        >
          <div className="flex items-center justify-between close-inner">
            <h2>Filter</h2>
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-full hover:bg-gray-200 close-btn"
            >
              {open ? (
                <BsArrowUp className="size-4" />
              ) : (
                <BsArrowDown className="size-4" />
              )}
            </button>
          </div>
          <div className="filters-outer">
            <CustomAccordion
              index={1}
              title={
                selectedFilters?.brands?.length > 0
                  ? brands?.find((b) => b?.id === selectedFilters?.brands[0])
                      ?.name
                  : "Brendni tanlang"
              }
            >
              <div className="brands-list">
                {brands?.map((item, ind) => (
                  <p
                    key={ind}
                    onClick={() => handleFilterToggle("brands", item.id)}
                    className={`filter-item ${
                      selectedFilters.brands.includes(item.id) ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </CustomAccordion>

            <CustomAccordion
              index={2}
              title={
                selectedFilters?.cars?.length > 0
                  ? cars?.find((b) => b?.id === selectedFilters?.cars[0])?.name
                  : "Modelni tanlang"
              }
            >
              <div className="brands-list">
                {cars?.map((item, ind) => (
                  <p
                    key={ind}
                    onClick={() => handleFilterToggle("cars", item.id)}
                    className={`filter-item ${
                      selectedFilters.cars.includes(item.id) ? "active" : ""
                    }`}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </CustomAccordion>

            <CustomAccordion
              index={3}
              title={
                selectedFilters?.categories?.length > 0
                  ? categories?.find(
                      (b) => b?.id === selectedFilters?.categories[0]
                    )?.name
                  : "Extiyot qismni tanlang"
              }
            >
              <div className="brands-list">
                {categories?.map((item, ind) => (
                  <p
                    key={ind}
                    onClick={() => handleFilterToggle("categories", item.id)}
                    className={`filter-item ${
                      selectedFilters.categories.includes(item.id)
                        ? "active"
                        : ""
                    }`}
                  >
                    {item.name}
                  </p>
                ))}
              </div>
            </CustomAccordion>
          </div>
          {/* buttons */}
          <div className="buttons-wrapper">
            <button onClick={handleClearFilters} className="clear-btn">
              <span>Tozalash</span>
              <IoCloseSharp className="clear-icon" />
            </button>
            <button onClick={handleSearch} className="search-btn">
              <span>Qidirish</span>
              <IoSearch className="search-icon" />
            </button>
          </div>
        </div>
        <div className="products-grid">
          {products &&
            products.content?.map((item, ind) => (
              <Product
                key={ind}
                imageUrl={getImage(item?.photo?.id)}
                name={item?.title}
                description={item?.description}
                price={item?.price}
                addToCart={() => handleAddToCart(item)}
                id={item.id}
              />
            ))}
          {productsLoading
            ? [1, 1].map((_, ind) => <ProductSkeleton key={ind} />)
            : products &&
              products?.content?.map((item, ind) => (
                <PhoneProduct
                  key={ind}
                  imageUrl={getImage(item?.photo?.id)}
                  name={item?.title}
                  description={item?.description}
                  price={item?.price}
                  term="NEW"
                  id={item.id}
                  addToCart={() => handleAddToCart(item)}
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

export default ProductsFilter;
