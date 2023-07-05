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
      const response = await fetch(`${baseUrl}/category`, {
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });
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

export const addCategory = (input) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/category`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(input),
      });
      if (!response.ok) {
        const errMsg = await response.json();
        throw new Error(errMsg.message);
      }
      return "Success add category";
    } catch (error) {
      throw error;
    }
  };
};

export const editCategory = (input, id) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/category/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify(input),
      });
      const res = await response.json();
      if (!response.ok) {
        throw { message: res.message };
      }
      return "Success Edit Category";
    } catch (error) {
      throw error;
    }
  };
};

export const deleteCategory = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/category/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
      });
      const res = await response.json();
      console.log(res);
      if (!response.ok) {
        throw { message: "Failed To delete" };
      }
      dispatch(fetchCategories());
    } catch (error) {
      throw error;
    }
  };
};
