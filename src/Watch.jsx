import React, { useEffect } from 'react'
import './css/watch.css'

import { useDispatch, useSelector } from 'react-redux'
const Watch = () => {
  const dispatch = useDispatch();
  const active = useSelector((store) => store.active);
  console.log(active);
  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE",
      current: "watch",
    });
  }, []);
  return (
    <div className="watch">
      <h2>Watch</h2>
    </div>
  )
}

export default Watch
