import React, { useState, useEffect } from 'react';
import {CssBaseline, Typography} from '@material-ui/core';
import { BrowserRouter as Router, Switch, Route, useParams } from 'react-router-dom';

import { Navbar, Products, Cart, Checkout, Home } from './components';
import { commerce } from './lib/commerce';

import Background from './assets/bg.png';

const App = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cart, setCart] = useState({});
  const [order, setOrder] = useState({});
  const [errorMessage, setErrorMessage] = useState('');

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  const fetchCategories = async () => {
    const { data } = await commerce.categories.list();

    setCategories(data);
  };

  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);

    setCart(item.cart);
  };

  const handleUpdateCartQty = async (lineItemId, quantity) => {
    const response = await commerce.cart.update(lineItemId, { quantity });

    setCart(response.cart);
  };

  const handleRemoveFromCart = async (lineItemId) => {
    const response = await commerce.cart.remove(lineItemId);

    setCart(response.cart);
  };

  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();

    setCart(response.cart);
  };

  const refreshCart = async () => {
    const newCart = await commerce.cart.refresh();

    setCart(newCart);
  };

  const handleCaptureCheckout = async (checkoutTokenId, newOrder) => {
    try {
      const incomingOrder = await commerce.checkout.capture(checkoutTokenId, newOrder);

      setOrder(incomingOrder);

      refreshCart();
    } catch (error) {
      setErrorMessage(error.data.error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
    fetchCategories();
    fetchCart();
  }, []);

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  return (
    <Router>
      <div style={{ display: 'flex', paddingTop: '8%', backgroundImage: `url(${Background})`}}>
        <CssBaseline />
        <Navbar totalItems={cart.total_items} handleDrawerToggle={handleDrawerToggle} />
        <Switch>
          <Route exact path="/">
            <Home products={products} categories={categories} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/products">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route path="/products/:cat">
            <Products products={products} onAddToCart={handleAddToCart} handleUpdateCartQty />
          </Route>
          <Route exact path="/cart">
            <Cart cart={cart} onUpdateCartQty={handleUpdateCartQty} onRemoveFromCart={handleRemoveFromCart} onEmptyCart={handleEmptyCart} />
          </Route>
          <Route path="/checkout" exact>
            <Checkout cart={cart} order={order} onCaptureCheckout={handleCaptureCheckout} error={errorMessage} />
          </Route>
        </Switch>
      </div>
      <Typography style={{marginBottom: 50}} variant="body2" color="textSecondary" align="center">
        {'Copyright ?? '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>

    </Router>
  );
};

export default App;
