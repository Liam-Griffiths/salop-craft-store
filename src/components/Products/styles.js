import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingBottom: '4%',
  },
  root: {
    flexGrow: 1,
  },
}));
