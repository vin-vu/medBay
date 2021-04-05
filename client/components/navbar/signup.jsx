import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks';

const Signup = (props) => (
  <Button onClick={(e) => alert('Login Button Clicked!')} color="secondary" variant="contained">
    Sign Up
  </Button>
);

export default Signup;
