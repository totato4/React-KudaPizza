import { RootState } from "../store";


export const cartSelector = (state: any) => state.cartSlice;
export const cartItemByIdSelector = (id: string) => (state: RootState) =>
  state.cartSlice.items.find((obj: { id: string; }) => obj.id == id);