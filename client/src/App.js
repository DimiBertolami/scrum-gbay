import './App.css';
import React from 'react';
import OrderForm from "./components/OrderForm";
import Header from "./components/Header";
import Products from "./components/Products/Products";
import Login from "./components/Login";
// import Test from "./components/Test";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";



function App() {

    return (
        <div className="app">
            <Router>
               <Header>
                   <Link to='/'>Login</Link>
                   <Link to='/order'>Order</Link>
                   <Link to='/products'>Products</Link>
               </Header>
                <Routes>
                    <Route path='/' element={<Login/>}/>
                    <Route path='/order' element={<OrderForm/>}/>
                    <Route path='/products' element={<Products/>}/>
                    {/*Error page have to be last in Rote*/}
                    {/*<Route path='*' element={<Error/>}/>*/}
                </Routes>
            </Router>

            {/*<Test/>*/}
            {/*<p>{!data ? "Loading..." : data[0].Email}</p>*/}
        </div>
    );
}

export default App;
