

import { useContext, useEffect } from "react";
import WOW from "wow.js"; 
import { AppContext } from "../context/AppContext";
import MobileMenuBtn from "../components/navbar/MobileMenuBtn";
import ScrollTop from "../common/ScrollTop";

const Wrapper = ({ children }: any) => {
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
  const {isMobile}=useContext(AppContext)
  return (
    <> 
      {children}
      <ScrollTop/>
      {isMobile?( <MobileMenuBtn/>):null}
    </>
  );
};

export default Wrapper;
 