import "./footer.scss";

import brandLogo from "../../images/footer-logo.svg";
import playMarketLogo from "../../images/play-market.svg";
import appStoreLogo from "../../images/footer-app-store.svg";
import pochtaLogo from "../../images/pochta.svg";
import gudokLogo from "../../images/gudok.svg";
import locationLogo from "../../images/location.svg";

const Footer = () => {
  return (
    <div className="my-footer">
      <div className="container-wrapper">
        <div className="container">
          <div className="top">
            <div>
              <div className="brand-wrapper">
                <img src={brandLogo} alt="brand logo" />
                <p>Zap-chast.uz</p>
              </div>
              <p className="desc">
                Zapchastni har kim, har kuni, arzon narxda, qulay tarzda va
                istalgan joyda olishi kerak!
              </p>
              <div className="apps-wrapper">
                <div className="app-store-btn-footer">
                  <img src={appStoreLogo} alt="app store" />
                  <div>
                    <p>Download on the</p>
                    <h5>App Store</h5>
                  </div>
                </div>
                <div className="play-market-btn-footer">
                  <img src={playMarketLogo} alt="play market" />
                  <div>
                    <p>GET IT ON</p>
                    <h5>Google Play</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="useful-links-wrapper">
              <div className="left-side">
                <div className="left-tarmoq">
                  <p>Ijtimoiy tarmoq</p>
                  <ul>
                    <li>Telegram</li>
                    <li>Instagram</li>
                    <li>Youtube</li>
                  </ul>
                </div>
                <div className="left-tarmoq">
                  <p>Hamkorlar</p>
                  <ul>
                    <li>Xenol</li>
                    <li>Coolstream</li>
                  </ul>
                </div>
              </div>
              <div className="right-side">
                <p className="contacts-title">Contacts</p>
                <div className="contacts-outer">
                  <div>
                    <img src={gudokLogo} alt="tel logo" />
                    <p>+99 888 111 47 47</p>
                  </div>
                  <div>
                    <img src={pochtaLogo} alt="tel logo" />
                    <p>islom.dev@icloud.com</p>
                  </div>
                  <div>
                    <img src={locationLogo} alt="tel logo" />
                    <p>Toshkent shahar, Sergeli moshina bozor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="bottom-container">
            <hr />
            <div>
              <p>©2023 zapchast.uz </p>
              <p>Ishlab chiquvchi: </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
