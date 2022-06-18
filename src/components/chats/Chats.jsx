import { React, useState, useEffect } from "react"
import "./chats.css"
import { Link } from "react-router-dom"
import axios from "axios"
import { motion } from "framer-motion"

const URI = "http://localhost:8000/chats/"

const Chats = () => {
  const [chats, setChats] = useState([])
  useEffect(() => {
    getChats()
  }, [])

  // obtener chats
  const getChats = async () => {
    const response = await axios.get(URI)
    setChats(response.data.data)
  }

  // eliminar chat
  const deleteChat = async (id) => {
    await axios.delete(`${URI}${id}`)
    getChats()
  }

  // update chat
  const updateChat = async (id, name, content) => {
    await axios.put(`${URI}${id}`, { name, content })
    getChats()
  }

  // filter chats
  const filterChats = (e) => {
    const text = document.querySelector(".busqueda").value
    const filteredChats = chats.filter((chat) => {
      while (text === "") {
        return getChats()
      }
      return chat.name.toLowerCase().includes(text.toLowerCase())
    })
    setChats(filteredChats)
  }

  return (
    <main className="container-chats">
      <div className="container-content">
        <div className="container-search">
          <input
            onChange={filterChats}
            type="text"
            className="busqueda"
            max={"20"}
          />
          <i class="ri-search-2-line"></i>
        </div>
        <div className="container-add-chat">
          <button className="btn-add-chat">
            <Link to={"/create"} className="link">
              Add new chat...
            </Link>
          </button>
        </div>
        <div className="container-chats-list">
          <div className="container-chat">
            {chats.map((chat) => (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  bounce: 0.3,
                  delay: chat.id * 0.1,
                }}
                className="container-chat-item"
                key={chat.id}
              >
                <div className="container-chat-item-header">
                  <div className="container-chat-item-header-name">
                    <h2>{chat.name}</h2>
                  </div>
                  <div className="container-chat-item-header-delete">
                    <i
                      className="ri-delete-bin-line"
                      onClick={() => deleteChat(chat.id)}
                    ></i>
                  </div>
                  <div className="container-chat-item-header-update">
                    <Link to={`/update/${chat.id}`} className="link">
                      <i
                        className="ri-pencil-line"
                        onClick={() =>
                          updateChat(chat.id, chat.name, chat.content)
                        }
                      ></i>
                    </Link>
                  </div>
                </div>
                <div className="container-chat-item-content">
                  <p>{chat.content}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
  )
}

export default Chats
