import { useEffect, useMemo, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GeolocationControl,
  Map,
  Placemark,
  SearchControl,
  YMaps,
  ZoomControl,
} from "react-yandex-maps";
import { Drawer } from "vaul";
import apiClient from "../../../helpers/apiClient";
import toast from "react-hot-toast";
import { resetCart } from "../../../redux/slices/cart/cartSlice";

const UserForm = () => {
  //
  const apiKey = "9a3bc7b2-bad0-416c-939a-1e4d9298f19c"; // Replace with your API key

  const { products: cartProducts } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const uzPhoneRegex = /^\+998\d{9}$/;

  const [open, setOpen] = useState(false);
  const [userLocation, setUserLocation] = useState([41.2995, 69.2401]); // Default to Tashkent

  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [fullname, setFullname] = useState("");
  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    address: "",
    phone: "",
    fullname: "",
  });

  const totalPrice = useMemo(
    () =>
      cartProducts.reduce(
        (acc, product) => acc + product.quantity * product.price,
        0
      ),
    [cartProducts]
  );
  const finalPrice = useMemo(() => totalPrice + 50000, [totalPrice]);

  useEffect(() => {
    // Check if the Geolocation API is available
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation([latitude, longitude]);
          fetchAddress([latitude, longitude]);
        },
        (error) => {
          console.error("Geolocation error:", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const validate = () => {
    let isValid = true;
    const newErrors = { address: "", phone: "", fullname: "" };

    if (!fullname.trim()) {
      newErrors.fullname = "Full name is required.";
      isValid = false;
    }

    if (!address.trim()) {
      newErrors.address = "Address is required.";
      isValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = "Phone number is required.";
      isValid = false;
    } else if (!uzPhoneRegex.test(phone)) {
      newErrors.phone = "Valid Uzbekistan phone number is required.";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const fetchAddress = async (coords) => {
    const response = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${apiKey}&geocode=${coords[1]},${coords[0]}&format=json`
    );
    const data = await response.json();
    const addressDetail =
      data.response.GeoObjectCollection.featureMember[0]?.GeoObject
        ?.metaDataProperty?.GeocoderMetaData?.text || "Unknown Address";
    setAddress(addressDetail);
  };

  const handleMapClick = async (e) => {
    const coords = e.get("coords");
    setUserLocation(coords);
    await fetchAddress(coords);
  };

  const handleModalClose = () => {
    setAddress("");
    setOpen(false);
  };

  const clearCartForm = () => {
    setAddress("");
    setFullname("");
    setPhone("");
    setUserLocation([41.2995, 69.2401]);
    dispatch(resetCart());
  };

  const handleCheckout = async () => {
    if (validate()) {
      try {
        setLoading(true);
        const obj = {
          client_name: fullname,
          phone: phone,
          reqOrders: cartProducts?.map((item) => ({
            productId: item?.id,
            amount: item?.quantity,
          })),
          longitude: userLocation[1],
          latitude: userLocation[0],
        };
        await apiClient(`/order`, "POST", obj);
        setLoading(false);
        toast.success(
          "Buyurtmangiz muvafaqqiyatli qabul qilindi. Sizga tez orada aloqaga chiqamiz."
        );
        clearCartForm();
        navigate("/");
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="order-summary">
      <h3 className="order-summary__title">Buyurtma ma&apos;lumotlari</h3>
      <form className="order-summary__form">
        <div className="order-summary__details">
          <h3 className="order-summary__subtitle">
            Ma&apos;lumotlarni to&apos;ldiring
          </h3>
          <div className="order-summary__inputs">
            <div className="order-summary__input-group">
              <input
                type="text"
                placeholder="To'liq ism..."
                className="order-summary__input"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="order-summary__icon"
              ></svg>
              {errors.fullname && (
                <p style={{ color: "red", width: "100%", fontSize: "13px" }}>
                  {errors.fullname}
                </p>
              )}
            </div>
            <div className="order-summary__input-group">
              <input
                type="tel"
                placeholder="Telefon raqam..."
                className="order-summary__input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="order-summary__icon"
              ></svg>
              {errors.phone && (
                <p style={{ color: "red", width: "100%", fontSize: "13px" }}>
                  {errors.phone}
                </p>
              )}
            </div>
            <div onClick={() => setOpen(true)}>
              <label
                htmlFor="uploadimage"
                className={`bg-white text-gray-500 font-semibold text-base rounded  h-18 py-2 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto font-[sans-serif] hover:border-gray-900 ${
                  errors?.address && "border-red-500 hover:border-red-600"
                }`}
              >
                <FaLocationDot size={24} />
                Manzilni belgilash
              </label>
            </div>
            {address !== "" && (
              <p className="text-sm text-gray-700 mt-2">
                <span className="font-bold">Manzil:</span> {address}
              </p>
            )}
          </div>
        </div>
      </form>

      <ul className="order-summary__pricing">
        <li
          style={{ marginTop: "8px" }}
          className="order-summary__pricing-total"
        >
          Umumiy <span>{finalPrice.toLocaleString()} UZS</span>
        </li>
      </ul>

      <div className="order-summary__actions">
        <button onClick={handleCheckout} className="order-summary__checkout">
          {loading ? "Loading..." : "Sotib olish"}
        </button>
        <button
          onClick={() => navigate("/")}
          className="order-summary__continue"
        >
          Xaridni davom ettirish
        </button>
      </div>

      <div>
        <Drawer.Root
          dismissible={false}
          open={open}
          onClose={() => setOpen(false)}
          onOpenChange={setOpen}
          direction="bottom"
        >
          <Drawer.Portal>
            <Drawer.Overlay className="fixed inset-0 bg-black/40" />
            <Drawer.Content className="bg-white flex flex-col          rounded-t-[10px] h-full max-w-lg w-full mt-24 fixed bottom-0 right-0">
              <div className="p-3 bg-white flex-1 h-full">
                <div className="max-w-md mx-auto relative">
                  <Drawer.Title className="font-medium mb-4 text-xl">
                    Manzilni tanlash
                  </Drawer.Title>
                  <button
                    onClick={handleModalClose}
                    className="absolute top-0 right-1 w-7 h-7 flex items-center text-lg justify-center rounded-full hover:bg-gray-100"
                  >
                    x
                  </button>
                  <Drawer.Description className="hidden"></Drawer.Description>
                </div>
                <div className="overflow-y-auto scroll-smooth h-[calc(100vh-70px)] px-1">
                  <YMaps
                    query={{
                      apikey: apiKey,
                      lang: "en_US",
                      coordorder: "latlong",
                    }}
                  >
                    <Map
                      onClick={handleMapClick}
                      defaultState={{ center: userLocation, zoom: 10 }}
                      state={{ center: userLocation, zoom: 10 }}
                      width="100%"
                      height="400px"
                    >
                      <Placemark geometry={userLocation} />
                      <GeolocationControl options={{ float: "right" }} />
                      {/* <TrafficControl options={{ float: "right" }} /> */}
                      <ZoomControl options={{ float: "left" }} />
                      <SearchControl options={{ float: "left" }} />
                    </Map>
                  </YMaps>
                  <div className="mt-4">
                    {address && (
                      <p className="text-sm text-gray-700 mt-2">
                        <span className="font-bold">Manzil:</span> {address}
                      </p>
                    )}

                    {address && (
                      <div className="mt-3">
                        <button
                          onClick={() => setOpen(false)}
                          className="bg-gray-300 border-none cursor-pointer w-full p-2 rounded-lg hover:bg-gray-400"
                        >
                          Saqlash
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Drawer.Content>
          </Drawer.Portal>
        </Drawer.Root>
      </div>
    </div>
  );
};

export default UserForm;
