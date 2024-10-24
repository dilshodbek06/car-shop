import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  editingItem: null,
  cars: [],
  isEditing: false,
  fetchLoading: false,
  modalOpen: false,
};

export const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {
    handleEditingItem: (state, action) => {
      state.editingItem = action.payload;
    },
    fetchCarsStart: (state) => {
      state.fetchLoading = true;
    },
    fetchCarsSucess: (state, action) => {
      state.fetchLoading = false;
      state.cars = action.payload;
    },
    fetchCarsFailure: (state) => {
      state.fetchLoading = false;
    },
    toggleModalOpen: (state) => {
      state.modalOpen = !state.modalOpen;
    },
    handleIsEdit: (state) => {
      state.isEditing = true;
    },
  },
});

export const {
  handleEditingItem,
  toggleModalOpen,
  handleIsEdit,
  fetchCarsFailure,
  fetchCarsStart,
  fetchCarsSucess,
} = carSlice.actions;
export default carSlice.reducer;
