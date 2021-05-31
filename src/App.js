import { makeStyles } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './Components/Header';
import HeadDown from './Components/HeadDown';

const useStyles = makeStyles((theme) => ({
  root:{
    minHeight: '100vh',
    backgroundImage:`url(${process.env.PUBLIC_URL + `/Assets/Background.jpeg` })`,
    backgroundRepeat:"no-repeat",
    backgroundSize:"cover",
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.root}> 
    <CssBaseline />
    <Header />
    <HeadDown />
    </div>
  );
}

export default App;
