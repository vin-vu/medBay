import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  content: {
    color: 'white',
    backgroundColor: theme.palette.primary.main,
    height: '100%',
    position: 'relative',
    cursor: 'pointer',
    padding: 30,
    transition: '1000ms',
  },
  title: {
    fontSize: 40,
    fontWeight: 500,
  },
  caption: {
    marginTop: 10,
    fontSize: 25,
  },
  viewButton: {
    marginTop: 40,
    color: 'white',
    backgroundColor: theme.palette.secondary.main,
    fontSize: 20,
    border: '3px solid white',
    textTransform: 'capitalize',
    transition: '1000ms',
  },
  media: {
    backgroundColor: 'white',
    height: '100%',
    overflow: 'hidden',
    position: 'relative',
  },
  mediaCaption: {
    textOverflow: 'ellipsis',
    position: 'absolute',
    bottom: 0,
    paddingTop: 30,
    paddingBottom: 60,
    paddingLeft: 60,
    paddingRight: 60,
    backgroundColor: 'black',
    color: 'white',
    opacity: 0.6,
    width: '100%',
    height: '10%',
    fontSize: 24,
    fontWeight: 200,
    transition: '1000ms',
    cursor: 'pointer',
  },
  banner: {
    height: 400,
    position: 'relative',
  },
  bannerGrid: {
    height: '100%',
    position: 'relative',
  }

}));