import React, {useCallback, useEffect} from 'react';
import {Categories, SortPopup, PizzaBlock, Loading} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid";

import {setCategory,setSortBy} from "../redux/actions/filters";
import {fetchPizzas} from "../redux/actions/pizzas";
import {addPizzaToCart} from "../redux/actions/cart";

const categories = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
const sortItems = [
    {name:'популярности',type:'popular',order:'desc'},
    {name:'цене',type: 'price',order:'desc'},
    {name:'алфавиту',type:'name',order:'asc'}
];

function Home() {

    const items = useSelector(({pizzas,filters})=> pizzas.items);
    const isLoaded = useSelector(({pizzas}) =>pizzas.isLoaded);
    const cartItems = useSelector(({cart})=> cart.items)
    const {category,sortBy} = useSelector(({filters})=> filters)
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchPizzas(sortBy,category))
    },[category,sortBy,dispatch]);

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    },[dispatch])

    const onSelectSortType = useCallback(type => {
        dispatch(setSortBy(type))
    },[dispatch])

    const handleAddPizzaToCart = (obj) => {
      dispatch(addPizzaToCart(obj))
    }

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={category}
                    items={categories}
                    onClickCategory = {onSelectCategory}
                />
                <SortPopup
                    activeSortType={sortBy.type}
                    items={sortItems}
                    onClickSortType={onSelectSortType}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                     isLoaded
                         ? items.map(item => <PizzaBlock
                        key={nanoid(4)}
                        addedCount={cartItems[item.id] && cartItems[item.id].items.length}
                        name={item.name}
                        onClickAddPizza={handleAddPizzaToCart}
                        id={item.id}
                        image={item.imageUrl}
                        price={item.price}
                        types={item.types}
                        sizes={item.sizes}
                    />)
                         : Array(12).fill(0).map((_) => <Loading key={nanoid(4)} />)
                }
            </div>
        </div>
    );
}

export default Home;