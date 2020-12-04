import React from "react";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
function App() {
  return (
    <>
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
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/">
            <h1>My Home Page</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

// const AppContainer = () => {
//   const needLogin = useSelector((state) => !state.user.token);
//   const dispatch = useDispatch();
//   return <App needLogin={needLogin} loadToken={() => dispatch(loadToken())} />;
// };

export default App;
