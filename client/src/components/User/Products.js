import React from "react";
import styles from "./Products.module.css";

function Products() {
    const [data, setData] = React.useState(null);
    React.useEffect(() => {
        fetch("http://localhost:3001/products")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setData(data);
            });
    }, []);
    return (
        <div>
            <p>Products Products Products Products Products Products</p>
            <p>{!data ? "Loading..." : data[0].Title}</p>
            <p>{!data ? "Loading..." : data[0].Description}</p>
            <p>{!data ? "Loading..." : data[0].Price}</p>
            <p>{!data ? "Loading..." : data[0].Category}</p>
        </div>
        // <div className="app">
        //   <h1>Hello world!</h1>
        // </div>
    );
}
export default Products;
//////
// );

// const [data, setData] = React.useState(null);
//   React.useEffect(() => {
//     fetch("http://localhost:3001/products")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         setData(data);
//       });
//   }, []);
// // return (
//   <h1>Hello world!</h1>
//   {/* <p>{!data ? "Loading..." : data}</p> */}
// </div>
// );