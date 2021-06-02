import { CssBaseline } from '@material-ui/core';
import Topbar from './Components/Topbar';
import Home from './Pages/Home/Home';
import Single from './Pages/Single/Single';
import Write from './Pages/Write/Write';
import Settings from './Pages/Settings/Settings';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';

function App() {
  return (
    <> 

    <Topbar />
    <Register />
    <CssBaseline/>
    
    </>
  );
}

export default App;