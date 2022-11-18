import { Iitem } from '../RTK/items/types';



export const calcTotalPrice = (items: Iitem[]) => {
    return  items.reduce((sum, obj) => {
        return obj.price * obj.count + sum;
      }, 0);
}

