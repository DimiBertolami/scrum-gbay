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

  const img_path = "/img/" ;
  // console.log(img_path + data[1].IMG_SRC);
  const img_path_full = (img_path + data[7].IMG_SRC);
  console.log(img_path_full);
  // console.log({data[1].IMG_SRC});

  return (
    <div>
      <p>Products</p>
      <h4>{!data ? "Loading..." : data[7].Title}</h4>
      <img src={img_path_full} alt={data[7].IMG_ALT} />
      <p>{!data ? "Loading..." : data[7].Description}</p>
      <p>{!data ? "Loading..." : data[7].Price}</p>
      <p>{!data ? "Loading..." : data[7].Category}</p>
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
