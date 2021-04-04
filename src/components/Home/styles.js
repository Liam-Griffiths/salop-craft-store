import { makeStyles } from '@material-ui/core/styles';
import hero from '../../assets/hero.jpg';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    paddingLeft: '8%',
    paddingRight: '8%',
    paddingBottom: '4%',
  },
  productsList:{
    marginTop: 25,
    backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[100] : theme.palette.grey[900],
  },
  root: {
    flexGrow: 1,
    height: '70vh',
  },
  image: {
    backgroundImage: `url(${hero})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));
