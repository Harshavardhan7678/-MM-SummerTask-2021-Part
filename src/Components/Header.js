import { makeStyles } from "@material-ui/core/styles";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
  },

  appbarWrapper:{
      width:'80%',
      margin: '0 auto',
  },

  appbarTitle:{
      flexGrow: '1',
  },

  icon:{
      color:'#fff',
      fontSize:'2rem',
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <div>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}> NewsBlog. </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;
