import { useState } from "react"
import "./App.css"
import { useAuth0 } from "@auth0/auth0-react"
import Nav from "./components/nav/Nav"
import LoginButton from "./components/login/Login.jsx"
import Chats from "./components/chats/Chats"
import { motion } from "framer-motion"
import Chat from "./components/chat/Chat"
import ButtonDarkMode from "./components/buttonDark/DarkMode"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CompCreateChat from "./chatsConfig/CreateChat"
import CompUpdateChat from "./chatsConfig/EditChat"
import { DarkContext } from "./context/darkContext"

function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <div className="container-all">
      {isAuthenticated ? (
        <>
          <BrowserRouter>
            <DarkContext>
              <ButtonDarkMode />
              <Nav />
              <Chat />
              <Routes>
                <Route path="/" element={<Chats />} />
                <Route path="/create" element={<CompCreateChat />} />
                <Route path="/update/:id" element={<CompUpdateChat />} />
              </Routes>
            </DarkContext>
          </BrowserRouter>
        </>
      ) : (
        <>
          <div className="container-login">
            <motion.div
              initial={{ x: -320, opacity: 0 }}
              animate={{ x: -240, opacity: 1 }}
              transition={{
                duration: 0.7,
                type: "spring",
                bounce: 0.8,
                delay: 1,
              }}
              className="container-content"
            >
              <div className="container-logo">
                <i class="ri-whatsapp-fill"></i>
                <h1>Sign in to WhatsApp</h1>
              </div>
              <LoginButton />
            </motion.div>
          </div>
        </>
      )}
    </div>
  )
}

export default App
