import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Cards from "../Cards/Cards";
import ProfilePopup from "../ProfilePupup/ProfilePupup";
import CreateTaskPopup from "../CreateTaskPopup/CreateTaskPopup";

function Main(props) {
  const [isProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
  const [isCreateTaskPopupOpen, setIsCreateTaskPopupOpen] = React.useState(false);

  function handleProfilePopupOpen() {
    setIsProfilePopupOpen(true);
  }

  function handleCreateTaskPopupOpen() {
    setIsCreateTaskPopupOpen(true);
  }

  function handlePopupClose() {
    setIsProfilePopupOpen(false);
    setIsCreateTaskPopupOpen(false);
  }

  React.useEffect(() => {
    const closeByEscape = (e) => {
      if (e.key === "Escape") {
        handlePopupClose();
      }
    };
    document.addEventListener("keydown", closeByEscape);

    return () => document.removeEventListener("keydown", closeByEscape);
  }, []);

  return (
    <>
      <Header handlePopupOpen={handleProfilePopupOpen} />
      <Profile handlePopupOpen={handleCreateTaskPopupOpen} />
      <Cards />
      <Footer />
      <ProfilePopup isPopupOpen={isProfilePopupOpen} handlePopupClose={handlePopupClose} />
      <CreateTaskPopup isPopupOpen={isCreateTaskPopupOpen} handlePopupClose={handlePopupClose} />
    </>
  );
}

export default Main;