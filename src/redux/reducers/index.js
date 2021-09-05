import filtersReducers from './filters';
import pizzasReducer from "./pizzas";
import cart from "./cart";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    filters:filtersReducers,
    pizzas:pizzasReducer,
    cart:cart
})

export default rootReducer;