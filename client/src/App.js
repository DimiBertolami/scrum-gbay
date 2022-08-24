import './App.css';
import React from "react";
import Login from "./components/User/Login";
import Products from "./components/User/Products";
import React, { useState} from "react";

// import FormInput from "./components/FormInput";
import Header from "./components/Header";

function App() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3001/users")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data)
            });
    }, []);


    return (

    <div className="app">
        <p>{!data ? "Loading..." : data[0].FirstName}</p>
      <h1>Hello world!</h1>
        <Products />
        <Login />
    </div>
        <div className="app">

            {/*<p>{!data ? "Loading..." : data[0].Email}</p>*/}
            {/*        <form >*/}
            {/*<FormInput/>*/}
            {/*        </form>*/}
            <Header/>

        </div>
  );
}

export default App;
