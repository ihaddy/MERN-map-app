import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/oldNewPlace";
import UserPlaces from "./places/pages/UserPlaces";
import "./App.css";
import MainNavigation from "./shared/components/Navigation/MainNavigation";

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
