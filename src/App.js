import { CssBaseline } from "@material-ui/core";
import Topbar from "./Components/Topbar";
import Home from "./Pages/Home/Home";
import Single from "./Pages/Single/Single";
import Write from "./Pages/Write/Write";
import Settings from "./Pages/Settings/Settings";
// import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SawoLogin from "./Pages/SawoLogin/SawoLogin";

function App() {
  return (
    <Router>
      <CssBaseline />
      <Topbar />


      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Single">
          <Single />
        </Route>
        <Route path="/Write">
          <Write />
        </Route>
        <Route path="/Settings">
          <Settings />
        </Route>
        <Route path="/SawoLogin">
          <SawoLogin />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
