import './App.css';
import File from './Pages/File';
import { AppBar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import VideoPlayer from "./Components/VideoPlayer";
import Options from "./Components/Options";
import Notifications from "./Components/Notifications";

const useStyles = makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 100px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "600px",
    border: "2px solid black",

    [theme.breakpoints.down("xs")]: {
      width: "90%",
    },
  },
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
  },
  flexbox:{
    display: "flex",
  }
}));

function App() {
  const classes = useStyles();
  return (
    <>
    <div className={classes.wrapper}>
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography variant="h2" align="center">
          Video Call App
        </Typography>
      </AppBar>
      <div className={classes.flexbox}>
      <VideoPlayer />
      </div>
      {/* <Options>
        <Notifications />
      </Options> */}
    </div>
    </>
  );
}

export default App;
