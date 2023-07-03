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
        access_token: localStorage.access_token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.products, " <<< ini data");
        dispatch(fetchProductSuccess(data.products));
      })
      .catch((error) => console.log(error));
  };
};

// export const fetchFindProducts = () => {
//   let url = baseUrl + "/products";

//   if (query && query.search && query.filter) {
//     url += `?search=${query.search}&filter=${query.filter}`;
//   } else if (query && query.search) {
//     url += `?search=${query.search}`;
//   } else if (query && query.filter) {
//     url += `?filter=${query.filter}`;
//   }

//   return (dispatch) => {
//     return fetch(url, {
//       headers: {
//         access_token: localStorage.access_token,
//       },
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         dispatch(fetchProductSuccess(data));
//       })
//       .catch((error) => console.log(error));
//   };
// };
