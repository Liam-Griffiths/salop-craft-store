import React, {useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import Product from '../Products/Product/Product';
import CatItem from './Category/CatItem';
import useStyles from './styles';
import {commerce} from '../../lib/commerce';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
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

    let tileVal = 4;
    function randomIntFromInterval(min,max)
    {
        return Math.floor(Math.random()*(max-min+1)+min);
    }

    let productsShuffled = [...products];
    productsShuffled = shuffleArray(productsShuffled);

  return (

      <main className={classes.content}>
          {/* Hero unit */}
          <div className={classes.heroContent}>
              <Container maxWidth="sm" className={classes.heroText}>
                  <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                      Bespoke and Custom Jewellery
                  </Typography>
                  <Typography variant="h5" align="center" color="textSecondary" paragraph>
                      Bespoke and custom craft jewellery made by Paula in the heart of Shropshire. Everything is handmade, unique and one of a kind.
                  </Typography>
                  <div className={classes.heroButtons}>
                      <Grid container spacing={2} justify="center">
                          {categories.map((cat) => (
                              <>

                                  <Grid style={{ textDecoration: 'none' }} item component={Link} to={{pathname: `/products/${cat.slug}`}}>
                                      <Button variant="contained" color="primary">
                                          {cat.name}
                                      </Button>
                                  </Grid>

                              </>
                          ))}
                      </Grid>
                  </div>
              </Container>
          </div>
          <Container className={classes.cardGrid} maxWidth="md" >
              {/* End hero unit */}
              <Grid container spacing={4} justify="center">
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
          </Container>
      </main>
  );
};

export default Home;

