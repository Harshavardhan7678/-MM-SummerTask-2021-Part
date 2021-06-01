import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Icon from "./Icon";
import Search from "./Search";

const useStyles = makeStyles((theme) => ({
  appbar: {
    background: "none",
  },

  appbarWrapper: {
    width: "80%",
    margin: "0 auto",
  },

  appbarTitle: {
    flexGrow: "1",
    fontFamily: "Nunito",
    color: "#D0D0D0",
  },

  colorText: {
    color: "#3CC924",
  },

  icon: {
    color: "#D0D0D0",
    fontSize: "2rem",
  },
}));

function Topbar() {
  const classes = useStyles();
  return (
    <div>
      
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar className={classes.appbarWrapper}>
        
          <h1 className={classes.appbarTitle}>
            News<span className={classes.colorText}>HUB.</span>
          </h1>
          <Search />
          
          <Icon />
            
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Topbar;
