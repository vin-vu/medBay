import React from 'react';
import { 
  Box,
  Button,
  Card, 
  CardContent, 
  Container,
  Grid, 
  Typography 
} from '@material-ui/core';

import Banner from './homepage/Banner';
import PopularCatagories from './homepage/PopularCatagories';
import PopularItems from './homepage/PopularItems';
import QualityCards from './homepage/QualityCards';
import SecondaryBanner from './homepage/SecondaryBanner';

import useStyles from './HomePageStyles';

const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.content}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Banner />
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="column" justifyContent="space-between">
                  <Typography variant="h5" component="h2">
                    Apparel
                  </Typography>
                  <Button size="small" variant="outlined">Show More</Button>
                </Box>
                <svg id="Layer_1" enable-background="new 0 0 512 512" x="0px" y="0px" height="70" width="70" viewBox="0 0 512 512" ><g><g><path clip-rule="evenodd" d="m256.003 83.882c33.006 0 75.203-22.587 63.972-76.813-41.731 9.612-84.35 9.76-127.974-.177-11.887 70.886 64.002 76.99 64.002 76.99z" fill="#7e707d" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m505.641 175.63-5.461 220.01-.995 40.086c-.061 2.233-1.888 4.02-4.121 4.02h-55.667c-2.101 0-3.867-1.584-4.101-3.665l-29.337-261.181-.873-7.674h-30.392v132.54l19.693 212.234h-276.764l19.662-212.234v-129.444c0-1.705-1.381-3.096-3.086-3.096h-24.555c-1.573 0-2.893 1.188-3.066 2.741l-.558 4.933-10.12 90.089-19.225 171.093c-.234 2.081-1.99 3.665-4.091 3.665h-55.637c-2.243 0-4.071-1.787-4.121-4.02l-6.466-260.269c-.01-.335.041-.68.142-1.005l36.462-115.943c.162-.508.457-.975.853-1.33l61.088-56.368c.568-.528 1.319-.812 2.09-.812h80.618c2.182 0 3.949 1.705 4.111 3.898 2.152 31.397 30.097 56.286 64.275 56.286 28.818 0 53.211-17.723 61.433-42.116.406-1.188.751-2.406 1.076-3.624.903-3.411 1.492-6.943 1.746-10.547.01-.132.02-.244.041-.355v-.05c.345-1.99 2.02-3.492 4.07-3.492h80.212c1.035 0 2.04.386 2.802 1.096l60.611 55.891c.528.487.924 1.106 1.137 1.797l36.32 115.507c.143.436.204.883.194 1.339z" fill="#a1d4ff" fill-rule="evenodd"/></g><g><path d="m263.725 116.826v395.174h-15.45v-395.174c0-4.263 3.461-7.725 7.725-7.725 4.274.001 7.725 3.462 7.725 7.725z" fill="#86beec"/></g><g><path d="m412.003 170.68c-1.216 2.431-3.534 3.946-6.047 4.224l-.865-7.675h-7.726c0-1.164.268-2.349.824-3.461 8.231-16.462 11.322-33.172 9.457-51.076-.443-4.244 2.637-8.046 6.882-8.489 4.234-.453 8.046 2.637 8.489 6.882 2.183 20.922-1.423 40.413-11.014 59.595z" fill="#86beec"/></g><g><path clip-rule="evenodd" d="m499.186 435.725.995-40.08h-43.713-25.701l4.529 40.436c.234 2.085 1.997 3.662 4.095 3.662h12.7 42.976c2.235 0 4.063-1.783 4.119-4.018z" fill="#eff6ff" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m76.684 436.084 4.556-40.439h-25.967-43.446l.995 40.08c.055 2.235 1.883 4.018 4.119 4.018h42.887 12.762c2.097 0 3.86-1.575 4.094-3.659z" fill="#eff6ff" fill-rule="evenodd"/></g><g><path d="m156.072 113.148c-7.69 12.029-11.316 29.697-11.06 53.998.041 4.265-3.379 7.757-7.644 7.809l-.082 10.477v-15.113c0-1.707-1.384-3.091-3.091-3.091h-4.636c-.278-27.526 4.193-48.017 13.66-62.666 2.376-3.675 7.34-4.665 10.952-2.116 3.404 2.405 4.145 7.191 1.901 10.702z" fill="#86beec"/></g><g><path clip-rule="evenodd" d="m505.64 175.63-5.464 220.01h-29.484l11.59-206.53-33.027-110.58-62.615-57.741h-70.186c.35-.896.69-1.803.979-2.72 1.205-3.534 2.05-7.221 2.544-11.002.134-1.164.247-2.338.319-3.523v-.052c.341-1.988 2.02-3.492 4.07-3.492h80.448c.888 0 1.746.326 2.409.917l60.767 56.07c.529.488.921 1.106 1.137 1.792l36.325 115.513c.135.432.199.884.188 1.338z" fill="#86beec" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m499.186 435.725.995-40.08h-29.487l-1.094 44.099h25.467c2.235-.001 4.063-1.784 4.119-4.019z" fill="#d9eeff" fill-rule="evenodd"/></g><g><path d="m350.682 425.407c-2.704 0-5.328-1.422-6.745-3.948-1.037-1.849-2.035-3.601-2.994-5.284-14.632-25.689-20.689-36.322-17.418-116.732.173-4.265 3.772-7.586 8.034-7.406 4.264.173 7.579 3.77 7.406 8.034-3.09 75.983 1.947 84.825 15.406 108.455.975 1.711 1.989 3.492 3.043 5.372 2.088 3.722.763 8.431-2.958 10.519-1.196.671-2.494.99-3.774.99z" fill="#eff6ff"/></g><g><path clip-rule="evenodd" d="m81.241 395.645 14.67-130.639c-6.921-6.3-13.96-13.694-20.318-22.596l-17.214 153.235z" fill="#86beec" fill-rule="evenodd"/></g><path d="m113.798 163.767c-8.241-16.473-11.322-33.172-9.436-51.066.453-4.244-2.627-8.046-6.871-8.499-4.244-.443-8.046 2.627-8.499 6.871-1.164 11.033-.711 21.665 1.38 32.069l-3.039 10.034c-3.338 11.095-3.966 15.494-5.202 27.155l-6.542 62.079c6.366 8.901 13.392 16.287 20.315 22.581l.01.01 10.106-90.099.556-4.931c.176-1.563 1.498-2.744 3.071-2.744h4.965c0-1.162-.258-2.347-.814-3.46z" fill="#86beec"/><g><path clip-rule="evenodd" d="m76.684 436.084 4.556-40.439h-22.861l-4.939 44.099h6.388 12.762c2.097-.001 3.86-1.576 4.094-3.66z" fill="#d9eeff" fill-rule="evenodd"/></g><g><path clip-rule="evenodd" d="m394.388 511.998-19.697-212.24h-22.833l19.668 212.24z" fill="#86beec" fill-rule="evenodd"/></g><path d="m382.417 167.229c.278-27.506-4.183-48.006-13.629-62.666-2.308-3.585-7.088-4.615-10.673-2.308-.14.091-5.806 4.411-6.256 12.558v184.944h22.832v-132.528z" fill="#86beec"/><g><path d="m299.114 385.36c-2.34 0-4.65-1.065-6.158-3.084-2.539-3.398-1.843-8.21 1.555-10.749 12.128-9.063 28.311-26.376 28.815-71.901.046-4.212 3.477-7.595 7.678-7.595.029 0 .057 0 .087.001 4.242.047 7.642 3.524 7.595 7.765-.436 39.284-11.878 66.771-34.981 84.035-1.379 1.03-2.992 1.528-4.591 1.528z" fill="#eff6ff"/></g><g><path d="m374.691 307.484h-237.404c-4.267 0-7.726-3.459-7.726-7.726s3.459-7.726 7.726-7.726h237.404c4.267 0 7.726 3.459 7.726 7.726s-3.459 7.726-7.726 7.726z" fill="#eff6ff"/></g></g></svg>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="column" justifyContent="space-between">
                  <Typography variant="h5" component="h2">
                    Laboratory
                  </Typography>
                  <Button size="small" variant="outlined">Show More</Button>
                </Box>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" height="70" width="70" viewBox="0 0 512 512" ><path d="m419.847656 206.511719v-101.3125h-126.152344v101.3125c-54.296874 24.175781-92.152343 78.601562-92.152343 141.871093 0 85.730469 69.496093 155.226563 155.226562 155.226563s155.230469-69.496094 155.230469-155.226563c0-63.269531-37.859375-117.695312-92.152344-141.871093zm0 0" fill="#c9fff7"/><path d="m480.585938 348.386719c0 68.273437-55.539063 123.808593-123.820313 123.808593-22.460937 0-43.539063-6.007812-61.714844-16.511718-37.089843-21.402344-62.09375-61.484375-62.09375-107.296875 0-34.25 14.1875-66.300781 38.039063-89.265625h171.546875c23.855469 22.964844 38.042969 55.015625 38.042969 89.265625zm0 0" fill="#f7d360"/><path d="m322.054688 206.515625v-28.039063c0-15.191406 12.3125-27.503906 27.5-27.503906h70.292968v-30.066406l-25.015625-22.765625-23.558593-6.28125-77.574219 29.042969v85.613281c-54.304688 24.175781-92.15625 78.59375-92.15625 141.871094 0 85.359375 68.898437 154.625 154.132812 155.210937-46.679687-1.078125-84.332031-70.15625-84.332031-155.210937 0-63.277344 20.835938-117.695313 50.710938-141.871094zm0 0" fill="#72cec0"/><path d="m295.050781 455.683594c-37.089843-21.402344-62.09375-61.484375-62.09375-107.296875 0-34.25 14.1875-66.300781 38.039063-89.265625h15.886718c-9.792968 25.246094-15.539062 56.03125-15.539062 89.265625 0 41.621093 9.015625 79.414062 23.707031 107.296875zm0 0" fill="#e58e13"/><path d="m303.523438 436.109375-100.808594-174.605469v-90.339844h-95.804688v90.339844l-100.808594 174.605469c-17.320312 30 4.328126 67.5 38.972657 67.5h219.480469c34.640624 0 56.292968-37.5 38.96875-67.5zm0 0" fill="#e6e6e6"/><path d="m202.714844 171.164062-29.332032-16.480468-56.214843.585937-10.261719 15.894531v90.335938l-100.804688 174.613281c-17.332031 30 4.324219 67.496094 38.960938 67.496094h59.917969c-15.730469 0-25.5625-37.496094-17.699219-67.496094l45.78125-174.613281v-46.378906c0-9.53125 7.726562-17.253906 17.257812-17.253906h52.394532zm0 0" fill="#ccc"/><path d="m237.449219 150.746094c0 11.277344-9.140625 20.417968-20.417969 20.417968h-124.441406c-5.632813 0-10.742188-2.28125-14.4375-5.980468-3.695313-3.695313-5.980469-8.804688-5.980469-14.4375 0-11.277344 9.140625-20.417969 20.417969-20.417969h124.441406c5.632812 0 10.742188 2.28125 14.4375 5.976563 3.695312 3.699218 5.980469 8.808593 5.980469 14.441406zm0 0" fill="#ccc"/><path d="m237.449219 150.746094c0 11.277344-9.140625 20.417968-20.417969 20.417968h-74.921875c-5.644531 0-10.742187-2.28125-14.441406-5.980468-3.695313-3.695313-5.976563-8.804688-5.976563-14.4375 0-11.277344 9.140625-20.417969 20.417969-20.417969h74.921875c5.632812 0 10.742188 2.28125 14.4375 5.976563 3.695312 3.699218 5.980469 8.808593 5.980469 14.441406zm0 0" fill="#e6e6e6"/><path d="m455.015625 100.484375c0 11.277344-9.140625 20.417969-20.417969 20.417969h-153.933594c-5.644531 0-10.746093-2.28125-14.441406-5.976563-3.695312-3.699219-5.980468-8.808593-5.980468-14.441406 0-11.277344 9.144531-20.417969 20.421874-20.417969h153.933594c5.632813 0 10.742188 2.28125 14.4375 5.980469 3.699219 3.695313 5.980469 8.804687 5.980469 14.4375zm0 0" fill="#72cec0"/><path d="m455.015625 100.484375c0 11.277344-9.140625 20.417969-20.417969 20.417969h-106.21875c-5.632812 0-10.742187-2.28125-14.441406-5.976563-3.695312-3.699219-5.976562-8.808593-5.976562-14.441406 0-11.277344 9.140624-20.417969 20.417968-20.417969h106.21875c5.632813 0 10.742188 2.28125 14.4375 5.980469 3.699219 3.695313 5.980469 8.804687 5.980469 14.4375zm0 0" fill="#c9fff7"/><path d="m276.316406 465.402344c-1.464844 2.542968-4.941406 6.792968-11.757812 6.792968h-219.484375c-6.828125 0-10.304688-4.25-11.769531-6.792968-1.464844-2.535156-3.414063-7.675782 0-13.582032l74.082031-128.3125h94.859375l74.070312 128.3125c3.414063 5.90625 1.464844 11.046876 0 13.582032zm0 0" fill="#fc5f61"/><g fill="#e83842"><path d="m87.28125 436.113281c-3.085938 11.78125-3.445312 24.710938-1.789062 36.082031h-40.417969c-6.828125 0-10.304688-4.25-11.769531-6.792968-1.464844-2.535156-3.414063-7.675782 0-13.582032l74.082031-128.3125h9.414062zm0 0"/><path d="m171.699219 413.03125c-7.132813 0-10.527344-9.167969-5.09375-13.820312 5.402343-4.625 13.882812.09375 12.863281 7.125-.550781 3.804687-3.933594 6.695312-7.769531 6.695312zm0 0"/><path d="m137.0625 91.070312c-6.855469 0-10.378906-8.570312-5.550781-13.414062 2.609375-2.613281 6.839843-3.019531 9.90625-.972656 2.6875 1.789062 4.027343 5.15625 3.289062 8.300781-.820312 3.511719-4.03125 6.085937-7.644531 6.085937zm0 0"/><path d="m168.316406 61.226562c-7.105468 0-10.578125-9.203124-5.101562-13.828124 2.605468-2.203126 6.40625-2.484376 9.300781-.660157 2.78125 1.753907 4.199219 5.199219 3.449219 8.40625-.820313 3.503907-4.03125 6.082031-7.648438 6.082031zm0 0"/><path d="m151.292969 15.679688c-3.429688 0-6.515625-2.304688-7.519531-5.574219-.996094-3.261719.316406-6.921875 3.152343-8.8125 5.828125-3.890625 13.714844 1.609375 11.976563 8.441406-.878906 3.445313-4.046875 5.945313-7.609375 5.945313zm0 0"/></g><path d="m425.726562 307.8125c-6.980468 0-10.460937-8.914062-5.3125-13.640625 4.933594-4.527344 13.167969-.914063 13.167969 5.785156 0 4.269531-3.578125 7.855469-7.855469 7.855469zm0 0" fill="#fff"/><path d="m431.195312 360.1875c-6.839843 0-10.425781-8.574219-5.550781-13.402344 2.4375-2.414062 6.226563-2.972656 9.253907-1.367187 2.902343 1.542969 4.535156 4.828125 4.066406 8.074219-.554688 3.808593-3.9375 6.695312-7.769532 6.695312zm0 0" fill="#fff"/><path d="m328.765625 419.316406c-3.359375 0-6.398437-2.207031-7.453125-5.390625-1.117188-3.359375.238281-7.171875 3.21875-9.078125 5.914062-3.785156 13.679688 1.90625 11.800781 8.699219-.925781 3.359375-4.074219 5.769531-7.566406 5.769531zm0 0" fill="#fff"/><path d="m292.640625 353.347656c-7.097656 0-10.542969-9.152344-5.132813-13.789062 2.597657-2.230469 6.402344-2.507813 9.304688-.707032 2.753906 1.714844 4.183594 5.085938 3.511719 8.261719-.757813 3.585938-4.011719 6.234375-7.683594 6.234375zm0 0" fill="#fff"/><path d="m388.441406 334.5c-7.019531 0-10.496094-8.964844-5.269531-13.664062 2.605469-2.34375 6.503906-2.671876 9.472656-.816407 2.714844 1.703125 4.125 5.023438 3.503907 8.167969-.71875 3.625-4.015626 6.3125-7.707032 6.3125zm0 0" fill="#fff"/><path d="m116.738281 429.296875c-3.152343 0-6.046875-1.945313-7.257812-4.847656-1.328125-3.195313-.335938-7.035157 2.390625-9.171875 5.597656-4.378906 14.003906.667968 12.5625 7.703125-.742188 3.625-3.984375 6.316406-7.695313 6.316406zm0 0" fill="#e83842"/><path d="m137.15625 378.480469c-3.285156 0-6.285156-2.113281-7.394531-5.207031-1.179688-3.289063.027343-7.09375 2.902343-9.085938 5.589844-3.871094 13.429688 1.039062 12.222657 7.785156-.664063 3.710938-3.949219 6.507813-7.730469 6.507813zm0 0" fill="#e83842"/></svg>
              </Box>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card>
            <CardContent>
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" flexDirection="column" justifyContent="space-between">
                  <Typography variant="h5" component="h2">
                    Sterilization
                  </Typography>
                  <Button size="small" variant="outlined">Show More</Button>
                </Box>
              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" enable-background="new 0 0 512.02 512.02"  x="0px" y="0px" height="70" width="70" viewBox="0 0 512 512"><g><path d="m251.194 29.991h-30c-4.142 0-7.5 3.358-7.5 7.5v30c0 4.142 3.358 7.5 7.5 7.5h30c4.142 0 7.5-3.358 7.5-7.5v-30c0-4.142-3.358-7.5-7.5-7.5z" fill="#dae6ef"/><path d="m353.69 85.89v23.8c0 4.14-3.36 7.5-7.5 7.5h-220c-4.15 0-7.5-3.36-7.5-7.5v-23.8c0-14.28 11.62-25.9 25.9-25.9h183.2c14.28 0 25.9 11.62 25.9 25.9z" fill="#52deff"/><path d="m353.69 85.89v23.8c0 4.14-3.36 7.5-7.5 7.5h-33c4.14 0 7.5-3.36 7.5-7.5v-23.8c0-14.3-11.6-25.9-25.9-25.9h33c14.28 0 25.9 11.62 25.9 25.9z" fill="#55baff"/><path d="m376.93 474.31v30.21c0 4.14-3.35 7.5-7.5 7.5h-266.49c-4.14 0-7.5-3.36-7.5-7.5v-30.21c0-4.14 3.36-7.5 7.5-7.5h266.49c4.15 0 7.5 3.36 7.5 7.5z" fill="#555760"/><path d="m376.98 109.69v30.21c0 4.14-3.35 7.5-7.5 7.5h-266.49c-4.14 0-7.5-3.36-7.5-7.5v-30.21c0-4.14 3.36-7.5 7.5-7.5h266.49c4.15 0 7.5 3.36 7.5 7.5z" fill="#555760"/><path d="m376.93 474.31v30.21c0 4.14-3.35 7.5-7.5 7.5h-35c4.15 0 7.5-3.36 7.5-7.5v-30.21c0-4.14-3.35-7.5-7.5-7.5h35c4.15 0 7.5 3.36 7.5 7.5z" fill="#36383f"/><path d="m376.98 109.69v30.21c0 4.14-3.35 7.5-7.5 7.5h-35c4.15 0 7.5-3.36 7.5-7.5v-30.21c0-4.14-3.35-7.5-7.5-7.5h35c4.15 0 7.5 3.36 7.5 7.5z" fill="#36383f"/><path d="m398.79 161.76v290.69c0 16.19-13.17 29.36-29.36 29.36h-266.49c-16.19 0-29.35-13.17-29.35-29.36v-290.69c0-16.19 13.16-29.36 29.35-29.36h266.49c16.19 0 29.36 13.17 29.36 29.36z" fill="#eef6ff"/><path d="m398.79 161.76v290.69c0 16.19-13.17 29.36-29.36 29.36h-30c16.22 0 29.36-13.14 29.36-29.36v-290.69c0-16.22-13.14-29.36-29.36-29.36h30c16.19 0 29.36 13.17 29.36 29.36z" fill="#dae6ef"/><path d="m398.79 181.97v270.48c0 16.19-13.17 29.36-29.36 29.36h-266.49c-16.19 0-29.35-13.17-29.35-29.36v-270.48c21.45 0 32.34 3.37 42.86 6.62 9.9 3.06 19.24 5.96 38.43 5.96s28.54-2.9 38.43-5.96c10.53-3.25 21.41-6.62 42.87-6.62s32.35 3.37 42.87 6.62c9.9 3.06 19.24 5.96 38.44 5.96 19.19 0 28.53-2.9 38.43-5.96 4.04-1.25 8.14-2.52 12.87-3.6 7.58-1.74 16.79-3.02 30-3.02z" fill="#52deff"/><path d="m353.69 242.11v186.02c0 4.14-3.36 7.5-7.5 7.5h-220c-4.15 0-7.5-3.36-7.5-7.5v-186.02c0-4.15 3.35-7.5 7.5-7.5h220c4.14 0 7.5 3.35 7.5 7.5z" fill="#eef6ff"/><path d="m353.69 242.11v186.02c0 4.14-3.36 7.5-7.5 7.5h-30c4.14 0 7.5-3.36 7.5-7.5v-186.02c0-4.15-3.36-7.5-7.5-7.5h30c4.14 0 7.5 3.35 7.5 7.5z" fill="#dae6ef"/><path d="m398.79 181.97v270.48c0 16.19-13.17 29.36-29.36 29.36h-30c16.22 0 29.36-13.14 29.36-29.36v-267.46c7.58-1.74 16.79-3.02 30-3.02z" fill="#55baff"/><path d="m281.194 313.33h-25v-25c0-2.761-2.239-5-5-5h-30c-2.761 0-5 2.239-5 5v25h-25c-2.761 0-5 2.239-5 5v30c0 2.761 2.239 5 5 5h25v25c0 2.761 2.239 5 5 5h30c2.761 0 5-2.239 5-5v-25h25c2.761 0 5-2.239 5-5v-30c0-2.762-2.239-5-5-5z" fill="#ff455c"/><path d="m438.43 59.68c0 11.02-8.97 20-20 20-5.97 0-11.34-2.63-14.99-6.8-3.12-3.52-5.01-8.15-5.01-13.2 0-10.85-8.82-19.68-19.67-19.68h-207.57c-11.02 0-20-8.97-20-20s8.98-20 20-20h207.57c32.9 0 59.67 26.77 59.67 59.68z" fill="#555760"/><path d="m438.43 59.68c0 11.02-8.97 20-20 20-5.97 0-11.34-2.63-14.99-6.8 3.11-3.52 4.99-8.15 4.99-13.2 0-32.91-26.77-59.68-59.67-59.68h30c32.9 0 59.67 26.77 59.67 59.68z" fill="#36383f"/></g></svg>              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
      {/* -- POPULAR CATAGORIES SECTION ----------------------------------------- */}
      <PopularCatagories />
      {/* -- QUALITY CARDS SECTION ---------------------------------------------- */}
      <QualityCards />
      {/* -- POPULAR ITEMS SECTION ---------------------------------------------- */}
      <PopularItems />
      {/* -- SECONDARY BANNER SECTION ------------------------------------------- */}
      <SecondaryBanner />
      <footer className={classes.footer}>
        <Container maxWidth="lg">
          <Typography variant="h6" align="center" gutterBottom>
            medBay
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Built by Team Stab Rabbit @ CS 42
          </Typography>
          <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
              medBay
            {' '}
            {new Date().getFullYear()}
            {'.'}
          </Typography>
        </Container>
      </footer>
    </div>
    
  )
}

export default HomePage