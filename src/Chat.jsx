import React from 'react'
import './css/chat.css'

import AddIcon from '@material-ui/icons/Add';
const Chat = () => {
  return (
    <div className="chat">
      <div className="chat__container">
        <h2>Conversaciones de Grupo</h2>
        <a href="#">
          <span>
            <AddIcon className="add" />
          </span>{" "}
          Crear nuevo grupo
        </a>
      </div>
    </div>
  );
}

export default Chat
