import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editingItem: null,
  products: [],
  isEditing: false,
  fetchLoading: false,
  modalOpen: false,
  currentPage: 1,
  totalPages: 0,
};

export const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    handleEditingItem: (state, action) => {
      state.editingItem = action.payload;
    },
    fetchProductsStart: (state) => {
      state.fetchLoading = true;
    },
    fetchProductsSucess: (state, action) => {
      state.fetchLoading = false;
      state.products = action.payload;
    },
    fetchProductsFailure: (state) => {
      state.fetchLoading = false;
    },
    toggleModalOpen: (state) => {
      state.modalOpen = !state.modalOpen;
    },
    handleIsEdit: (state) => {
      state.isEditing = true;
    },
    setCurrenPage: (state, action) => {
      state.currentPage = action.payload;
    },
    handleTotalPage: (state, action) => {
      state.totalPages = action.payload;
    },
  },
});

export const {
  handleEditingItem,
  toggleModalOpen,
  handleIsEdit,
  fetchProductsFailure,
  fetchProductsStart,
  fetchProductsSucess,
  handleTotalPage,
  setCurrenPage,
} = productSlice.actions;
export default productSlice.reducer;
