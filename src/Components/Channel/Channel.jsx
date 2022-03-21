import React from 'react'
import "./Channel.scss";

const Channel = (props) => {
  const {avater, name, followers} = props


  return (
    <div className='channel'>
        <div className="channel__details">
            <img src={avater} alt="" />
            <p className="channel__details__name">{name}</p>
        </div>
        <p className="channel__followers">{followers}</p>
    </div>
  )
}

export default Channel