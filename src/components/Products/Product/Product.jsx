import React, {useEffect, useState} from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import {commerce} from '../../../lib/commerce';

const Product = ({ product, onAddToCart, cart }) => {
  const classes = useStyles();
  const [isCart, setIsCart] = useState([]);
  const handleAddToCart = () => {
      onAddToCart(product.id, 1);
      setIsCart(true);
  };

    /*useEffect(() => {
        for(const c of cart.lineItems){

        }
    }, []);*/

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={product.media.source} title={product.name} />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            ${product.price.formatted}
          </Typography>
        </div>
        <Typography dangerouslySetInnerHTML={{ __html: product.description }} variant="body2" color="textSecondary" className={classes.desc} component="p" />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
          {
              isCart == false &&
              <IconButton aria-label="Add to Cart" onClick={handleAddToCart}>
                  <AddShoppingCart/>
              </IconButton>
          }
          {
          isCart == true &&
          <Typography gutterBottom variant="h6" component="h3">
              Added to Cart!
          </Typography>
      }
      </CardActions>
    </Card>
  );
};

export default Product;

