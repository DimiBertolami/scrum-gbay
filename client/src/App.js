import './App.css';
import React from "react";
import FormInput from "./components/FormInput";

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
        {/*<p>{!data ? "Loading..." : data[0].FirstName}</p>*/}

        <form>
            <FormInput placeholder="First Name"/>
            <FormInput placeholder="Second Name"/>
            <FormInput placeholder="Email"/>
            <FormInput placeholder="Street"/>
        </form>

    </div>
  );
}

export default App;
