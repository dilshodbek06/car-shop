import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products:
    typeof window !== "undefined" && localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [],
  userInfo: {
    phoneNumber: "",
    longitude: "",
    latitude: "",
    name: "",
  },
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity += parseInt(action.payload.quantity, 10);
      } else {
        state.products.push(action.payload);
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    increaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    decreaseQuantity: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);
      if (item && item.quantity > 1) {
        item.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    deleteItem: (state, action) => {
      state.products = state.products.filter(
        (item) => item.id !== action.payload
      );
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    resetCart: (state) => {
      state.products = [];
      localStorage.setItem("cart", JSON.stringify(state.products));
    },
    handleUserData: (state, action) => {
      state.userInfo = {
        ...state.userInfo,
        [action.payload.key]: action.payload.data,
      };
    },
  },
});

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  resetCart,
  handleUserData,
} = cartSlice.actions;
export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   products: localStorage.getItem("cart")
//     ? JSON.parse(localStorage.getItem("cart"))
//     : [],
//   userInfo: {
//     phoneNumber: "",
//     longitute: "",
//     lattitute: "",
//     name: "",
//   },
// };

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState,
//   reducers: {
//     addToCart: (state, action) => {
//       const item = state.products.find((item) => item.id === action.payload.id);
//       if (item) {
//         item.quantity += parseInt(action.payload.quantity);
//       } else {
//         state.products.push(action.payload);
//       }
//       localStorage.setItem("cart", JSON.stringify(state.products));
//     },
//     increaseQuantity: (state, action) => {
//       const item = state.products.find((item) => item.id === action.payload.id);
//       if (item) {
//         item.quantity++;
//       }
//       localStorage.setItem("cart", JSON.stringify(state.products));
//     },
//     decreaseQuantity: (state, action) => {
//       const item = state.products.find(
//         (item) => item._id === action.payload.id
//       );
//       if (item.quantity === 1) {
//         item.quantity = 1;
//       } else {
//         item.quantity--;
//       }
//       localStorage.setItem("cart", JSON.stringify(state.products));
//     },
//     deleteItem: (state, action) => {
//       state.products = state.products.filter(
//         (item) => item.id !== action.payload
//       );
//       localStorage.setItem("cart", JSON.stringify(state.products));
//     },
//     resetCart: (state) => {
//       state.products = [];
//       localStorage.setItem("cart", JSON.stringify(state.products));
//     },
//     handleUserData: (state, action) => {
//       state.userInfo = {
//         ...state.userInfo,
//         [action.payload.key]: action.payload.data,
//       };
//     },
//   },
// });

// export const {
//   addToCart,
//   increaseQuantity,
//   decreaseQuantity,
//   deleteItem,
//   resetCart,
// } = cartSlice.actions;
// export default cartSlice.reducer;
