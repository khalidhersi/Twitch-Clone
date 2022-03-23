import React from "react";
import "./SideNav.scss";
import Channel from "../Channel/Channel";

const SideNav = () => {
  return (
    <div className="sidenav">
      <div className="sidenav__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://talenthouse-res.cloudinary.com/image/upload/c_limit,fl_progressive,h_1280,w_1280/v1509508646/user-873992/profile/f4me7cow9lybxespvxnb.jpg"
          name="KLD"
          followers="9001"
        />
        <Channel
          avatar="https://en.freejpg.com.ar/asset/900/6c/6c69/F100009454.jpg"
          name="Golden-Flame"
          followers="55"
        />
        <h5>RECOMMENDED CHANNELS</h5>
        <p className="sidenav__top__show-more">Show More</p>
      </div>
      <div className="sidenav__bottom">
        <div className="sidenav__bottom__container">
          <i className="sidenav__bottom__container__icon fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            placeholder="Search to Add Friends"
            className="sidenav__bottom__container__input"
          />
        </div>
      </div>
    </div>
  );
};

export default SideNav;
