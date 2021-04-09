import React from 'react';
import {
  Grid,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from '@material-ui/core';
import {
  Link,
} from "react-router-dom";

import useStyles from './PopularCatagoriesStyles';

const PopularCatagories = () => {
  const classes = useStyles();

  return (
    <div>
      {/* -- POPULAR CATAGORIES SECTION ----------------------------------------- */}
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.popularCatagories}>
          <Typography variant="h5">
            Popular Catagories
          </Typography>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://fetchppe.online/u_file/2004/products/07/a8128aca75.jpg.640x640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.popularCardContent}>
                  <Typography variant="h5">
                    Face Shields
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://fetchppe.online/u_file/2004/products/10/4f37bad875.jpg.640x640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.popularCardContent}>
                  <Typography variant="h5">
                    Gloves
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://images-na.ssl-images-amazon.com/images/I/81NtDbB-szL._AC_SX679_.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.popularCardContent}>
                  <Typography variant="h5">
                    First Aid Kits
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://images-na.ssl-images-amazon.com/images/I/71xbCQkiZOL._AC_SX679_.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.popularCardContent}>
                  <Typography variant="h5">
                    Medical Devices
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://fetchppe.online/u_file/2003/products/26/b767a81d9b.jpg.640x640.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.popularCardContent}>
                  <Typography variant="h5">
                    Ultrasonic Devices
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
        <Grid item xs={2}>
          <Card variant="outlined">
            <Link to="/products" style={{textDecoration: 'none'}}>
              <CardActionArea>
                <CardMedia 
                  className={classes.popularItemsCard}
                  image="https://images-na.ssl-images-amazon.com/images/I/713xHfYaMxL._AC_SX679_.jpg"
                  title="Contemplative Reptile"
                />
                <CardContent className={classes.popularCardContent}>
                  <Typography variant="h5">
                    Medical Equipment
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      </Grid>
      {/* ------------------------------------------------------------------- */}
    </div>
  )
}

export default PopularCatagories
