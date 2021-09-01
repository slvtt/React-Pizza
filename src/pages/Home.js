import React, {useCallback} from 'react';
import {Categories, SortPopup,PizzaBlock} from "../components";
import {useDispatch, useSelector} from "react-redux";
import {nanoid} from "nanoid";

import {setCategory} from "../redux/actions/filters";

const categories = ['Мясные','Вегетарианская','Гриль','Острые','Закрытые'];
const sortItems = [{name:'популярности',type:'popular'}, {name:'цене',type: 'price'}, {name:'алфавиту',type:'alphabet'}]

function Home() {

    const dispatch = useDispatch();
    const items = useSelector(({pizzas,filters})=> pizzas.items);

    const onSelectCategory = useCallback(index => {
        dispatch(setCategory(index))
    },[dispatch])

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={categories}
                    onClickItem = {onSelectCategory}
                />
                <SortPopup items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {
                    items && items.map(item => <PizzaBlock
                        key={nanoid(4)}
                        name={item.name}
                        image={item.imageUrl}
                        price={item.price}
                        types={item.types}
                        sizes={item.sizes}
                    />)
                }
            </div>
        </div>
    );
}

export default Home;