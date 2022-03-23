import React from "react";
import "./Channel.scss";

const Channel = (props) => {
  const { avatar, name, followers } = props;

  return (
    <div className="channel">
      <div className="channel__details">
        <img
          src={avatar}
          alt="PROFILE PICTURE"
          className="channel__details__image"
        />
        <p className="channel__details__name">{name}</p>
      </div>
      <p className="channel__followers">🔴 {followers}</p>
    </div>
  );
};

export default Channel;
