import React from "react";
import "./RecentItem.scss";

const RecentItem = (props) => {
  const { url, title } = props;

  return (
    <div className="item">
      <iframe
        width="400"
        height="235"
        src={url}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div className="item__details">
        <img
          src="https://talenthouse-res.cloudinary.com/image/upload/c_limit,fl_progressive,h_1280,w_1280/v1509508646/user-873992/profile/f4me7cow9lybxespvxnb.jpg"
          alt="profile picture"
          className="item__details__image"
        />
        <div className="item__details__text">
          <h4>{title}</h4>
          <p>KLD</p>
          <p>Entertainment</p>
        </div>
      </div>
    </div>
  );
};

export default RecentItem;
