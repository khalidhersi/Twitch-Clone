import React from 'react'
import Profile from '../../Components/Profile/Profile';
import "./Body.scss";

const Body = () => {
  return (
    <div className='body'>
        <div className="body__left">
            <Profile />
        </div>
        <div className="body__right__placeholder">
        </div>
    </div>
  )
}

export default Body