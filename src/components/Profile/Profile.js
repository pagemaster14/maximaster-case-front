import React from "react";
import "./Profile.css";
import { Route } from "react-router-dom";
import Bio from "../Bio/Bio";
import Timer from "../Timer/Timer";

function Profile(props) {
  return (
    <section className="profile">
      <Bio />
      <Route exact path="/">
        <Timer />
        <button className="profile__button" arialabel="Open" onClick={props.handlePopupOpen}></button>
      </Route>
    </section>
  );
}

export default Profile;