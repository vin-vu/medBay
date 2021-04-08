import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  project: {
    position: 'relative',
    height: 400,
    overflow: 'hidden',
    padding: 20,
    color: 'white',
  },
  checkButton: {
    marginTop: 40,
    color: 'white',
    fontSize: 24,
    border: '3px solid white',
    textTransform: 'capitalize',
  }
}));