import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart/cartSlice";
import brandSlice from "./slices/brand/brandSlice";
import carSlice from "./slices/car/carSlice";
import categorySlice from "./slices/category/carPartSlice";
import productSlice from "./slices/product/productSlice";
import adsSlice from "./slices/ads/adsSlice";
import mobileSidebarSlice from "./slices/mobile-sidebar/mobile-sidebar";

const rootReducer = combineReducers({
  cart: cartSlice,
  brand: brandSlice,
  car: carSlice,
  category: categorySlice,
  product: productSlice,
  ads: adsSlice,
  mSidebar: mobileSidebarSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
