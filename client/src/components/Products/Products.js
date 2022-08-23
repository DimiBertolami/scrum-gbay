import React from "react";
import { useEffect, useState } from "react";
import styles from "./Products.module.css";

function Products() {
  // const i = 1;
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, []);

  // making the src easier
  function imagePath(imgPath) {
    return "/img/" + imgPath;
  }

  return (
    <div>
      {data ? (
        data.map((product, key) => (
          <div className={styles.productContainer} key={key}>
            <h4>{product.Title}</h4>
            {/* 👇 calls the 'imagePath' function with the IMG_SRC as a prop 👇 */}
            <img src={imagePath(product.IMG_SRC)} alt={product.IMG_ALT} />
            <p>{product.Description}</p>
            <p>{product.Price}</p>
            <p>{product.Category}</p>
          </div>
        ))
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default Products;
