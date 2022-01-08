import { useCallback, useState } from "react";
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
import { AuthContext } from "./shared/context/AuthContext";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const login = useCallback(() => {
    setIsLoggedIn(true);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn) {
    routes = (<Switch>
      <Route exact path="/">
        <Users />
      </Route>
      <Route exact path="/:userId/places">
        <UserPlaces />
      </Route>
      <Route exact path="/places/:placeId">
        <UpdatePlace />
      </Route>
      <Route exact path="/places/new">
        <NewPlace />
      </Route>
      <Redirect to="/" />
    </Switch>)
    
  } else {
    routes = (<Switch>
      <Route exact path="/">
        <Users />
      </Route>
      <Route exact path="/:userId/places">
        <UserPlaces />
      </Route>

      <Route exact path="/auth">
        <Authenticate />
      </Route>
      <Redirect to="/auth" />
    </Switch>)

  }
  return (
    <AuthContext.Provider
      value={{ isLoggedIn: isLoggedIn, login: login, logout: logout }}
    >
      <Router>
        <MainNavigation />
        <main>
          {routes}
        </main>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;
