import AdsTextTable from "./ads-text-table";
import AdsImageTable from "./ads-image-table";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdsImageFailure,
  fetchAdsImageStart,
  fetchAdsImageSucess,
  fetchAdsTextFailure,
  fetchAdsTextStart,
  fetchAdsTextSucess,
  toggleImageModalOpen,
  toggleTextModalOpen,
} from "../../../../redux/slices/ads/adsSlice";
import { getAllAdsTextList } from "../../../../actions/ads/text/ads-text-actions";
import { getAllAdsImageList } from "../../../../actions/ads/image/ads-image-actions";
import AdsTextModal from "./ads-text-modal";
import AdsImageModal from "./ads-image-modal";

/* eslint-disable react/prop-types */
const AdsList = ({ tab }) => {
  const {
    fetchLoading,
    adsTextList,
    adsImageList,
    textModalOpen,
    imageModalOpen,
  } = useSelector((state) => state.ads);
  const dispatch = useDispatch();

  useEffect(() => {
    fetchAdsTextList();
    fetchAdsImageList();
  }, []);

  const fetchAdsTextList = async () => {
    try {
      dispatch(fetchAdsTextStart());
      const data = await getAllAdsTextList();
      dispatch(fetchAdsTextSucess(data));
    } catch (error) {
      console.error("Error fetching brands:", error);
    } finally {
      dispatch(fetchAdsTextFailure());
    }
  };
  const fetchAdsImageList = async () => {
    try {
      dispatch(fetchAdsImageStart());
      const data = await getAllAdsImageList();
      dispatch(fetchAdsImageSucess(data));
    } catch (error) {
      console.error("Error fetching brands:", error);
    } finally {
      dispatch(fetchAdsImageFailure());
    }
  };

  return (
    <>
      {tab === "text" ? (
        <>
          <div className="flex transition justify-between items-center px-3 md:px-5 py-3">
            <h1 className="font-bold text-lg md:text-2xl">
              Manage Carousel Texts
            </h1>
            <button
              onClick={() => dispatch(toggleTextModalOpen())}
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              + New
            </button>
          </div>
          <AdsTextTable
            refresh={fetchAdsTextList}
            loading={fetchLoading}
            items={adsTextList ?? []}
          />
          <AdsTextModal refresh={fetchAdsTextList} open={textModalOpen} />
        </>
      ) : (
        <>
          <div className="flex transition justify-between items-center px-3 md:px-5 py-3">
            <h1 className="font-bold text-lg md:text-2xl">
              Manage Carousel Images
            </h1>
            <button
              onClick={() => dispatch(toggleImageModalOpen())}
              className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              + New
            </button>
          </div>
          <AdsImageTable
            refresh={fetchAdsImageList}
            loading={fetchLoading}
            items={adsImageList ?? []}
          />
          <AdsImageModal refresh={fetchAdsImageList} open={imageModalOpen} />
        </>
      )}
    </>
  );
};

export default AdsList;
