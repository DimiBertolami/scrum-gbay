import React from "react";
import { useEffect, useState } from "react";
// import styles from "./Products.module.css";

function Products() {
    const i = 4;
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

    return (
        <div>
            <p>Products</p>
            {!data ? "Loading Title...." : <h4>{data[i].Title}</h4>}
            {!data ? (
                "Loading Image...."
            ) : (
                <img src={imagePath(data[i].IMG_SRC)} alt={data[i].IMG_ALT} />
            )}
            {!data ? "Loading Description...." : <p>{data[i].Description}</p>}
            {!data ? "Loading Price...." : <p>{data[i].Price}</p>}
            {!data ? "Loading Category...." : <p>{data[i].Category}</p>}
        </div>
    );
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
export default Products;