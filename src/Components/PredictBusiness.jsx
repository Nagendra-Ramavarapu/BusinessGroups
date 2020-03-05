import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import Navbar from "./Navbar";
import NavbarMobile from "../Components/MobileComponents/NavbarMobile";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";

const PredictBusiness = () => {
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 600px)");
  return (
    <div align="center">
      {isMobile && isMobile ? <NavbarMobile /> : <NavbarDesktop />}
      <div align="center">Welcome to Business Prediction Page !!!!</div>
    </div>
  );
};
export default PredictBusiness;
