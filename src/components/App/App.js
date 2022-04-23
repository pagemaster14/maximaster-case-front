import React from "react";
import { Route, Switch, withRouter} from "react-router-dom";
import Main from "../Main/Main";
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
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);