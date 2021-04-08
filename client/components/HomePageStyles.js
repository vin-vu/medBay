import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    flexGrow: 1,
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(8),
    paddingRight: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  popularCatagories: {
    marginTop: theme.spacing(3),
  },
  popularItemsCard: {
    height: 140,
  },
  popularCardContent: {
    height: 100,
  }
}));