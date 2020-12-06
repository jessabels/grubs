import React, { useState, useEffect } from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import Homepage from "./components/Homepage";
import Logout from "./components/auth/Logout";
import Navbar from "./components/Navbar";
import { ProtectedRoute, PrivateRoute } from "./util/route-util";
import { useSelector, useDispatch } from "react-redux";
import { getUserId, loadToken } from "./components/store/actions/session";
import CourseDietSelection from "./components/CourseDietSelection";

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
      console.log("theres a token");
      dispatch(getUserId());
    }
  }, [token]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <Navbar needLogin={needLogin} />

      {/* <Login />
      <Signup /> */}
      <BrowserRouter>
        {/* <nav>
          <ul>
            <li>
              <NavLink to="/" activeClass="active">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/login" activeClass="active">
                Login
              </NavLink>
            </li>
            <li>
              <NavLink to="/signup" activeClass="active">
                Sign Up
              </NavLink>
            </li>
          </ul>
        </nav> */}
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
