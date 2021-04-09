import React from 'react';
import Carousel from "react-material-ui-carousel";
import autoBind from "auto-bind";
import {
  Link,
} from "react-router-dom";

import useStyles from './BannerStyles';

import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Grid,
  Button
} from '@material-ui/core';


function Banner(props) {
  const classes = useStyles(); 

  const getItemByButton = (cat) => {
    fetch(`api/categoryProducts?Category=${cat}`)
      .then((res) => res.json())
      .then((items) => {
        // console.log(items);
        // return props.setState(items);
      })
      .catch((err) => console.log('There has been a problem with fetching categories: ', err));
  }


  if (props.newProp) console.log(props.newProp)
  const contentPosition = props.contentPosition ? props.contentPosition : "left"
  const totalItems = props.length ? props.length : 3;
  const mediaLength = totalItems - 1;

  let items = [];
  const content = (
    <Grid item xs={12 / totalItems} key="content">
      <CardContent className={classes.content}>
        <Typography className={classes.title}>
            {props.item.Name}
        </Typography>

        <Typography className={classes.caption}>
            {props.item.Caption}
        </Typography>
        <Link to="/products" style={{textDecoration: 'none'}}>
          <Button 
            variant="contained" 
            className={classes.viewButton}
          >
              View Now
          </Button>
        </Link>
      </CardContent>
    </Grid>
  )


  for (let i = 0; i < mediaLength; i++) {
    const item = props.item.Items[i];

    const media = (
      <Grid item xs={12 / totalItems} key={item.Name}>
        <CardMedia
          className={classes.media}
          image={item.Image}
          title={item.Name}
        >
          <Typography className={classes.mediaCaption}>
            {item.Name}
          </Typography>
        </CardMedia>
      </Grid>
    )

    items.push(media);
  }

  if (contentPosition === "left") {
    items.unshift(content);
  } else if (contentPosition === "right") {
    items.push(content);
  } else if (contentPosition === "middle") {
    items.splice(items.length / 2, 0, content);
  }

  return (
    <Card raised className={classes.banner}>
      <Grid container spacing={0} className={classes.bannerGrid}>
        {items}
      </Grid>
    </Card>
  )
}

const items = [
  {
    Name: "First Aid Kits",
    Caption: "Be Prepared!",
    contentPosition: "left",
    Items: [
      {
        Name: "FAK1",
        Image: "https://source.unsplash.com/j-ped4HD32Q"
      },
      {
        Name: "FAK2",
        Image: "https://source.unsplash.com/ZyxNWi3JCto"
      }
    ]
  },
  {
    Name: "Medical Supplies",
    Caption: "Easy Resupplies!",
    contentPosition: "middle",
    Items: [
      {
        Name: "MS1",
        Image: "https://source.unsplash.com/KMvoHcB-w5g"
      },
      {
        Name: "MS2",
        Image: "https://source.unsplash.com/S1v7hVUiCg0"
      }
    ]
  },
  {
    Name: "Personal Protective Equipment",
    Caption: "Stay Safe!",
    contentPosition: "right",
    Items: [
      {
        Name: "PPE1",
        Image: "https://source.unsplash.com/l-NIPb-9Njg"
      },
      {
        Name: "PPE2",
        Image: "https://source.unsplash.com/cEzMOp5FtV4"
      }
    ]
  }
]

class BannerExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "fade",
      indicators: true,
      timeout: 500,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false,
      cycleNavigation: true
    }

    autoBind(this);
  }

  toggleAutoPlay() {
    this.setState({
      autoPlay: !this.state.autoPlay
    })
  }

  toggleIndicators() {
    this.setState({
      indicators: !this.state.indicators
    })
  }

  toggleNavButtonsAlwaysVisible() {
    this.setState({
      navButtonsAlwaysVisible: !this.state.navButtonsAlwaysVisible
    })
  }

  toggleNavButtonsAlwaysInvisible() {
    this.setState({
      navButtonsAlwaysInvisible: !this.state.navButtonsAlwaysInvisible
    })
  }

  toggleCycleNavigation() {
    this.setState({
      cycleNavigation: !this.state.cycleNavigation
    })
  }

  changeAnimation(event) {
    this.setState({
      animation: event.target.value
    })
  }

  changeTimeout(event, value) {
    this.setState({
      timeout: value
    })
  }

  render() {
    return (
      <div style={{ marginTop: "50px", color: "#494949" }}>
        <Carousel
          autoPlay={this.state.autoPlay}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          cycleNavigation={this.state.cycleNavigation}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
          next={(now, previous) => console.log(`Next User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
          prev={(now, previous) => console.log(`Prev User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
          onChange={(now, previous) => console.log(`OnChange User Callback: Now displaying child${now}. Previously displayed child${previous}`)}
        >
          {
            items.map((item, index) => {
              return <Banner item={item} key={index} contentPosition={item.contentPosition} />
            })
          }
        </Carousel>
      </div>
    )
  }
}

export default BannerExample;