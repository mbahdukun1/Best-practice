import {baseUrl, PRODUCTS} from "./actionType"

export const fetchProductSuccess = (payload) => {
    return {
        type: PRODUCTS,
        payload
    }
}

export const fetchProducts = () => {
    return async(dispacth, getState) => {
        try {
            const response = await fetch(`${baseUrl}/product`)
            if (!response.ok) {
                console.log(response.text());
            }
            const data = await response.json()
            dispacth(fetchProductSuccess(data))
        } catch (error) {
            console.log(error);
        }
    }
}