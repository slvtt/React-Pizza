import axios from "axios";

export const fetchPizzas = (sortBy,category) => (dispatch) => {
    dispatch(setLoaded(false))
    axios.get(`http://localhost:3001/pizzas?${category !== null?`category=${category}`:''}&_sort=${sortBy.type}&_order=${sortBy.order}`)
        .then(res => {
            const arrayPizzas = res.data;
            dispatch(setPizzas(arrayPizzas))
        })
};

export const setPizzas = (items) =>{
    return {
        type:'SET_PIZZAS',
        payload:items,
    }
}

export const setLoaded = (payload) =>{
    return{
        type:'SET_LOADED',
        payload
    }
}

