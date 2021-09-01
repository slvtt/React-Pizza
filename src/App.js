import './App.css';
import {Header} from './components'
import {Cart, Home} from "./pages";
import {Route} from "react-router";

import {useEffect} from "react";
import axios from "axios";
import {setPizzas} from "./redux/actions/pizzas";

function App() {

    useEffect(()=>{
        axios.get('http://localhost:3000/db.json')
            .then(res => {
                const arrayPizzas = res.data.pizzas;
                console.log(arrayPizzas)
            })
    },[])
  return (
   <>
       <div className="wrapper">
           <Header />
           <div className="content">
               <Route exact path='/' render={()=> <Home items={[]} />} />
               <Route exact path='/cart' component={Cart} />
           </div>
       </div>
   </>
  );
}

export default App;
