import React from "react";
import "./Stream.scss";

const Stream = () => {
  const indicator = "OFFLINE";

  return (
    <div className="stream">
      <div className="stream__status">
        <div className="stream__status__container">
          <div className="stream__status__container__top">
            <div className="stream__status__container__top__indicator">
              {indicator}
            </div>
            <h2 className="stream__status__container__top__text">
              Check out the below streamsfrom KLD
            </h2>
          </div>
          <div className="stream__status__info">
            <i className="fas fa-ball stream__status__info__icon"></i>
            <p className="stream__status__info__text">
              You will be notified when KLD is live
            </p>
          </div>
        </div>
      </div>
      <div className="stream__video__embed">
        <iframe 
        width="500"
        height="295"
        src="https://wwww.youtube.com/embed/0pFqFGwL9mA" 
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Stream;
