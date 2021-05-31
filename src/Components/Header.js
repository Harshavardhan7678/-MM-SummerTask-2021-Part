import { makeStyles } from "@material-ui/core/styles";
import { Collapse, IconButton } from "@material-ui/core";
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

  container: {
    textAlign: "center",
  },

  title: {
    color: "#D0D0D0",
    fontSize: "3rem",
  },

  colorText: {
    color: "#3CC924",
  },

  goDown: {
    color: "#D0D0D0",
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
