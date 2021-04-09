import React, { useState } from 'react';
import {
  Box,
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardHeader,
  CardMedia,
  CardContent,
  IconButton
} from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import {
  Link,
} from "react-router-dom";


import useStyles from './PopularItemsStyles';






const PopularItems = () => {
  const classes = useStyles();

  // postItem for AddToCart Button
  const postItem = ( itemId ) => {
    fetch('/api/addCart', { 
      method: 'POST', 
      body: JSON.stringify({ "id": itemId }),
      headers: { 'Content-Type': 'application/json' }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('product addCart successful: ', data);
      })
      .catch((err) => console.log('There was an issue adding to cart ', err));
  } 

  // Fetch on button click
  const handleAddCartClick = (id) => {
    return postItem(id);
  }

  return (
    <div>
      {/* -- POPULAR ITEMS SECTION ----------------------------------------------- */}
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.popularItems}>
          <Typography variant="h5">
            Popular Items
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <CardHeader
              title="Breathable Bandana With PM2.5 Filters"
              className={classes.popularCardHeader}
            />
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://fetchppe.online/u_file/2004/products/30/e733989eff.jpg.640x640.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Link>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $15.99
                </Typography>
                <IconButton 
                  aria-label="share"
                  // Title="606d3ad382f8173e94b23733" 
                  onClick={() => handleAddCartClick("606d3ad382f8173e94b23733")}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <CardHeader
              title="Pen Light and Medical Scissors"
              className={classes.popularCardHeader}
            />
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://images-na.ssl-images-amazon.com/images/I/61LKpAFehVL._AC_SX679_.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Link>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $7.99
                </Typography>
                <IconButton 
                  aria-label="share"
                  onClick={() => handleAddCartClick("606d3ad382f8173e94b23748")}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <CardHeader
              title="First Aid Kit Pouch (64-Piece)"
              className={classes.popularCardHeader}
            />
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://images-na.ssl-images-amazon.com/images/I/91jcqbWBurL._AC_SX679_.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Link>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $9.79
                </Typography>
                <IconButton 
                  aria-label="share"
                  onClick={() => handleAddCartClick("606d3ad382f8173e94b2373f")}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <CardHeader
              title="Disposable Isolation Protective Gowns"
              className={classes.popularCardHeader}
            />
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://fetchppe.online/u_file/2004/products/15/5ede69b69e.jpg.640x640.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Link>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $28.99
                </Typography>
                <IconButton 
                  aria-label="share"
                  onClick={() => handleAddCartClick("606d3ad382f8173e94b23737")}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <CardHeader
              title="Adjustable Strap Protective Glasses"
              className={classes.popularCardHeader}
            />
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://fetchppe.online/u_file/2005/products/13/99dff1665f.jpg.640x640.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Link>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $9.99
                </Typography>
                <IconButton 
                  aria-label="share"
                  onClick={() => handleAddCartClick("606d3ad382f8173e94b23736")}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <CardHeader
              title="Medical Organizer Belt for Nurses"
              className={classes.popularCardHeader}
            />
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://images-na.ssl-images-amazon.com/images/I/71g%2BOu0yW5L._AC_SX679_.jpg"
                  title="Contemplative Reptile"
                />
              </CardActionArea>
            </Link>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $22.95
                </Typography>
                <IconButton 
                  aria-label="share"
                  onClick={() => handleAddCartClick("606d3ad382f8173e94b2374e")}
                >
                  <ShoppingCartIcon />
                </IconButton>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* ------------------------------------------------------------------- */}
    </div>
  )
}

export default PopularItems
