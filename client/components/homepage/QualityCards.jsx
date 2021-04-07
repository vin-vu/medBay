import React from 'react';
import {
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  Typography,
} from '@material-ui/core';

import useStyles from './QualityCardsStyles';

const QualityCards = () => {
  const classes = useStyles();

  return (
    <div style={{marginTop: 20}}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <div styles={{height: 20}} />
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.QualityCard}>
            <CardContent>
              <Box display="flex" justifyContent="flex-start" alignItems="center">
                <Avatar>
                  Q
                </Avatar>
                <Box style={{marginLeft: 20}}>
                  <Typography variant="h5" component="h2">
                    Quality
                  </Typography>
                  <Typography color="textSecondary">
                    We offer 45 days warranty on all our products
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.GivingCard}>
            <CardContent>
              <Box display="flex" justifyContent="flex-start" alignItems="center">
                <Avatar>
                  G
                </Avatar>
                <Box style={{marginLeft: 20}}>
                  <Typography variant="h5" component="h2">
                    Giving Back
                  </Typography>
                  <Typography color="textSecondary">
                    Leave a review and we will send you a free gift!
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.FreeShippingCard}>
            <CardContent>
              <Box display="flex" justifyContent="flex-start" alignItems="center">
                <Avatar>
                  F
                </Avatar>
                <Box style={{marginLeft: 20}}>
                  <Typography variant="h5" component="h2">
                    Free Shipping
                  </Typography>
                  <Typography color="textSecondary">
                    On all orders anywhere in US and Canada
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card className={classes.CharityCard}>
            <CardContent>
              <Box display="flex" justifyContent="flex-start" alignItems="center">
                <Avatar>
                  C
                </Avatar>
                <Box style={{marginLeft: 20}}>
                  <Typography variant="h5" component="h2">
                    Charity
                  </Typography>
                  <Typography color="textSecondary">
                    2% from every purchase goes to cancer and disease research organizations 
                  </Typography>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  )
}

export default QualityCards
