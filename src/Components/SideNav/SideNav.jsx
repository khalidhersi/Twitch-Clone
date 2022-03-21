import React from 'react';
import "./SideNav.scss";
import twitchLogo from "../../assets/images/twitch-logo.png"
import Channel from '../Channel/Channel';

const SideNav = () => {
  return (
    <div className='sidenav'>
        <h3>FOLLOWED CHANNELS</h3>
        <Channel avatar={twitchLogo} name="KLD" followers="9001"/>
        <Channel avatar={twitchLogo} name="Golden-Flame" followers="55"/>
        <h3>RECOMMENDED CHANNELS</h3>
        <p className="sidenav__top__show-more">Show More</p>
    </div>
  )
}

export default SideNav