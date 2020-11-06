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

export const productLoading = (loading: boolean) => {
  return typedAction("prodcuts/LOADING", loading)
}

// Action creator returning a thunk!
// set loading state
export const loadProducts = () => {
  return (dispatch: Dispatch<AnyAction>, getState: () => RootState) => {
    dispatch(productLoading(true))
    setTimeout(() => {
      // pretend to load an item
      dispatch(
        addProducts([...getState().products.products, ...sampleProducts])
      );
      dispatch(productLoading(false))
    }, 5000);
  };
};

type ProductAction = ReturnType<typeof addProducts | typeof addToCart | typeof productLoading>;
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
    case 'prodcuts/LOADING':
      return {
        ...state,
        loading: action.payload
      }
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
