import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IfilterSlice, Sort } from "./types";



const initialState: IfilterSlice = {
  categoryId: 0,
  currentPage: 1,
  sort: {
    name: "популярности",
    type: "rating",
  },
  searchValue: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategoryId(state, action: PayloadAction<number>) {
      state.categoryId = action.payload;
    },
    setSort(state, action: PayloadAction<Sort>) {
      state.sort = action.payload;
    },
    setSearch(state, action: PayloadAction<string>) {
      state.searchValue = action.payload;
    },
    setCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload;
    },
    setFilters(state, action: PayloadAction<IfilterSlice>) {
      state.currentPage = Number(action.payload.currentPage);
      state.categoryId = Number(action.payload.categoryId);
      state.sort = action.payload.sort;
      state.searchValue = action.payload.searchValue;
    },
  },
});



export const { setCategoryId, setSort, setCurrentPage, setSearch } =
  filterSlice.actions;

export default filterSlice.reducer;
