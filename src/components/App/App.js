import React from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Supervisor from "../Supervisor/Supervisor";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {
  return (
    <CurrentUserContext.Provider>
      <div className="page">
        <Switch>
          <Route
            exact
            path="/"
            component={Main}
          />
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/supervisor">
            <Supervisor />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);