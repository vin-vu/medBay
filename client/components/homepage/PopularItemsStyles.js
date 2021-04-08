import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  popularItems: {
    marginTop: theme.spacing(3),
  },
  popularCardHeader: {
    height: 150,
    overflow: 'hidden',
  },
  popularItemsCard: {
    height: 140,
  },
  popularCardContent: {
    height: 80,
  },
}));