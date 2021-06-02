import { CssBaseline } from '@material-ui/core';
import Topbar from './Components/Topbar';
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/Login/Login';

function App() {
  return (
    <> 

    <Topbar />
    <Login />
    <CssBaseline/>
    
    </>
  );
}

export default App;