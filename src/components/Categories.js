import {nanoid} from "nanoid";
import {useState} from "react";
export default function Categories({items}){
    const [activeItem,setActiveItem] = useState(null)

    const selectedItem = index =>{
        setActiveItem(index)
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
}