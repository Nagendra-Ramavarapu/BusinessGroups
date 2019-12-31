import React from "react";
import store from "../Store/Store";
import Avatar from "@material-ui/core/Avatar";
import AccountBalanceWalletOutlinedIcon from '@material-ui/icons/AccountBalanceWalletOutlined';
import NotificationsNoneRoundedIcon from '@material-ui/icons/NotificationsNoneRounded';
import HomeRoundedIcon from "@material-ui/icons/HomeRounded";
import GroupAddRoundedIcon from "@material-ui/icons/GroupAddRounded";
import GroupRoundedIcon from "@material-ui/icons/GroupRounded";
import BusinessCenterTwoToneIcon from "@material-ui/icons/BusinessCenterTwoTone";
import InfoTwoToneIcon from "@material-ui/icons/InfoTwoTone";
import HelpTwoToneIcon from "@material-ui/icons/HelpTwoTone";
import FeedbackTwoToneIcon from "@material-ui/icons/FeedbackTwoTone";
import SettingsTwoToneIcon from "@material-ui/icons/SettingsTwoTone";
import ListIcon from '@material-ui/icons/List';

const generalItems = [
    {
      name: "Home",
      click: history => {
        if (!(history.location && history.location.pathname === "/Home"))
          history.push("/Home");
      },
      icon: <HomeRoundedIcon />
    },
    {
      name: "NewsFeed",
      click: history => {
        if (!(history.location && history.location.pathname === "/NewsFeed"))
          history.push("/NewsFeed");
      },
      icon: <ListIcon />
    },


    
    {
      name: "Create group",
      click: history => {
        if (!(history.location && history.location.pathname === "/CreateGroup"))
          history.push("/CreateGroup");
      },
      icon: <GroupAddRoundedIcon />
    },
    {
      name: "Join Group",
      click: history => {
        if (!(history.location && history.location.pathname === "/JoinGroup"))
          history.push("/JoinGroup");
      },
      icon: <GroupRoundedIcon />
    },
    {
      name: "Predict Business",
      click: () => {},
      icon: <BusinessCenterTwoToneIcon />
    }
  ];

  const appItems = [
    {
      name: "About",
      click: () => {},
      icon: <InfoTwoToneIcon />
    },
    {
      name: "Help",
      click: () => {},
      icon: <HelpTwoToneIcon />
    },
    {
      name: "Feedback",
      click: () => {},
      icon: <FeedbackTwoToneIcon />
    },
    {
      name: "Settings",
      click: () => {},
      icon: <SettingsTwoToneIcon />
    }
  ];

  const toolbarItems = [
    {
      name:"Profile",
      click: ()=>{},
      icon:<Avatar> { store.getState().userReducer.UserInfo &&
        store.getState().userReducer.UserInfo.Name.charAt(0)}</Avatar>
    },
    {
      name:"Wallets",
      click: ()=>{},
      icon:<AccountBalanceWalletOutlinedIcon/>
    },
    {
      name:"Notifications",
      click: ()=>{},
      icon:<NotificationsNoneRoundedIcon/>
    }
  ]

  let NavbarItems = {generalItems,appItems,toolbarItems}

  export default NavbarItems