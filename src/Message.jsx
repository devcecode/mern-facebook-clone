import React, { useState } from 'react'
import './css/message.css'
import profileAvatar from './images/profile_avatar.jpeg'
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import {useDispatch, useSelector} from 'react-redux'
const Message = () => {
  const posts = useSelector(store => store.posts)
  const [descriptionInput, setDescriptionInput] = useState('')

  // console.log( posts )

  const dispatch = useDispatch()

  const handleSubmit = e => {
    e.preventDefault()
    setDescriptionInput('')

    const myForm = document.forms[0];
    const formData = new FormData(myForm);

    const URI =
      "https://devce-mern-facebook-app.herokuapp.com/api/new";
    const options = {
      method: 'POST',
      body: formData
    }
    fetch(URI, options)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: 'SET_POSTS',
        data: data
      })
    })
    .catch(err => console.log( err ))
  }

  return (
    <div className="message">
      <div className="message__container">
        <form autoComplete="off">
          <div className="message__top">
            <img src={profileAvatar} alt="" className="message__profile__avatar"/>
            <input
              type="text"
              name="description"
              placeholder="¿Qué estás pensando Devce Code?"
              value={descriptionInput}
              onChange={e => setDescriptionInput(e.target.value)}
            />
          </div>
          <div className="message__bottom">
            <label htmlFor="files"><PhotoLibraryOutlinedIcon className="photo__or__video__icon"/>Foto/Video</label>
            <input type="file" multiple name="files" id="files" />
          </div>
          <button type="submit" onClick={handleSubmit}></button>
        </form>
      </div>
    </div>
  );
}

export default Message
