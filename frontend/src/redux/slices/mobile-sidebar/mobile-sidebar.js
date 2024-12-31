import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  open: false,
};

export const mobileSidebarSlice = createSlice({
  name: "sidebar",
  initialState,
  reducers: {
    handleCloseSidebar: (state) => {
      state.open = false;
    },
    handleOpenSidebar: (state) => {
      state.open = true;
    },
  },
});

export const { handleCloseSidebar, handleOpenSidebar } =
  mobileSidebarSlice.actions;
export default mobileSidebarSlice.reducer;
