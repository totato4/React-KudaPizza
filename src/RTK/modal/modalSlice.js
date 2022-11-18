import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  item: {
    id: 0,
    name: "name",
    types: [0, 0],
    price: 0,
  },
  showModal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal(state, action) {
      state.item = action.payload;
      state.showModal = true;
    },
    closeModal(state) {
      state.item = {};
      state.showModal = false;
    },
  },
});

export const { openModal, closeModal, buyModal } = modalSlice.actions;

export default modalSlice.reducer;
