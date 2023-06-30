import { baseUrl, PRODUCTS } from "./actionType";

export const fetchProductSuccess = (payload) => {
  return {
    type: PRODUCTS,
    payload,
  };
};

export const fetchProducts = (input) => {
  let url;
  if (input) {
    const { search, filter } = input;
    if (input.filter && !input.search) {
      url = baseUrl + `/product?filter=${filter}`;
    } else if (input.search && !input) {
      url = baseUrl + `/product?search=${search}`;
    } else {
      url = baseUrl + `/product?search=${search}&filter=${filter}`;
    }
  } else {
    url = baseUrl + "/product";
  }

  return (dispatch) => {
    return fetch(url, {
      headers: {
        access_token: localStorage.access_token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "<<<< ini data");
        dispatch(fetchProductSuccess(data));
      })
      .catch((error) => console.log(error));
  };
  //   return async (dispacth, getState) => {
  //     try {
  //       const response = await fetch(baseUrl + "/product", {
  //         headers: {
  //           access_token: localStorage.access_token,
  //         },
  //       });
  //       if (!response.ok) {
  //         console.log(response.text());
  //       }
  //       const data = await response.json();
  //       dispacth(fetchProductSuccess(data));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
};
