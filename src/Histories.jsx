import React from 'react'
import './css/histories.css'
import History from './History'

import a from "./images/a.jpg";
import b from "./images/b.jpg";
import c from "./images/c.jpg";
import d from "./images/d.jpg";

import profileAvatar from "./images/profile_avatar.jpeg";

const Histories = () => {
  return (
    <div className="histories">
      {/* History */}
      <History image={a} username="Pedro" profileAvatar={profileAvatar} />
      <History image={b} username="Lucas" profileAvatar={profileAvatar} />
      <History image={c} username="Juan" profileAvatar={profileAvatar} />
      <History image={d} username="Isack" profileAvatar={profileAvatar} />
      <History />
      <History />
      {/* <History image="" username="" /> */}
    </div>
  );
}

export default Histories