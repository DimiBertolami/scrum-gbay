import './App.css';
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

            {/*<p>{!data ? "Loading..." : data[0].Email}</p>*/}
            {/*        <form >*/}
            {/*<FormInput/>*/}
            {/*        </form>*/}
            <Header/>

        </div>



  );
}

export default App;
