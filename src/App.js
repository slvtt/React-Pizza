import './App.css';

import {Header} from './components';
import {Route} from "react-router";
import {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";

import axios from "axios";
import {Cart, Home} from "./pages";
import {setPizzas} from "./redux/actions/pizzas";

function App() {

    const dispatch = useDispatch();

    const initPizzas = useCallback(()=>{
        axios.get('http://localhost:3001/pizzas')
            .then(res => {
                const arrayPizzas = res.data;
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
               <Route exact path='/' component={Home} />} />
               <Route exact path='/cart' component={Cart} />
           </div>
       </div>
   </>
  );
}

export default App;
