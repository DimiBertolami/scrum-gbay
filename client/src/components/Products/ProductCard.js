import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Chip,
  IconButton,
  Typography,
} from "@material-ui/core";
import { ShoppingCartOutlined } from "@material-ui/icons";

export default function ProductCard({ product }) {
  // add to cart listener
  function addToCart(e) {
    console.log(`You added ${product.Title} to the cart.`);
    e.preventDefault();
  }

  function setSelectedCategory(e) {
    console.log(`You want to see ${product.Category} only.`);
    e.preventDefault();
  }

  return (
    <div>
      <Card elevation={3}>
        <CardHeader
          action={
            <IconButton onClick={addToCart}>
              <ShoppingCartOutlined />
            </IconButton>
          }
          title={product.Title}
          subheader={`\u20AC ${product.Price}`}
        />
        <CardMedia
          component="img"
          image={`/img/${product.IMG_SRC}`}
          alt={product.IMG_ALT}
          height="200"
          title={product.IMG_ALT}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {product.Description}
          </Typography>
          <Chip label={product.Category} onClick={setSelectedCategory} />
        </CardContent>
      </Card>
    </div>
  );
}
