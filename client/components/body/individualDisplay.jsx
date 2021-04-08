// Boilerplate to utilizes Material UI boxes and styling
import React, { useState } from 'react';
import { styled } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  Grid,
  Typography
} from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme) => ({
  root: {
    // maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));


// React/material UI Button stylizing, special constructor to enforce style when using material ui
const AddToCartButton = styled(Button)({
  background: 'linear-gradient(45deg, #3F9D47 40%, #00d4ff 100%)',
  border: 0,
  borderRadius: 10,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'White',
  height: 36,
  padding: '0 30px',
});

// IndividualDisplay React constructor
// Utilizes Box react/material ui special component
// Allows for stylistic control directly in our code
// Assignment of all props that were drilled into this point
// State is managed at the App.jsx level, please refer there
const IndividualDisplay = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Card>
        <CardHeader
          title={props.title}
          subheader={props.category}
        />
        <CardMedia 
          className={classes.media}
          image={props.image}
          title={props.title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
          <Typography variant="caption" color="textSecondary" component="p">
            {props.objectID}
          </Typography>
        </CardContent>
        <CardActions>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShoppingCartIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  )
}
  // <Box
  //   id={props.key}
  //   width="20%"
  //   display="flex"
  //   flexDirection="column"
  //   padding="2.5% 2.5%"
  // >
  //   <Box flexGrow="1">
  //     <img src={props.image} alt="Image Not Found" width="100%" />
  //   </Box>
  //   <Box component="span" flexGrow="1" padding="1% 0px" color="primary.main">
  //     Product:
  //     {' '}
  //     {props.title}
  //   </Box>
  //   <Box component="span" flexGrow="1" padding="1% 0px" color="text.secondary">
  //     Description:
  //     {' '}
  //     {props.description}
  //   </Box>
  //   <Box component="span" flexGrow="1" padding="1% 0px" color="text.secondary">
  //     Category:
  //     {' '}
  //     {props.category}
  //   </Box>
  //   <Box component="span" flexGrow="1" padding="1% 0px" color="info.main">
  //     Quantity:
  //     {' '}
  //     {props.quantity}
  //   </Box>
  //   <Box component="span" flexGrow="1" padding="1% 0px 2% 0px" color="text.primary">
  //     Price:
  //     {' '}
  //     {props.price}
  //   </Box>
  //   <AddToCartButton onClick={props.buttonFunc}>Add To Cart</AddToCartButton>
  // </Box>
  

export default IndividualDisplay