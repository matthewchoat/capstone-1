import {
  ADD_ITEM_TO_CART,
  INCREMENT_ITEM,
  DECREMENT_ITEM,
  ADD_TOTALS,
  REMOVE_ITEM_FROM_CART,
  CLEAR_CART
} from './types';

export const usePackActions = ({ productState, packState }, dispatch) => {
  // Get item by id
  const getItem = id => productState.products.find(item => item.id === id);

  const addItemToPack = id => {
    let tempProducts = [...productState.products];
    const index = tempProducts.indexOf(getItem(id));
    const tempProduct = tempProducts[index];
    tempProduct.inPack = true;
    tempProduct.count = 1;
    const price = tempProduct.price;
    tempProduct.total = price;
    const tempPack = [...packState.pack, tempProduct];
    dispatch({
      type: ADD_ITEM_TO_CART,
      payload: tempPack
    });
  };

  const addTotals = () => {
    let subtotal = 0;
    packState.pack.map(item => (subtotal += item.total));
    const tempTax = subtotal * 0.1;
    const tax = parseFloat(tempTax.toFixed(2));
    const total = subtotal + tax;
    dispatch({
      type: ADD_TOTALS,
      payload: { subtotal, tax, total }
    });
  };

  const removeItemFromPack = id => {
    let tempProducts = [...productState.products];
    let tempPack = [...packState.pack];
    tempPack = tempPack.filter(item => item.id !== id);
    const index = tempProducts.indexOf(getItem(id));
    let removedProduct = tempProducts[index];
    removedProduct.inPack = false;
    removedProduct.count = 0;
    removedProduct.total = 0;
    dispatch({
      type: REMOVE_ITEM_FROM_CART,
      payload: tempPack
    });
    addTotals();
  };

  const clearPack = pack => {
    dispatch({ type: CLEAR_CART });
    addTotals();
    // Cheating because it's referencing product state objects directly
    pack.forEach(item => {
      item.inPack = false;
      item.count = 0;
      item.total = 0;
    });
  };

  // Incrementing/Decrementing values in the pack
  const inc = id => {
    let tempPack = [...packState.pack];
    const selectedProduct = tempPack.find(item => item.id === id);
    const index = tempPack.indexOf(selectedProduct);
    const product = tempPack[index];
    product.count += 1;
    product.total = product.count * product.price;
    dispatch({
      type: INCREMENT_ITEM,
      payload: tempPack
    });
    addTotals();
  };

  const dec = id => {
    let tempPack = [...packState.pack];
    const selectedProduct = tempPack.find(item => item.id === id);
    const index = tempPack.indexOf(selectedProduct);
    const product = tempPack[index];
    product.count -= 1;
    if (product.count === 0) {
      removeItemFromPack(id);
    } else {
      product.total = product.count * product.price;
      dispatch({
        type: DECREMENT_ITEM,
        payload: tempPack
      });
      addTotals();
    }
  };
  return {
    addItemToPack,
    removeItemFromPack,
    inc,
    dec,
    addTotals,
    clearPack
  };
};
