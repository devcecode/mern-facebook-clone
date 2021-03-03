import React, { useEffect } from 'react'
import './css/marketplace.css'

import { useDispatch, useSelector } from 'react-redux'

const Marketplace = () => {
  const dispatch = useDispatch();
  const active = useSelector((store) => store.active);
  console.log(active);
  useEffect(() => {
    dispatch({
      type: "SET_ACTIVE",
      current: "marketplace",
    });
  }, []);
  return (
    <div className="marketplace">
      <h2>Marketplace</h2>
    </div>
  )
}

export default Marketplace
