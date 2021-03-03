import React from 'react'
import './css/history.css'

const History = ({ image, username, profileAvatar }) => {
  return (
    <div className="history">
      {
        image ? <img src={image ? image : "null"} alt="" className="image" /> : null 
      }

      {
        profileAvatar ? <img src={profileAvatar} className="history__profile__avatar" alt="" /> : null
      }
      
      {
        username ? <p className="username">{username}</p> : null
      }
      
    </div>
  );
};

export default History