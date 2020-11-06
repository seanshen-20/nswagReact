import { RootState } from "../redux";
import { createSelector } from "reselect";

type CheckoutItem = CartItem & Product;

export const getCartItems1 = (state: RootState): CheckoutItem[] => {
  console.log('aaa')
  return state.products.cart.reduce((acc, el) => {
    const associatedProduct = state.products.products.find(
      product => product.id === el.id
    ) as Product;
    acc.push({ ...el, ...associatedProduct });
    return acc;
  }, [] as CheckoutItem[]);
};

// interesting make get cart item in cache 
export const getCartItems = createSelector(getCartItems1, a=>a)

export const getTotalPrice = createSelector(getCartItems, cartItems => {
  console.log('price')
  return cartItems.reduce((acc, el) => acc + el.price * el.quantity, 0);
});