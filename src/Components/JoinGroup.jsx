import React from "react";
import { useHistory } from "react-router-dom";
import Navbar from './Navbar'
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavbarDesktop from './NavbarDesktop'

const JoinGroup = () => {
  const isMobile = useMediaQuery('(min-width: 320px) and (max-width: 600px)');
  return (
    <div align="center">
       {isMobile && isMobile ? <Navbar />: <NavbarDesktop/>} 
      <h1 > Welcome to Join Group Page</h1>
    </div>
  );
};

export default JoinGroup;
