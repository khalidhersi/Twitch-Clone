import React from "react";
import RecentItem from "../RecentItem/RecentItem";
import "./Profile.scss";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile__top">
        <div className="profile__top__left">
          <img
            src="https://talenthouse-res.cloudinary.com/image/upload/c_limit,fl_progressive,h_1280,w_1280/v1509508646/user-873992/profile/f4me7cow9lybxespvxnb.jpg"
            alt="profile picture"
            className="profile__top__left__image"
          />
          <div className="profile__top__left__details">
            <h1>KLD</h1>
            <h3>9001 Followers</h3>
          </div>
        </div>
        <div className="profile__top__right">
          <i className="fas fa-heart graybg profile__top__right__icon"></i>
          <i className="fas fa-bell graybg profile__top__right__icon"></i>
          <i className="fas fa-ellipsis-v profile__top__right__icon"></i>
        </div>
      </div>
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <i className="fas fa-arrow-up"></i>
        </h2>
        <h2>Chat</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent broadcasts</h2>
        <div className="profile__recent__items">
          <RecentItem
            url={"https://www.youtube.com/watch?v=gLNIVdtaW3A&t=3029s"}
            title={"Tittle of video"}
          />
          <RecentItem
            url={"https://www.youtube.com/watch?v=LlvBzyy-558"}
            title={"Tittle of video"}
          />
          <RecentItem
            url={"https://www.youtube.com/watch?v=cUzklzVXJwo"}
            title={"Tittle of video"}
          />
          <RecentItem
            url={"https://www.youtube.com/watch?v=bJEaAinrccg"}
            title={"Tittle of video"}
          />
          <RecentItem
            url={"https://www.youtube.com/watch?v=9x2NaGkl6BI"}
            title={"Tittle of video"}
          />
        </div>
        <div className="profile__categories">
            <h2 className="profile__categories__text">KLD's recently streamed Categories</h2>
            <img src="https://static-cdn.jtvnw.net/ttv-boxart/Elden%20Ring.jpg" alt="game image" className="profile__categories__image" />
            <h3>Entertainment</h3>
        </div>
      </div>
    </div>
  );
};

export default Profile;
