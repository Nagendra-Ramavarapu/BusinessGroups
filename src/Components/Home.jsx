import React from "react";
import NewsFeed from "./NewsFeed";
import HigherLevelGroupList from "./HigherLevelGroupList";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <HigherLevelGroupList />
      {/* <NewsFeed /> */}
    </div>
  );
};

export default Home;
