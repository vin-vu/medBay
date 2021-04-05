import React, { useState } from 'react';
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button';
import Popover from '@material-ui/core/Popover';
import {
  usePopupState,
  bindTrigger,
  bindPopover,
} from 'material-ui-popup-state/hooks';

const Login = (props) => (
  <Button onClick={(e) => alert('Login Button Clicked!')} color="secondary" variant="contained">Login</Button>
);

export default Login;
