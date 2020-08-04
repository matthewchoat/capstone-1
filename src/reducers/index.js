import { productReducer } from './productReducer';
import { packReducer } from './packReducer';
import { modalReducer } from './modalReducer';

export const stateReducer = ({ product, pack, modal }, action) => ({
  product: productReducer(product, action),
  pack: packReducer(pack, action),
  modal: modalReducer(modal, action)
});
