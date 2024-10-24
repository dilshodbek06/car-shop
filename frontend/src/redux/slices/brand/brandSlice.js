import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editingItem: null,
  brands: [],
  isEditing: false,
  fetchLoading: false,
  modalOpen: false,
  currentPage: 1,
  totalPages: 0,
};

export const brandSlice = createSlice({
  name: "brand",
  initialState,
  reducers: {
    handleEditingItem: (state, action) => {
      state.editingItem = action.payload;
    },
    fetchBrandsStart: (state) => {
      state.fetchLoading = true;
    },
    fetchBrandsSucess: (state, action) => {
      state.fetchLoading = false;
      state.brands = action.payload;
    },
    fetchBrandsFailure: (state) => {
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
  fetchBrandsStart,
  fetchBrandsSucess,
  fetchBrandsFailure,
  toggleModalOpen,
  handleIsEdit,
  setCurrenPage,
  handleTotalPage,
} = brandSlice.actions;
export default brandSlice.reducer;
