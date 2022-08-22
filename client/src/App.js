import "./App.css";
import React from "react";
import Products from "./components/Products/Products";
// import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <p>app component working</p>
      {/* <Header /> */}
      <Products />
    </div>
  );
}

export default App;
