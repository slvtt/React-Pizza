import filtersReducers from './filters';
import pizzasReducer from "./pizzas";
import {combineReducers} from "redux";

const rootReducer = combineReducers({
    filters:filtersReducers,
    pizzas:pizzasReducer
})

export default rootReducer;