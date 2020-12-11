import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Navbar from "./components/Navbar";
import { ProtectedRoute, PrivateRoute } from "./util/route-util";
import { useSelector, useDispatch } from "react-redux";
import { getUserId, loadToken } from "./components/store/actions/session";
import CourseDietSelection from "./components/CourseDietSelection";
import SavedRecipes from "./components/SavedRecipes";
import "./index.css";

function App({ needLogin, loadToken }) {
  const token = useSelector((state) => state.sessions.currentToken);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, [loadToken]);

  useEffect(() => {
    if (token) {
      dispatch(getUserId());
    }
  }, [token, dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <BrowserRouter>
        <Navbar needLogin={needLogin} />
        <Switch>
          <ProtectedRoute
            path="/login"
            exact={true}
            needLogin={needLogin}
            component={Login}
          />
          <ProtectedRoute
            path="/signup"
            exact={true}
            needLogin={needLogin}
            component={Signup}
          />

          <PrivateRoute
            path="/"
            exact={true}
            needLogin={needLogin}
            component={CourseDietSelection}
          />
          <PrivateRoute
            path="/savedRecipes"
            exact={true}
            needLogin={needLogin}
            component={SavedRecipes}
          />
        </Switch>
      </BrowserRouter>
    </>
  );
}

const AppContainer = () => {
  const needLogin = useSelector((state) => !state.sessions.currentToken);
  const dispatch = useDispatch();
  return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
};

export default AppContainer;
