import { makeStyles } from "@material-ui/core/styles";
import { AppBar, Collapse, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useEffect, useState } from "react";
import { Link as scroll } from 'react-scroll'

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    fontFamily: "Nunito",
  },

  appbar: {
    background: "none",
  },

  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },

  colorText: {
    color: "#3CC924",
  },

  appbarTitle: {
    flexGrow: "1",
  },

  icon: {
    color: "#D0D0D0",
    fontSize: "2rem",
  },

  container: {
    textAlign: "center",
  },

  title: {
    color: "#D0D0D0",
    fontSize: "3rem",
  },

  goDown: {
    color: "#FFFF",
    fontSize: "4rem",
  },
}));

function Header() {
  const classes = useStyles();
  const[checked,setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);
  return (
    <div className={classes.root}>
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
          <h1 className={classes.appbarTitle}>
            {" "}
            News<span className={classes.colorText}>HUB.</span>
          </h1>
          <IconButton>
            <SortIcon className={classes.icon} />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Collapse in={checked}  
                {...(checked ? { timeout: 750 } : {})}
                collapsedHeight={50}
                >
        <div className={classes.container}>
          <h1 className={classes.title}>
            Welcome to <br /> YOUR <br /> News
            <span className={classes.colorText}>HUB.</span>
          </h1>
          <scroll to="head-down" smooth={true}>
          <IconButton>
            <ExpandMoreIcon className={classes.goDown} />
          </IconButton>
          </scroll>
        </div>
      </Collapse>
    </div>
  );
}

export default Header;
