import { Iitem } from "../items/types";


export interface CartSliceState {
  totalPrice: Number;
  items: Iitem[];
}

