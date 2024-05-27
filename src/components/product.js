import React from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';

function Product({ product, addToCart }) {
  return (
    <Card variant="outlined" sx={{ margin: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {product.name}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          ${product.price}
        </Typography>
        <Button variant="contained" color="primary" onClick={() => addToCart(product)}>
          Añadir al carrito
        </Button>
      </CardContent>
    </Card>
  );
}

export default Product;
