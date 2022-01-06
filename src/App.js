import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import UpdatePlace from "./places/pages/UpdatePlace";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import Authenticate from "./user/pages/Authenticate";

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route exact path="/:userId/places">
          <UserPlaces />
        </Route>
        <Route exact path="/places/new">
          <NewPlace />
        </Route>
        <Route exact path="/places/:placeId">
          <UpdatePlace />
        </Route>
        <Route exact path="/auth">
          <Authenticate />
        </Route>
        <Route exact path="/">
          <Users />
        </Route>
        
        <Redirect to="/" />
      </Switch>
      </main>
      
    </Router>
  );
}

export default App;
