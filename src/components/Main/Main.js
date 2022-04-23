import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Cards from "../Cards/Cards";
import ProfilePopup from "../ProfilePupup/ProfilePupup";
import CreateTaskPopup from "../CreateTaskPopup/CreateTaskPopup";

function Main(props) {
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  function handlePopupOpen() {
      setIsPopupOpen(true);
    }
  
    function handlePopupClose() {
      setIsPopupOpen(false);
    }
  
    const handleOverlayClose = (event) => {
      if (event.target === event.currentTarget && isPopupOpen) {
        handlePopupClose();
      }
    };
  
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
      <Header handlePopupOpen={handlePopupOpen}/>
      <Profile handlePopupOpen={handlePopupOpen}/>
      <Cards />
      <Footer />
      <ProfilePopup isPopupOpen={isPopupOpen} handlePopupClose={handlePopupClose} handleOverlayClose={handleOverlayClose}/>
      <CreateTaskPopup/>
    </>
  );
}

export default Main;