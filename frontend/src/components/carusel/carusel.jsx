import "./carusel.scss";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import reklamaLogo from "../../images/reklama rasm.svg";
import boxLogo from "../../images/box.svg";
import deliveryLogo from "../../images/delivery-truck.svg";
import fullTimeLogo from "../../images/24-hours.svg";
import safetyLogo from "../../images/shield.svg";

import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import { BsArrowRight } from "react-icons/bs";
import { useCarouselFetch } from "../../hooks/use-carousel";
import { useCarouselFetchImages } from "../../hooks/use-carousel-images";
import { baseUrl } from "../../helpers/apiClient";
import { useMemo } from "react";

const Carusel = () => {
  const getImage = (name) => {
    return `${baseUrl}/file/getFile/${name}`;
  };
  const itemsData = useMemo(
    () => [
      { id: 1, imageFile: boxLogo, title: "Chegirmalar", desc: "Har haftada" },
      {
        id: 2,
        imageFile: deliveryLogo,
        title: "Yetkazib berish",
        desc: "Xohlagan joyingizga",
      },
      {
        id: 3,
        imageFile: fullTimeLogo,
        title: "Support 24/7",
        desc: "Xohlagan vaqtingizda",
      },
      {
        id: 4,
        imageFile: safetyLogo,
        title: "Ishonchli mahsulot",
        desc: "100% Original",
      },
    ],
    []
  );
  const { data: textData } = useCarouselFetch(`/advertisement`);

  const { data: images } = useCarouselFetchImages(`/carousel`);

  const combinedCarouselData =
    textData?.length > images?.length
      ? textData?.map((item, index) => ({
          text: item?.title,
          imageId:
            index < images?.length
              ? images[index]?.attachment?.id
              : images[0]?.attachment?.id,
        }))
      : images?.map((item, index) => ({
          imageId: item?.attachment?.id,
          text:
            index < textData?.length
              ? textData[index]?.title
              : textData[0]?.title,
        }));

  // const combinedData =  textData.map((textItem, index) => ({
  //   ...textItem,
  //   imageId: imagesData[index]?.attachment?.id || null, // Match image by index or set to null
  // }));

  return (
    <div className="my-carusel">
      <div className="container">
        <div className="back-shape"></div>
        <div className="test">
          <Swiper
            cssMode={true}
            navigation={true}
            pagination={{
              clickable: true,
            }}
            mousewheel={true}
            keyboard={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            {combinedCarouselData?.map((item, ind) => (
              <SwiperSlide key={ind}>
                <div className="content-wrapper">
                  <div className="left">
                    <p>Assalomu alaykum!</p>
                    <h1>{item?.text}</h1>
                    <button className="buy-btn">
                      <span>Sotib olish</span>
                      <BsArrowRight className="right-icon" />
                    </button>
                  </div>
                  <div className="right">
                    <img src={getImage(item.imageId)} alt="slider image" />
                  </div>
                </div>
              </SwiperSlide>
            ))}

            <SwiperSlide>
              <div className="content-wrapper">
                <div className="left">
                  <p>Assalomu alaykum!</p>
                  <h1>Mashinangiz Uchun eng Yaxshi Tanlov.</h1>
                  <button className="buy-btn">
                    <span>Sotib olish</span>
                    <BsArrowRight className="right-icon" />
                  </button>
                </div>
                <div className="right">
                  <img src={reklamaLogo} alt="slider image" />
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="content-wrapper">
                <div className="left">
                  <p>Assalomu alaykum!</p>
                  <h1>Mashinangiz Uchun eng Yaxshi Tanlov.</h1>
                  <button className="buy-btn">
                    <span>Sotib olish</span>
                    <BsArrowRight className="right-icon" />
                  </button>
                </div>
                <div className="right">
                  <img src={reklamaLogo} alt="slider image" />
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="benefits-bottom">
        <div className="benefits-container">
          {itemsData?.map((item) => (
            <div key={item?.id} className="item">
              <img src={item?.imageFile} alt="box" />
              <div>
                <h5>{item?.title}</h5>
                <p>{item?.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carusel;
