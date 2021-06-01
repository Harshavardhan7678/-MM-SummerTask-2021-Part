import Header from '../../Components/Header';
import Topbar from '../../Components/Topbar';
import HeadDown from '../../Components/HeadDown';
import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + `/Assets/Background.jpeg` })`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
  }
}));

function Home() {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
    <CssBaseline />
    <Header />
    <HeadDown />
    <Topbar />
    </div>
  );
}

export default Home;