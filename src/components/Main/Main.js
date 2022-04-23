import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Profile from "../Profile/Profile";
import Cards from "../Cards/Cards";
import ProfilePopup from "../ProfilePupup/ProfilePupup";

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
      <Header />
      <Profile handlePopupOpen={handlePopupOpen}/>
      <Cards />
      <Footer />
      <ProfilePopup isPopupOpen={isPopupOpen} handlePopupClose={handlePopupClose} handleOverlayClose={handleOverlayClose}/>
    </>
  );
}

export default Main;