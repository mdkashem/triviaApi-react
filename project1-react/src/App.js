import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import HomePage from './components/pages/HomePage';
import{ AdminLogin} from './components/pages/adminLoginPage';
import ViewQuestion from './components/pages/ViewQuestion';
import ViewPlayerPage from './components/pages/ViewPlayerPage';
import Logout from './components/pages/Logoutpage';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
function App() {
  return (
    <>
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/adminLogin" component={AdminLogin} />
        <Route path="/view-question" component={ViewQuestion} />
        <Route path="/view-player" component={ViewPlayerPage} />
        <Route path="/logout" component={Logout} />
        <Route path="/" render={()=> <div>404 NOT FOUND :)</div>}/>   
      </Switch>
    </Router>
    <Footer />
    </>
    
  );
}
// project 1
export default App;
