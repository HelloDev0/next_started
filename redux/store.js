import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk"
import {cartReducer} from "./reducer/cartReducer"


const reducer = combineReducers({
    cart: cartReducer
})
const middleware=[thunk]

// const initialUser=localStorage.getItem('userID')
// ?JSON.parse(localStorage.getItem('userID')):"";
const INITIAL_STATE = {
    cart: {
        cartItems: [],
        searchItems: [],
        user:""
    }
}


const store =createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;