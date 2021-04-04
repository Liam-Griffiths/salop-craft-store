import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';

import logo from '../../assets/logo2.png';
import useStyles from './styles';

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <Typography className={classes.topMenu} component={Link} to="/products" variant="h6" className={classes.title} color="inherit">
          Jewellery
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography className={classes.topMenu} component={Link} to="/" variant="h6" className={classes.title} color="inherit">
          Custom
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography component={Link} to="/cart" variant="h6" className={classes.title} color="inherit">
          Basket <IconButton component={Link} to="/cart" aria-label="Show cart items"  color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        </Typography>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <AppBar position="fixed" className={classes.appBar} color="inherit">
        <Toolbar>

          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="Salop Craft" height="18%" className={classes.image} />
          </Typography>
          <div className={`${classes.grow} ${classes.topMenuContainer}`} />
          {location.pathname && (
              <>
                <div className={`${classes.button} ${classes.topMenu}`}>
                  <Typography className={classes.topMenu} component={Link} to="/products" variant="h6" className={classes.title} color="inherit">
                    Jewellery
                  </Typography>
                </div>
              <div className={`${classes.button} ${classes.topMenu}`}>
                <Typography className={classes.topMenu} component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                  Custom
                </Typography>
              </div>
          <div className={`${classes.button} ${classes.topMenu}`}>
            <Typography component={Link} to="/cart" variant="h6" className={classes.title} color="inherit">
              Basket <IconButton component={Link} to="/cart" aria-label="Show cart items"  color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
            </Typography>
              </div>
          </>
          )}
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
