import { makeStyles } from '@material-ui/core/styles';
import ImageCard from './ImageCard';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '100vh',
    }
}));

function HeadDown() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="Head-Down"> 
    <ImageCard />
    </div>
  );
}

export default HeadDown;
