import { makeStyles } from '@material-ui/core/styles';
import hero from '../../assets/hero.jpg';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
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
    padding: theme.spacing(3, 2),
    height: '70vh',
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundImage: `url(${hero})`,
    backgroundRepeat: 'no-repeat',
    backgroundColor:
        theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: theme.spacing(12, 0, 10),
  },
  heroText: {
    backgroundColor: 'rgba(255,255,255,0.8)',
    padding: theme.spacing(4),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));
