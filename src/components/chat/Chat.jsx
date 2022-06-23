import React, { useContext } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import "./chat.css"
import themeContext from "../../context/darkContext"

const Chat = () => {
  const { user } = useAuth0()
  const { darkmode } = useContext(themeContext)
  return (
    <div className="container-chat">
      <nav className={["container-chat-nav", darkmode].join(" ")}>
        <div className="container-content">
          <picture className="container-img">
            <img src={user.picture} alt="user" />
          </picture>
          <div className={["container-info-user", darkmode].join(" ")}>
            <h1>{user.name}</h1>
            <p>{user.nickname}</p>
          </div>
          <div className={["container-icons", darkmode].join(" ")}>
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
      <div className={["container-chat-msg", darkmode].join(" ")}></div>
      <div className={["container-input-msg", darkmode].join(" ")}>
        <div className={["container-emotes", darkmode].join(" ")}>
          <i class="ri-emotion-happy-line"></i>
        </div>
        <input type="text" placeholder="Type a message..." />
        <i class="ri-mic-fill"></i>
      </div>
    </div>
  )
}

export default Chat
