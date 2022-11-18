import { calcTotalPrice } from './calcTotalPrice';
import { Iitem } from '../RTK/items/types';

export const getCartFromLS = () => {
  const data = localStorage.getItem('cart');
  const items = data ? JSON.parse(data) : []
  const totalPrice = calcTotalPrice(items)


 return  {
      items: items as Iitem[],
      totalPrice
    }
 }