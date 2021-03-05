import React from 'react'
import './css/post.css'

import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import PublicIcon from "@material-ui/icons/Public";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ShareIcon from "@material-ui/icons/Share";

import profileAvatar from './images/profile_avatar.jpeg'

const Post = ({description, files, timestamp}) => {
  return (
    <div className="post">
      <div className="post__header">
        <div className="post__profile__and__options">
          <div className="post__profile__and__options__left">
            <div className="post__profile">
              <img
                src={profileAvatar}
                className="post__profile__avatar"
                alt=""
              />
              <div className="post_profile__username__and__timestamp">
                <h2>
                  Devce Code <CheckCircleIcon className="check" />
                </h2>
                <p>
                  {timestamp}
                  <span>
                    <PublicIcon className="visibility" />
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="post__profile__and__options__right">
            <MoreHorizIcon className="more__icon" />
          </div>
        </div>
        <div className="post__description">{description}</div>
      </div>
      <div className="post__body">
        {files.map((f) => (
          <img
            key={f.originalname}
            src={f.secure_url}
            alt=""
          />
        ))}
      </div>
      <div className="post__footer">
        <button>
          <FavoriteBorderIcon className="post__footer__icon" />
          Me Gusta
        </button>
        <button>
          <ShareIcon className="post__footer__icon" />
          Compartir
        </button>
      </div>
    </div>
  );
}

export default Post