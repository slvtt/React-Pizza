import './App.css';

import {Header} from './components';
import {Route} from "react-router";
import {useCallback, useEffect} from "react";
import {useSelector,useDispatch} from "react-redux";

import axios from "axios";
import {Cart, Home} from "./pages";
import {setPizzas} from "./redux/actions/pizzas";

function App() {

    const dispatch = useDispatch();
    const {items} = useSelector(({pizzas,filters})=>{
        return{
            items:pizzas.items,
            sortBy:filters.sortBy
        }
    })

    const initPizzas = useCallback(()=>{
        axios.get('http://localhost:3000/db.json')
            .then(res => {
                const arrayPizzas = res.data.pizzas;
                dispatch(setPizzas(arrayPizzas))
            })
    },[dispatch]);

    useEffect(()=>{
        initPizzas()
    },[initPizzas]);

  return (
   <>
       <div className="wrapper">
           <Header />
           <div className="content">
               <Route exact path='/' render={()=> <Home items={items} />} />
               <Route exact path='/cart' component={Cart} />
           </div>
       </div>
   </>
  );
}

export default App;
