import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "./filter/filterSlice";
import cartSlice from "./cart/slice";
import modal from "./modal/modalSlice";
import itemsSlice from "./items/itemsSlice";
import { TypedUseSelectorHook, useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const store = configureStore({
  reducer: {
    filterSlice,
    cartSlice,
    modal,
    itemsSlice,
  },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector