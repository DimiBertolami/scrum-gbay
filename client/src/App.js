import "./App.css";
import React from "react";
import Header from "./components/Header";
// import Products from "./components/Products/Products";
//import Login from "./components/Login";
import OrderForm from "./components/OrderForm";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import RegistrationForm from "./components/User/RegistrationForm";


function App() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setData(data)
            });
    }, []);


    return (
        <div className="app">
            <Router>
                <Header>
                    <Link to='/'>Login</Link>
                    <Link to='/order'>Order</Link>
                    <Link to='/products'>Products</Link>
                </Header>
                <Routes>
                    <Route path='/' element={<RegistrationForm/>}/>
                    <Route path='/order' element={<OrderForm/>}/>
                    {/*<Route path='/products' element={<Products/>}/>*/}
                    {/*Error page have to be last in Rote*/}
                    {/*<Route path='*' element={<Error/>}/>*/}
                </Routes>
            </Router>
            {/*<p>{!data ? "Loading..." : data[0].Email}</p>*/}
            </div>
            );
        }

export default App;
