import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { ProtectedRoute, PrivateRoute } from "./util/route-util";
import { useSelector, useDispatch } from "react-redux";
import { getUserId, loadToken } from "./components/store/actions/session";
import { getUsers } from "./components/store/actions/entities";

import CourseDietSelection from "./components/CourseDietSelection";
import Profile from "./components/Profile";

function App({ needLogin, loadToken }) {
  const token = useSelector((state) => state.sessions.currentToken);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoaded(true);
    loadToken();
  }, []);

  useEffect(() => {
    if (token) {
      dispatch(getUserId());
    }
  }, [token]);

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
            path="/home"
            exact={true}
            needLogin={needLogin}
            component={Homepage}
          />
          <PrivateRoute
            path="/"
            exact={true}
            needLogin={needLogin}
            component={CourseDietSelection}
          />
          <PrivateRoute
            path="/profile"
            exact={true}
            needLogin={needLogin}
            component={Profile}
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
