import React from 'react';
import { useCart } from '../context/Cartcontext';
import { Button, List, ListItem, ListItemText, Typography } from '@mui/material';

function Cart() {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div className="cart">
      <Typography variant="h6">Carrito</Typography>
      {cart.length === 0 ? (
        <Typography variant="body1">El carrito está vacío.</Typography>
      ) : (
        <List>
          {cart.map((item, index) => (
            <ListItem key={index}>
              <ListItemText primary={`${item.name} - $${item.price}`} />
              <Button variant="contained" color="secondary" onClick={() => removeFromCart(item.id)}>
                Eliminar
              </Button>
            </ListItem>
          ))}
        </List>
      )}
      {cart.length > 0 && (
        <Button variant="contained" color="primary" onClick={clearCart}>
          Vaciar carrito
        </Button>
      )}
    </div>
  );
}

export default Cart;
