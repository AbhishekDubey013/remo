import { ADD_TO_CART, EMPTY_CART, REMOVE_FROM_CART, ADD_Q } from "./constant"

export const addToCart = (data) => {
        return {
        type: ADD_TO_CART,
        data
    }
}

export const removeToCart = (data) => {
        return {
        type: REMOVE_FROM_CART,
        data
    }
}

export const emptyCart = () => {
        return {
        type: EMPTY_CART,
    }
}

export const add_q = (data) => {
    return {
    type: ADD_Q,
    data
}
}

//Here we simply define type of action and its payload to be further used in reducer