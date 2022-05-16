import React from "react";
import "./Profile.css";
import { Route } from "react-router-dom";
import Bio from "../Bio/Bio";
import Timer from "../Timer/Timer";

function Profile(props) {
  return (
    <>
    <Route exact path="/worker">
    <section className="profile">
      <Bio name={props.name} department={props.department}/>
        <Timer />
        <button className="profile__button" arialabel="Open" onClick={props.handlePopupOpen}></button>
    </section>
    </Route>
    <Route exact path="/supervisor">
    <section className="profile profile__supervisor">
      <Bio name={props.name} department={props.department}/>
    </section>
    </Route>
    </>
  );
}

export default Profile;