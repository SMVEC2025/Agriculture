

import { useEffect, useState } from "react";
import WOW from "wow.js";
import MobileMenuBtn from "../components/navbar/MobileMenuBtn";
import ScrollTop from "../common/ScrollTop";
import Popup from "../components/homes/home-3/Popup";

const Wrapper = ({ children }: any) => {
  const [showPopup, setShowPopup] = useState(() => {
    if (typeof window === "undefined") return false;
    return sessionStorage.getItem("bannerPopupShown") !== "true";
  });

  const handleClosePopup = () => {
    sessionStorage.setItem("bannerPopupShown", "true");
    setShowPopup(false);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Dynamically import bootstrap's JavaScript bundle
      import("bootstrap/dist/js/bootstrap.bundle.min.js")
        .then(() => {
        })
    }
  }, []);

  useEffect(() => {
    // Initialize WOW.js for animations
    const wow = new WOW({ live: false });
    wow.init();
  }, []);
  return (
    <>
      {children}
      <ScrollTop />
      <MobileMenuBtn />
      {showPopup && <Popup onClose={handleClosePopup} />}
    </>
  );
};

export default Wrapper;
