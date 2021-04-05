import React from 'react';
import { Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
}));

const LogoName = (props) => {
  const classes = useStyles();

  return (
    <div>
      <Typography className={classes.title} variant="h6" noWrap>
        sickBay
      </Typography>

    </div>
  );
};

export default LogoName;
