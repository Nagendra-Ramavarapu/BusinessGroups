import React from "react";
import NewsFeed from "./NewsFeed";
import HigherLevelGroupList from "./HigherLevelGroupList";
import Navbar from "./Navbar";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "../Components/MobileComponents/NavbarMobile";
import HigherLevelGroupListMobile from "../Components/MobileComponents/HigherLevelGroupListMobile";

const Home = () => {
  const isMobile = useMediaQuery("(min-width: 320px) and (max-width: 600px)");
  return (
    <div>
      {isMobile && isMobile ? (
        <div style={{ background: "#9c96962b" }}>
          <NavbarMobile />
          <HigherLevelGroupListMobile />
        </div>
      ) : (
        <div>
          <NavbarDesktop />
          <HigherLevelGroupList />
        </div>
      )}
    </div>
  );
};

export default Home;
//Worked on SettingUp MongoDB Database but faced some errors
