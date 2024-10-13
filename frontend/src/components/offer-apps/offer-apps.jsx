import "./offer-apps.scss";
import phoneLogo from "../../images/apps-phone.svg";
import playMarketLogo from "../../images/play-market.svg";
import appStoreLogo from "../../images/app-store.svg";

const OfferApps = () => {
  return (
    <div className="my-offer-apps">
      <div className="container">
        <div className="left">
          <h1>Zapchast.uz - Mobil ilovasini yuklang</h1>
          <p className="desc">
            Zapchast.uz - Mobile ilovasinini yuklab oling va oz’ingizga kerakli
            avtomobil extiyot qisimlarini oson toping. Zapchast.uz - Mobile
            ilovasinini yuklab oling va oz’ingizga kerakli avtomobil extiyot
            qisimlarini oson toping.{" "}
          </p>
          <div className="apps-wrapper">
            <div className="play-market-btn">
              <img src={playMarketLogo} alt="play market" />
              <div>
                <p>GET IT ON</p>
                <h5>Google Play</h5>
              </div>
            </div>  
            <div className="app-store-btn">
              <img src={appStoreLogo} alt="app store" />
              <div>
                <p>Download on the</p>
                <h5>App Store</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="right">
          <img src={phoneLogo} alt="phone image" />
        </div>
      </div>
    </div>
  );
};

export default OfferApps;
