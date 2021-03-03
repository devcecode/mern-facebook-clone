import React, { useEffect } from 'react'
import './css/friends.css'

import { useDispatch, useSelector } from 'react-redux'
const Friends = () => {
  const dispatch = useDispatch();
  const active = useSelector((store) => store.active);
  console.log(active);
  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE",
      current: "friends",
    });
  }, []);
  return (
    <div className="friends">
      <h2>Friends</h2>
    </div>
  )
}

export default Friends
