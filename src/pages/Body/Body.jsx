import React from "react";
import Profile from "../../Components/Profile/Profile";
import Stream from "../../Components/Stream/Stream";
import "./Body.scss";

const Body = () => {
  return (
    <div className="body">
      <Stream />
      <div className="body__left">
        <Profile />
      </div>
      <div className="body__right__placeholder"></div>
    </div>
  );
};

export default Body;
