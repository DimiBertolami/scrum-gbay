import React from "react";
import FormInput from "./components/FormInput";
import Header from "./components/Header";
import Products from "./components/Products/Products";
import Test from "./components/Test";

function App() {
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    fetch("http://localhost:3001/users")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className="app">
      <Header />
      <p>{!data ? "Loading..." : data[0].Email}</p>
      {/*        <form >*/}
      {/*<FormInput/>*/}
      {/*        </form>*/}
      <Products />
      <Test />
    </div>
  );
}

export default App;
