import React from "react";
import "./Nav.scss";
import { Avatar } from "@material-ui/core";

const Nav = () => {
  return (
    <div className="nav">
      <div className="nav__left">
          <img src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c540.png" alt="twitch logo" className="nav__left__logo" />
            <h2 className="nav__left__text">Browse</h2>
            <h2 className="nav__left__text">Following</h2>
            <h2 className="nav__left__text">Browse</h2>
            <div className="nav__left__line"></div>
            <h2 className="nav__left__text">Esports</h2>
            <h2 className="nav__left__text">Music</h2>
            <i className="nav__left__icon fa-solid fa-ellipsis-vertical"></i>
      </div>

      <div className="nav__center">
        <input type="text" className="nav__center__input" />
        <div className="nav__center__container">
            <i className="nav__center__container__icon fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
      
      <div className="nav__right">
        <div className="nav__right__container">
          <i className="nav__right__icon fa-solid fa-crown" />
          <i className="nav__right__icon fa-solid fa-inbox" />
          <i className="nav__right__icon fa-solid fa-comment-alt" />
          <div className="nav__right__bits">
            <i className="nav__right__bits__icon fa-solid fa-gem" />
            <h4 className="nav__right__bits__text">Get Bits</h4>
          </div>
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Nav;
