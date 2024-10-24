import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editingItem: null,
  categories: [],
  isEditing: false,
  fetchLoading: false,
  modalOpen: false,
  currentPage: 1,
  totalPages: 0,
};

export const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    handleEditingItem: (state, action) => {
      state.editingItem = action.payload;
    },
    fetchCategoriesStart: (state) => {
      state.fetchLoading = true;
    },
    fetchCategoriesSucess: (state, action) => {
      state.fetchLoading = false;
      state.categories = action.payload;
    },
    fetchCategoriesFailure: (state) => {
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
  fetchCategoriesFailure,
  fetchCategoriesStart,
  fetchCategoriesSucess,
  handleTotalPage,
  setCurrenPage,
} = categorySlice.actions;
export default categorySlice.reducer;
