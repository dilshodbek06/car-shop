import "./home.scss";
import Carusel from "../../components/carusel/carusel";
import TopProducts from "../../components/top-products/top-products";
import OurProducts from "../../components/our-products/our-products";
import PhoneNavigation from "../../components/phone-navigation/phone-navigation";

const Home = () => {
  return (
    <div className="my-home">
      <div style={{ marginTop: "24px" }}>
        <Carusel />
      </div>
      <div className="top-products-father" style={{ marginTop: "100px" }}>
        {/* top products */}
        <TopProducts />
      </div>
      <div className="our-products-father" style={{ marginTop: "100px" }}>
        <OurProducts />
      </div>
      <div className="phone-navigation-father">
        <PhoneNavigation />
      </div>
    </div>
  );
};

export default Home;
