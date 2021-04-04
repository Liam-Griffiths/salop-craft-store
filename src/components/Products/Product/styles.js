import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardActions: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  title: {
    height: 80,
    borderBottom: '2px solid rgba(0, 0, 0, 0.12)',
    overflow: 'hidden'
  },
  desc: {
    height: 90,
    overflow: 'scroll'
  },
}));
