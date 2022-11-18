




export interface Iitem {
  id: string;
  imageUrl: string;
  title?: string;
  name: string;
  filling?: [string, number];
  category?: number;
  types: number;
  type?: number;
  sizes: number;
  price: number;
  rating?: number;
  recent?: boolean;
  hit?: boolean;
  count: number;
}



export enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',

}


export interface IitemsSliceState {
  items: Iitem[]
  status: Status;
}