import React from 'react';
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


import useStyles from './PopularItemsStyles';

const PopularItems = () => {
  const classes = useStyles();

  return (
    <div>
      {/* -- POPULAR CATAGORIES SECTION ----------------------------------------- */}
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
            <CardActionArea>
              <CardMedia 
                className={classes.popularItemsCard}
                image="https://fetchppe.online/u_file/2004/products/30/e733989eff.jpg.640x640.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $15.99
                </Typography>
                <IconButton aria-label="share">
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
            <CardActionArea>
              <CardMedia 
                className={classes.popularItemsCard}
                image="https://images-na.ssl-images-amazon.com/images/I/61LKpAFehVL._AC_SX679_.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $7.99
                </Typography>
                <IconButton aria-label="share">
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
            <CardActionArea>
              <CardMedia 
                className={classes.popularItemsCard}
                image="https://images-na.ssl-images-amazon.com/images/I/91jcqbWBurL._AC_SX679_.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $9.79
                </Typography>
                <IconButton aria-label="share">
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
            <CardActionArea>
              <CardMedia 
                className={classes.popularItemsCard}
                image="https://fetchppe.online/u_file/2004/products/15/5ede69b69e.jpg.640x640.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $28.99
                </Typography>
                <IconButton aria-label="share">
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
            <CardActionArea>
              <CardMedia 
                className={classes.popularItemsCard}
                image="https://fetchppe.online/u_file/2005/products/13/99dff1665f.jpg.640x640.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $9.99
                </Typography>
                <IconButton aria-label="share">
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
            <CardActionArea>
              <CardMedia 
                className={classes.popularItemsCard}
                image="https://images-na.ssl-images-amazon.com/images/I/71g%2BOu0yW5L._AC_SX679_.jpg"
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardContent className={classes.popularCardContent}>
              <Box display="flex" justifyContent="space-between" alignItems="center">
                <Typography variant="subtitle1">
                  $22.95
                </Typography>
                <IconButton aria-label="share">
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
