import React from "react";
import { useEffect, useState, useMemo } from "react";
// import styles from "./Products.module.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import ProductCard from "./ProductCard";

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
        <Container>
          <Grid container spacing={3}>
            {filteredProducts.map((product, key) => (
              <Grid item xs={12} md={6} lg={4} key={key}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      ) : (
        <h1>loading</h1>
      )}
    </div>
  );
}

export default Products;
