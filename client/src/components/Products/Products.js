import React from "react";
import { useEffect, useState, useMemo } from "react";
import styles from "./Products.module.css";

function Products() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("http://localhost:3001/products")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const [products, setProducts] = useState(null);

  const [selectedCategory, setSelectedCategory] = useState();

  useEffect(() => {
    setProducts(data);
  }, [data]);

  // 👇 modified from: https://contactmentor.com/filter-list-by-category-react-js/
  function getFiltered() {
    if (!selectedCategory) {
      return products;
    }
    return products.filter((item) => item.Category === selectedCategory);
  }

  var filteredProducts = useMemo(getFiltered, [selectedCategory, products]);

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // making the src easier
  function imagePath(imgPath) {
    return "/img/" + imgPath;
  }

  return (
    <div>
      {/* 👇 'Category' dropdown 👇 */}
      <div>
        <select
          name="category-list"
          id="category-list"
          onChange={handleCategoryChange}
        >
          <option value="">--Select Category--</option>
          <option value="Marvel">Marvel</option>
          <option value="DC">DC</option>
          <option value="Nickelodeon">Nickelodeon</option>
        </select>
      </div>
      {filteredProducts ? (
        filteredProducts.map((product, key) => (
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
