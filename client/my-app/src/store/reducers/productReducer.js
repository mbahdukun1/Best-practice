import { PRODUCTS, PRODUCTS_DETAIL } from "../actions/actionType";

const initialState = {
  products: [],
  productDetail: {},
};

export default function productsReducer(state = initialState, action) {
  const { type, payload } = action;
  let newState = {};
  switch (type) {
    case PRODUCTS:
      newState = {
        ...state,
        products: payload,
      };
      return newState;
    case PRODUCTS_DETAIL:
      newState = {
        ...state,
        productDetail: payload,
      };
      return newState;
    default:
      return state;
  }
}
