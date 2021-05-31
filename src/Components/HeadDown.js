import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root:{
        height: '100vh',
    }
}));

function HeadDown() {
  const classes = useStyles();
  return (
    <div className={classes.root} id="head-down"> 
    </div>
  );
}

export default HeadDown;
