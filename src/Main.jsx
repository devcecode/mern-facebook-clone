import React, { useEffect } from 'react'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Chat from './Chat'

import { useDispatch, useSelector } from 'react-redux'
const Main = () => {
  const dispatch = useDispatch()
  const active = useSelector(store => store.active)
  console.log( active )
  useEffect(() => {
    dispatch({
      type: 'SET_ACTIVE',
      current: 'home'
    })
  }, [])
  return (
    <div className="main">
      {/* Sidebar */}
      <Sidebar />

      {/* Feed */}
      <Feed />

      {/* Chat */}
      <Chat />
    </div>
  )
}

export default Main