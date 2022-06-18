import { React, useState } from "react"
import "./nav.css"
import { useAuth0 } from "@auth0/auth0-react"
import { motion } from "framer-motion"
import LogoutButton from "../login/Logout"

const Nav = (props) => {
  const { user } = useAuth0()

  if (props.className === "dark") {
    document.querySelector(".header-container").classList.toggle("dark")
    document.querySelector(".opcion").classList.toggle("dark")
    document.querySelector(".container-img").classList.toggle("dark")
  }

  const toggleOptions = () => {
    const config = document.querySelector(".container-config")
    config.classList.toggle("appear")
  }

  return (
    <header className="header-container">
      <nav className="container-nav">
        <picture className="container-img">
          <img src={user.picture} alt="user-img" />
        </picture>
        <div className="container-opcions">
          <div className="opcion">
            <motion.i
              initial={{ y: 0 }}
              class="ri-donut-chart-fill"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.7 }}
            ></motion.i>
          </div>
          <div className="opcion">
            <motion.i
              initial={{ y: 0 }}
              class="ri-message-2-fill"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.7 }}
            ></motion.i>
          </div>
          <div className="opcion">
            <motion.i
              initial={{ y: 0 }}
              class="ri-more-2-fill"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.7 }}
              onClick={toggleOptions}
            ></motion.i>
          </div>
        </div>
        <div className="container-config">
          <div className="item">
            <h6>Nuevo grupo</h6>
          </div>
          <div className="item">
            <h6>Mensajes destacados</h6>
          </div>
          <div className="item">
            <h6>Configuracion</h6>
          </div>
          <div className="item">
            <LogoutButton />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
