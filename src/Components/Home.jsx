import React from "react";
import NewsFeed from "./NewsFeed";
import HigherLevelGroupList from "./HigherLevelGroupList";
import Navbar from "./Navbar";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavbarDesktop from './NavbarDesktop'

const Home = () => {
  const isMobile = useMediaQuery('(min-width: 320px) and (max-width: 600px)');
  return (
    <div>
     {isMobile && isMobile ? <Navbar />: <NavbarDesktop/>} 
      <HigherLevelGroupList />
    </div>
  );
};

export default Home;
//Worked on SettingUp MongoDB Database but faced some errors