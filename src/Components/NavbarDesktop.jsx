import NavbarItems from "./NavbarItems";
import React from "react";
import { makeStyles, withStyles, useTheme } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import Logo from "../Logo/logo3.png";

const useStyles = makeStyles(theme => ({
  desktopNavButton: {
    marginRight: "3%"
  },
  navbarIcon: {
    width: "18vw",
    maxWidth: "18vw",
    height: "18vh",
    maxheight: "18vh"
  }
}));
const NavbarDesktop = () => {
  const classes = useStyles();
  let history = useHistory();
  return (
    <div align="center">
      <img className={classes.navbarIcon} src={Logo} />
      <div align="center">
        {NavbarItems.generalItems.map(generalItem => (
          <Button
            className={classes.desktopNavButton}
            onClick={() => {
              generalItem.click(history);
            }}
          >
            {" "}
            {generalItem.icon}
            {generalItem.name}{" "}
          </Button>
        ))}
      </div>
    </div>
  );
};
export default NavbarDesktop;
