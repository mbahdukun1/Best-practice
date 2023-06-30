import { baseUrl } from "./actionType";

export const register = (input) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.getItem("access_token"),
        },
        body: JSON.stringify(input),
      });
      const res = await response.json();
      if (!response.ok) {
        throw { message: res.message };
      }
      return res;
    } catch (error) {
      throw error;
    }
  };
};

export const login = (input) => {
  return async (dispatch, getState) => {
    try {
      const response = await fetch(`${baseUrl}/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(input),
      });
      const result = await response.json();
      console.log(result);
      if (!response.ok) {
        throw {
          message: result.message,
        };
      }
      localStorage.setItem("access_token", result.access_token);
      return result;
    } catch (error) {
      throw error;
    }
  };
};
