import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks';
import { TextField } from '@material-ui/core';

const styles = (theme) => ({
  typography: {
    margin: theme.spacing(2),
  },
});

const SignupPopupState = ({ classes }) => {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'signup',
  });
  return (
    <div>
      <Button onClick={(e) => console.log('Signup Button Clicked!')} color="secondary" variant="contained" {...bindTrigger(popupState)}>
        Sign Up
      </Button>
      <Popover
        {...bindPopover(popupState)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
      >
        <Typography className={classes.typography}>
          <form action="/api/signup" method="POST">
            <TextField required id="standard-required" label="Username Required" type="text" defaultValue="Username" name="username" />
            <TextField required id="standard-password-input" label="Password Required" type="password" defaultValue="" name="password" />
            <TextField required id="standard-password-input" label="Repeat Required" type="password" defaultValue="" name="psw-repeat" />
            <Button type="submit">Submit</Button>
          </form>
        </Typography>
      </Popover>
    </div>
  );
};

SignupPopupState.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignupPopupState);
