import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import cartSlice from "./slices/cart/cartSlice";
import brandSlice from "./slices/brand/brandSlice";
import carSlice from "./slices/car/carSlice";
import categorySlice from "./slices/category/carPartSlice";
import productSlice from "./slices/product/productSlice";

const rootReducer = combineReducers({
  cart: cartSlice,
  brand: brandSlice,
  car: carSlice,
  category: categorySlice,
  product: productSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
