import {nanoid} from "nanoid";
import React from "react";
import {useState} from "react";

const Categories = React.memo(function Categories({items,onClickItem}){
    const [activeItem,setActiveItem] = useState(null)

    const selectedItem = index =>{
        setActiveItem(index);
        onClickItem(index);
    }
    return (
        <div>
            <div className="categories">
                <ul>
                    <li
                        className={activeItem === null ? 'active': ''}
                        onClick={()=>selectedItem(null)}>Все</li>

                    {items && items.map((item,index) =>(
                        <li
                            className={activeItem === index ? 'active': ''}
                            onClick={() => selectedItem(index)}
                            key={nanoid(4)}>
                            {item}
                        </li>
                    ))
                    }
                </ul>
            </div>
        </div>
    )
})

export default Categories
