import React from "react";
import { useEffect, useState } from "react";
// import styles from "./Products.module.css";

function Products() {
  const i = 1;
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  // making the src easier
  function imagePath(imgPath) {
    return "/img/" + imgPath;
  }

  if (!data) {
    return (
      <div>
        <h1>Loading....</h1>{" "}
        {/* 👈 replace this with a spinny-loader component?? example: https://mui.com/material-ui/react-progress/ */}
      </div>
    );
  }
  return (
    <div>
      <p>Products</p>
      <h4>{data[i].Title}</h4>
      {/* 👇 calls the 'imagePath' function with the IMG_SRC as a prop 👇 */}
      <img src={imagePath(data[i].IMG_SRC)} alt={data[i].IMG_ALT} />
      <p>{data[i].Description}</p>
      <p>{data[i].Price}</p>
      <p>{data[i].Category}</p>
    </div>
  );

  // // old return statment needs to be an 'if'
  // return (
  //   <div>
  //     <p>Products</p>
  //     {!data ? "Loading Title...." : <h4>{data[i].Title}</h4>}
  //     {!data ? (
  //       "Loading Image...."
  //     ) : (
  //       // 👇 calls the 'imagePath' function with the IMG_SRC as a prop 👇
  //       <img src={imagePath(data[i].IMG_SRC)} alt={data[i].IMG_ALT} />
  //     )}
  //     {!data ? "Loading Description...." : <p>{data[i].Description}</p>}
  //     {!data ? "Loading Price...." : <p>{data[i].Price}</p>}
  //     {!data ? "Loading Category...." : <p>{data[i].Category}</p>}
  //   </div>
  // );
}
// // This is just to make sure it's working when needed
// //
// function Products() {
//   return (
//     <div>tessst - client\src\components\Products\Products.js</div>
//   )
// }
// //
// // End of test

// // //
//
// return (
//   <div>
//     <p>Products</p>
//     {!data ? "Loading Title...." : <h4>{data[i].Title}</h4>}
//     {!data ? (
//       "Loading Image...."
//     ) : (
//       <img src={imagePath(data[i].IMG_SRC)} alt={data[i].IMG_ALT} />
//     )}
//     {!data ? "Loading Description...." : <p>{data[i].Description}</p>}
//     {!data ? "Loading Price...." : <p>{data[i].Price}</p>}
//     {!data ? "Loading Category...." : <p>{data[i].Category}</p>}
//   </div>
// );
export default Products;
