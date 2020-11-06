import { Dispatch } from "react";
import { AnyAction } from "redux";
import { RootState } from "..";
import { sampleProducts } from "../../data/sampleProducts";
import { typedAction } from "./helper";

const initialState: ProductState = {
  products: [],
  loading: false,
  cart: [],
};

export const addProducts = (products: Product[]) => {
  return typedAction("products/ADD_PRODUCTS", products);
};
export const addToCart = (product: Product, quantity: number) => {
  return typedAction("products/ADD_TO_CART", { product, quantity });
};

// Action creator returning a thunk!
export const loadProducts = () => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    setTimeout(() => {
      // pretend to load an item
      dispatch(
        addProducts([...getState().products.products, ...sampleProducts])
        // addProducts([
        //   {
        //     id: 1,
        //     name: "cool headphones",
        //     price: 4999,
        //     img: "https://placeimg.com/640/480/tech/5",
        //   },
        // ])
      );
    }, 5000);
  };
};

type ProductAction = ReturnType<typeof addProducts | typeof addToCart>;
export function productsReducer(
  state = initialState,
  action: ProductAction
): ProductState {
  switch (action.type) {
    case "products/ADD_PRODUCTS":
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case "products/ADD_TO_CART":
      return {
        ...state,
        cart: [
          ...state.cart,
          {
            id: action.payload.product.id,
            quantity: action.payload.quantity,
          },
        ],
      };
    default:
      return state;
  }
}
