import React, {useEffect, useState} from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import {commerce} from '../../../lib/commerce';
import {Link} from 'react-router-dom';

const CatItem = ({ category }) => {
  const classes = useStyles();

    /*useEffect(() => {
        for(const c of cart.lineItems){

        }
    }, []);*/

    let url = `/products/${category.slug}`;

  return (
    <Card className={classes.root}>
      <CardContent>
        <div className={`${classes.cardContent} ${classes.title}`}>
          <Link to={{pathname: url}} >
            {category.name}
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default CatItem;

