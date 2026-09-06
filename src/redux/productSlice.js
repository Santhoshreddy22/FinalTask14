import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null,
  searchText: "",
};

const productSlice = createSlice({
  name: "products",

  initialState,

  reducers: {

    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },

    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },

    clearSelectedProduct: state => {
      state.selectedProduct = null;
    },
  },
});

export const {
  setSelectedProduct,
  setSearchText,
  clearSelectedProduct,
} = productSlice.actions;

export default productSlice.reducer;