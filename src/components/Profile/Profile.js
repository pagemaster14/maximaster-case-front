import React from "react";
import "./Profile.css";
import Bio from "../Bio/Bio";
import Timer from "../Timer/Timer";

function Profile(props) {
  return (
      <section className="profile">
    <Bio/>
    <Timer/>
    <button className="profile__button"></button>
    </section>
  );
}

export default Profile;