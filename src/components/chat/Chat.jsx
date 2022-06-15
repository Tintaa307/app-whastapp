import React from 'react'
import { useAuth0 } from "@auth0/auth0-react"
import './chat.css'

const Chat = () => {
  const { user } = useAuth0()
  return (
    <div className="container-chat">
      <nav className="container-chat-nav">
        <div className="container-content">
          <picture className="container-img">
            <img src={user.picture} alt="user" />
          </picture>
          <div className="container-info-user">
            <h1>{user.name}</h1>
            <p>{user.nickname}</p>
          </div>
          <div className="container-icons">
            <div className="opcion">
              <i class="ri-search-2-line"></i>
            </div>
            <div className="opcion">
              <i class="ri-link"></i>
            </div>
            <div className="opcion">
              <i class="ri-more-2-fill"></i>
            </div>
          </div>
        </div>
      </nav>
      <div className="container-chat-msg">
       
      </div>
      <div className="container-input-msg">
        <div className="container-emotes">
          <i class="ri-emotion-happy-line"></i>
        </div>
        <input type="text" placeholder='Type a message...' />
          <i class="ri-mic-fill"></i>
      </div>
    </div>
  )
}

export default Chat