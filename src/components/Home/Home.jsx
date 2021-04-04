import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';

import Product from '../Products/Product/Product';
import CatItem from './Category/CatItem';
import useStyles from './styles';
import {commerce} from '../../lib/commerce';
import {Typography, Paper} from '@material-ui/core';
import {Link} from 'react-router-dom';

const Home = ({ products, categories, onAddToCart }) => {
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

    function shuffleArray(array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    let productsShuffled = [...products];
    productsShuffled = shuffleArray(productsShuffled);

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <Grid container component="main" className={classes.root}>
            <Grid item xs={false} sm={4} md={4} className={classes.image} />
            <Grid item xs={12} sm={8} md={8} elevation={6} square>
                <Grid container justify="center" spacing={4}>
                    {categories.map((cat) => (
                        <>

                            <Grid key={cat.id} item xs={6} sm={4} md={3} lg={3}>
                                <CatItem category={cat} />
                            </Grid>

                        </>
                    ))}

                </Grid>
            </Grid>
        </Grid>
        <Grid className={classes.productsList} container justify="center" spacing={4}>
            {productsShuffled.slice(0, 8).map((product) => (
                <>{
                    product.quantity > 0 &&

                    <Grid key={product.id} item xs={6} sm={4} md={3} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} cart/>
                    </Grid>

                }</>
            ))}

                <Typography className={classes.seeAll} component={Link} to="/products" variant="h4" className={classes.title} color="inherit">
                    See All Jewellery
                </Typography>

        </Grid>

    </main>
  );
};

export default Home;

