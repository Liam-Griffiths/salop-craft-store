import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';

import Product from './Product/Product';
import useStyles from './styles';
import { useParams } from "react-router";
import {commerce} from '../../lib/commerce';
import {Typography} from '@material-ui/core';


const Products = ({ products, onAddToCart }) => {
    let { cat } = useParams();
  const classes = useStyles();

    const [cart, setCart] = useState([]);
    const [catProducts, setCatProducts] = useState([]);
    const [catData, setCatData] = useState([]);
    const fetchCart = async () => {
        const res = await commerce.cart.retrieve();

        setCart(res);
    };

    const fetchProductsByCat = async (cat) => {
        try {
            const params = {category_slug: [cat]};
            const {data} = await commerce.products.list(params);
            const category = await commerce.categories.retrieve(cat, {type: 'slug'});

            setCatProducts(data);
            setCatData(category);
        }
        catch{
            return;
        }
    };

    useEffect(() => {
        if(cat) fetchProductsByCat(cat);
        fetchCart();
    }, []);

  if (!products.length) return <p>Loading...</p>;
    let productsCopy = [...products];
    if(cat && catProducts) productsCopy = catProducts;

    let pageTitle = "All Jewellery";
    if(cat && catProducts && catData) pageTitle = catData.name;

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
        <Typography style={{paddingBottom: 10}} variant="h5" component="h2">
            {pageTitle}
        </Typography>
      <Grid container justify="center" spacing={3}>
        {productsCopy.map((product) => (
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

