import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import {commerce} from '../../lib/commerce';

const Products = ({ products, onAddToCart }) => {
  const classes = useStyles();

    const [cart, setCart] = useState([]);
    const fetchCart = async () => {
        const res = await commerce.cart.retrieve();

        setCart(res);

        console.log(JSON.stringify(res));
    };

    useEffect(() => {
        fetchCart();
    }, []);

  if (!products.length) return <p>Loading...</p>;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={3}>
        {products.map((product) => (
            <>{
                product.quantity > 0 &&

                    <Grid key={product.id} item xs={6} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} cart/>
                    </Grid>

            }</>
        ))}
      </Grid>
    </main>
  );
};

export default Products;

