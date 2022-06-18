import axios from "axios"
import { React, useState } from "react"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import "./create.css"

const URI = "http://localhost:8000/chats/"

const CompCreateChat = () => {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()

  // save chats
  const saveChat = async (e) => {
    e.preventDefault()
    await axios.post(URI, { name, content })
    navigate("/")
  }

  return (
    <motion.div className="container-create-chat">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        Create a new chat
      </motion.h1>
      <form className="formulario" onSubmit={saveChat}>
        <motion.input
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="txt-name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <motion.textarea
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.5 }}
          className="content-area"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <motion.button
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 2 }}
          className="btn-enviar"
          type="submit"
        >
          Create
          {console.log("click")}
        </motion.button>
        <Link className="back-to" to={"/"}>
          <i class="ri-arrow-left-line"></i>Volver
        </Link>
      </form>
    </motion.div>
  )
}

export default CompCreateChat
