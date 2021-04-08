import { makeStyles } from '@material-ui/core/styles';
import {
  teal,
  cyan,
  lime,
  green
} from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  QualityCard: {
    backgroundColor: teal[200],
    height: 150,
  },
  GivingCard: {
    backgroundColor: cyan[200],
    height: 150,
  },
  FreeShippingCard: {
    backgroundColor: lime[200],
    height: 150,
  },
  CharityCard: {
    backgroundColor: green[200],
    height: 150,
  }
}));