import * as actionTypes from "../constants/cartConstant";

export const userLogin = (User) => (dispatch) => {
    dispatch({
        type: actionTypes.LOGIN,
        payload: User
    })
}
export const userLogout = () => (dispatch) => {
    dispatch({
        type: actionTypes.LOGOUT
    })
}
export const addToCart = (p) => async (dispatch, getState) => {

    console.log("data in the Action", p)

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            // userdata
            id: p.id,
            title: p.title,
            des: p.desc,
            img: p.img,
            price: p.price,

        },
    });

};
export const removeFromCart = (id) => (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id,
    });
}

export const addToSearch = (data) => async (dispatch, getState) => {

    console.log("data in the Action", data)
    dispatch({
        type: actionTypes.ADD_TO_SEARCH,
        payload: {
            data
        },
    });

};

export const cartReset = () => (dispatch) => {
    dispatch({
        type: actionTypes.CART_RESET,

    })
}
export const cartEmpty = () => (dispatch) => {
    dispatch({
        type: actionTypes.EMPTY_CART,

    })
}
