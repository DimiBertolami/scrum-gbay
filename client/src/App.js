import './App.css';
import React from 'react';
import OrderForm from "./components/OrderForm";
import Header from "./components/Header";
// import Products from "./components/Products";


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
            {/*<Header/>*/}
            {/*<p>{!data ? "Loading..." : data[0].Email}</p>*/}

            <OrderForm/>

            {/*<Products/>*/}
        </div>
  );
}

export default App;
