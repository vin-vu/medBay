import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Signup = (props) => (
  <Button onClick={(e) => alert('Login Button Clicked!')} color="secondary" variant="outlined">
    Sign Up
  </Button>
);

export default Signup;
