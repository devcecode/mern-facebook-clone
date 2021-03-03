import React, { useEffect } from 'react'
import './css/posts.css'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux'

const Posts = () => {

  const dispatch = useDispatch()

  const posts = useSelector(store => store.posts)

  useEffect(() => {
    fetch("https://devce-mern-facebook-app.herokuapp.com/api/posts")
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: "SET_POSTS",
          data: data,
        });
      })
      .catch((err) => console.log(err));
  }, [])



  return (
    <div className="posts">
      {/* Post */}
      {/* <Post description="" file="" timestamp=""/> */}

      {
        posts.map(({description, files, timestamp}) => (
          <Post key={description} description={description} files={files} timestamp={timestamp}/>
        ))
      }
    </div>
  )
}

export default Posts