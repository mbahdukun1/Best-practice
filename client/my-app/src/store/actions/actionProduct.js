import { baseUrl, PRODUCTS } from "./actionType";

export const fetchProductSuccess = (payload) => {
  return {
    type: PRODUCTS,
    payload,
  };
};

export const fetchProducts = (query) => {
  let url = baseUrl + "/product";
  if (query && query.search && query.filter) {
    url += `?search=${query.search}&filter=${query.filter}`;
  } else if (query && query.search) {
    url += `?search=${query.search}`;
  } else if (query && query.filter) {
    url += `?filter=${query.filter}`;
  } else {
    url;
  }

  return (dispatch) => {
    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.products, " <<< ini data");
        dispatch(fetchProductSuccess(data.products));
      })
      .catch((error) => console.log(error));
  };
};

export const addProduct = (input) => {
  return (dispatch) => {
    return fetch(baseUrl + "/product", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.access_token,
      },
      body: JSON.stringify(input),
    }).then((response) => {
      if (response.ok) {
        response.json();
      } else {
        return response.text().then((text) => {
          throw new Error(text);
        });
      }
    });
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}/product/${id}`, {
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
      dispatch(fetchProducts());
    } catch (error) {
      throw error;
    }
  };
};
