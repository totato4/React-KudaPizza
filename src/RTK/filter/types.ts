import { Iitem } from "../items/types";


export type Sort = {
  name: string;
  type: "rating" | "-rating" | "price" | "-price" | "title" | "-title";
}

export interface IfilterSlice {
  categoryId: number;
  currentPage: number;
  sort: {
    name: string;
    type: string;
  }
  searchValue: string;
}