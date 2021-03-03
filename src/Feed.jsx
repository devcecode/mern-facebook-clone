import React from 'react'
import Histories from './Histories'
import './css/feed.css'
import Message from './Message'
import Posts from './Posts'
const Feed = () => {
  return (
    <div className="feed">
      {/* Histories */}
      <Histories />

      {/* Message */}
      <Message />

      {/* Posts */}
      <Posts />
    </div>
  )
}

export default Feed
