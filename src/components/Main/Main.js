import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Cards from "../Cards/Cards";
import ProfilePopup from "../ProfilePupup/ProfilePupup";

function Main(props) {
  return (
    <>
      <Header />
      <Profile />
      <Cards />
      <Footer />
      <ProfilePopup />
    </>
  );
}

export default Main;