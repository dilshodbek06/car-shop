/* eslint-disable react/prop-types */
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Drawer } from "vaul";
import { toggleTextModalOpen } from "../../../../redux/slices/ads/adsSlice";
import { createNewAdsText } from "../../../../actions/ads/text/ads-text-actions";
import toast from "react-hot-toast";

const AdsTextModal = ({ open, refresh }) => {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(toggleTextModalOpen());
  };
  const onSubmit = async () => {
    try {
      setLoading(true);
      await createNewAdsText({ title });
      refresh();
      setLoading(false);
      toast.success("Success");
      handleCancel();
    } catch (e) {
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Drawer.Root
        open={open}
        onClose={() => dispatch(toggleTextModalOpen)}
        onOpenChange={handleCancel}
        direction="right"
      >
        <Drawer.Portal>
          <Drawer.Overlay className="fixed inset-0 bg-black/40" />
          <Drawer.Content className="bg-white flex flex-col rounded-t-[10px] h-full max-w-lg w-full mt-24 fixed bottom-0 right-0">
            <div className="p-3 bg-white flex-1 h-full">
              <div className="max-w-md mx-auto">
                <Drawer.Title className="font-medium mb-4 text-xl">
                  Create new Carousel Text
                </Drawer.Title>
                <Drawer.Description className="hidden"></Drawer.Description>
              </div>
              <div className="overflow-y-auto scroll-smooth h-[calc(100vh-70px)] px-1">
                <form>
                  {/* title */}
                  <div>
                    <label
                      htmlFor="title"
                      className={`block mb-2 text-sm font-medium text-gray-900 dark:text-white`}
                    >
                      Title *
                    </label>
                    <textarea
                      id="title"
                      rows="6"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="block p-2.5 w-full text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 "
                      placeholder="describe your carousel text here..."
                    ></textarea>
                  </div>

                  {/* action buttons */}
                  <div className="flex justify-end items-center mt-6 gap-x-3 pb-2">
                    <button
                      type="button"
                      onClick={() => handleCancel()}
                      className="bg-gray-100 hover:bg-gray-200 focus:ring-2 focus:outline-none focus:ring-gray-500  font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      Cancel
                    </button>
                    <button
                      onClick={onSubmit}
                      disabled={loading || title === ""}
                      className="text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-2 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                      {loading ? "Loading..." : "Save"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </Drawer.Content>
        </Drawer.Portal>
      </Drawer.Root>
    </div>
  );
};

export default AdsTextModal;
