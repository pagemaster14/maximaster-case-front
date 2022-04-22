import React from "react";
import { Route, Switch, withRouter, useHistory, Redirect } from "react-router-dom";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Login from "../Login/Login";
import Register from "../Register/Register";
import NotFound from "../NotFound/NotFound";
import mainApi from "../../ulits/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function App() {

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route
            exact
            path="/"
            component={Main}
            getDataRequestStatus={getDataRequestStatus}
          />
          <ProtectedRoute
            exact
            path="/movies"
            component={Movies}
            savedMovies={savedMovies}
            onMovieSave={handleSaveMovie}
            onMovieDelete={handleDeleteMovie}
            saveMovieRequestStatus={saveMovieRequestStatus}
            setSaveMovieRequestStatus={setSaveMovieRequestStatus}
            deleteMovieRequestStatus={deleteMovieRequestStatus}
            getDataRequestStatus={getDataRequestStatus}
          />
          <ProtectedRoute
            exact
            path="/saved-movies"
            component={SavedMovies}
            savedMovies={savedMovies}
            onMovieDelete={handleDeleteMovie}
            deleteMovieRequestStatus={deleteMovieRequestStatus}
            getDataRequestStatus={getDataRequestStatus}
          />
          <ProtectedRoute exact path="/profile"
            component={Profile} signOut={signOut}
            onUpdateUser={handleUpdateUser}
            requestStatus={profileRequestStatus}
            setProfileRequestStatus={setProfileRequestStatus}
            isSending={isProfileDataSending} getDataRequestStatus={getDataRequestStatus} />
          <Route path="/signup">
            {loggedIn ? <Redirect to="/" /> :
              <Register handleRegister={handleRegister} requestStatus={registerRequestStatus} isSending={isRegisterDataSending} />
            }
          </Route>
          <Route path="/signin">
            {loggedIn ? <Redirect to="/" /> :
              <Login handleLogin={handleLogin} requestStatus={loginRequestStatus} isSending={isLoginDataSending} />
            }
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default withRouter(App);