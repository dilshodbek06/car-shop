import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editingItem: null,
  adsTextList: [],
  adsImageList: [],
  isEditing: false,
  fetchLoading: false,
  textModalOpen: false,
  imageModalOpen: false,
};

export const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    handleEditingItem: (state, action) => {
      state.editingItem = action.payload;
    },
    fetchAdsTextStart: (state) => {
      state.fetchLoading = true;
    },
    fetchAdsTextSucess: (state, action) => {
      state.fetchLoading = false;
      state.adsTextList = action.payload;
    },
    fetchAdsTextFailure: (state) => {
      state.fetchLoading = false;
    },
    fetchAdsImageStart: (state) => {
      state.fetchLoading = true;
    },
    fetchAdsImageSucess: (state, action) => {
      state.fetchLoading = false;
      state.adsImageList = action.payload;
    },
    fetchAdsImageFailure: (state) => {
      state.fetchLoading = false;
    },
    toggleTextModalOpen: (state) => {
      state.textModalOpen = !state.textModalOpen;
    },
    toggleImageModalOpen: (state) => {
      state.imageModalOpen = !state.imageModalOpen;
    },
    handleIsEdit: (state) => {
      state.isEditing = true;
    },
  },
});

export const {
  fetchAdsTextFailure,
  fetchAdsTextStart,
  fetchAdsTextSucess,
  handleEditingItem,
  handleIsEdit,
  toggleImageModalOpen,
  toggleTextModalOpen,
  fetchAdsImageFailure,
  fetchAdsImageStart,
  fetchAdsImageSucess,
} = adsSlice.actions;
export default adsSlice.reducer;
