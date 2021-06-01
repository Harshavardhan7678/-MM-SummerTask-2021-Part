import { makeStyles } from "@material-ui/core/styles";
import ImageCard from "./ImageCard";

const useStyles = makeStyles((theme) => ({
  root: {
    minheight: "100vh",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function HeadDown() {
  const classes = useStyles();
  return (
      <div className={classes.root} id="Head-Down">
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
        <ImageCard />
      </div>
  );
}

export default HeadDown;
