import {
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  ADD_TOTALS,
  ADD_ITEM_TO_CART,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART
} from '../actions/types';

export const packReducer = (packState, action) => {
  switch (action.type) {
    case ADD_ITEM_TO_CART:
      return {
        ...packState,
        pack: action.payload.pack
      };
    case INCREMENT_ITEM:
      return {
        ...packState,
        pack: action.payload
      };
    case DECREMENT_ITEM:
      return {
        ...packState,
        pack: action.payload
      };
    case ADD_TOTALS: {
      const { subtotal, tax, total } = action.payload;
      return {
        ...packState,
        packSubtotal: subtotal,
        packTax: tax,
        packTotal: total
      };
    }
    case REMOVE_ITEM_FROM_CART:
      return {
        ...packState,
        pack: action.payload.pack
      };
    case CLEAR_CART:
      return {
        pack: [],
        packSubtotal: 0,
        packTax: 0,
        packTotal: 0
      };
    default:
      return packState;
  }
};
