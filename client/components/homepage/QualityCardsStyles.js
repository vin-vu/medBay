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
  },
  GivingCard: {
    backgroundColor: cyan[200],
  },
  FreeShippingCard: {
    backgroundColor: lime[200],
  },
  CharityCard: {
    backgroundColor: green[200],
  }
}));