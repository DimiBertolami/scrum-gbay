import './App.css';
import React from "react";

function App() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("/api")
            .then((res) => res.json())
            .then((data) => setData(data.message));
    }, []);
    return (
    <div className="app">
        <p>{!data ? "Loading..." : data}</p>
      <h1>Hello world!</h1>
    </div>
  );
}

export default App;
