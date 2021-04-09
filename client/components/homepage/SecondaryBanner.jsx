import React from 'react';
import Carousel from 'react-material-ui-carousel';
import autoBind from 'auto-bind';
import {
    Paper,
    Button,
} from '@material-ui/core'
import {
  Link,
} from "react-router-dom";

import useStyles from './SecondaryBannerStyles';

function Project(props) {
  const classes = useStyles();

    return (
      <Paper
        className={classes.project}
        style={{
            backgroundColor: props.item.color,
        }}
        elevation={10}
      >
        <h2>{props.item.name}</h2>
        <p>{props.item.description}</p>
        <Link to="/products" style={{textDecoration: 'none'}}>
          <Button className={classes.checkButton}>
              Check it out!
          </Button>
        </Link>
      </Paper>
    )
}

const items = [
  {
    name: "Medicine",
    description: "A healthy reader specially designed for musicians.",
    color: "#64ACC8"
  },
  {
    name: "Pharmacy",
    description: "My pharmocology on the 2019 Hash Code by Google Slideshow problem.",
    color: "#7D85B1"
  },
  {
    name: "Oncology",
    description: "A exciting mobile game game made in the Cancer Engine.",
    color: "#CE7E78"
  },
  {
    name: "Healthcare",
    description: "A Generic carousel healthcare component for React using material ui.",
    color: "#C9A27E"
  }
]

export default class MyProjectsExample extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      autoPlay: true,
      animation: "slide",
      indicators: true,
      timeout: 1000,
      navButtonsAlwaysVisible: false,
      navButtonsAlwaysInvisible: false
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
          style={{width: 500}}
          autoPlay={this.state.autoPlay}
          animation={this.state.animation}
          indicators={this.state.indicators}
          timeout={this.state.timeout}
          navButtonsAlwaysVisible={this.state.navButtonsAlwaysVisible}
          navButtonsAlwaysInvisible={this.state.navButtonsAlwaysInvisible}
        >
          {
            items.map((item, index) => {
              return <Project item={item} key={index} />
            })
          }
        </Carousel>
      </div>
    )
  }
}