import { React, useState, useEffect } from "react"
import { motion } from "framer-motion"
import "./create.css"
import axios from "axios"
import { Link, useNavigate, useParams } from "react-router-dom"

const URI = "http://localhost:8000/chats/"

const CompUpdateChat = () => {
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const navigate = useNavigate()
  const { id } = useParams()

  const updateChat = async (e) => {
    e.preventDefault()
    await axios.put(URI + id, {
      name: name,
      content: content,
    })
    navigate("/")
  }

  useEffect(() => {
    getChatById()
  }, [])

  const getChatById = async () => {
    const response = await axios.get(URI + id)
    setName(response.data.data.name)
    setContent(response.data.data.content)
  }

  return (
    <motion.div className="container-create-chat">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        className="title-update-chat"
      >
        Update chat
      </motion.h1>
      <form className="formulario" onSubmit={updateChat}>
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
          Update
        </motion.button>
        <Link className="back-to" to={"/"}>
          <i class="ri-arrow-left-line"></i>Volver
        </Link>
      </form>
    </motion.div>
  )
}

export default CompUpdateChat
