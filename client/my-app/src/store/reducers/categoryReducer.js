import { CATEGORIES, CATEGORIES_DETAIL } from "../actions/actionType";

const initialState = {
  categories: [],
  categoriesDetail: {},
};

export default function categoriesReducer(state = initialState, action) {
  const { type, payload } = action;
  let newState = {};
  switch (type) {
    case CATEGORIES:
      newState = {
        ...state,
        categories: payload,
      };
      return newState;

    case CATEGORIES_DETAIL:
      newState = {
        ...state,
        categoriesDetail: payload,
      };
      return newState;
    default:
      return state;
  }
}
