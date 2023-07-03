import { baseUrl, CATEGORIES } from "./actionType";

export const fetchCategorySuccess = (payload) => {
  return {
    type: CATEGORIES,
    payload,
  };
};

export const fetchCategories = () => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/category`);
      if (!response.ok) {
        console.log(response.text());
      }
      const data = await response.json();
      //   console.log(data, "<<<< ini data categories");
      dispatch(fetchCategorySuccess(data));
    } catch (error) {
      console.log(error);
    }
  };
};
