import React, { useState } from 'react';
import Button from '@material-ui/core/Button';

const Login = (props) => (
  <Button onClick={(e) => alert('Login Button Clicked!')} color="secondary" variant="outlined">Login</Button>
);

export default Login;
