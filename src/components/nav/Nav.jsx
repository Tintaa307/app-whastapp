import { React, useContext, useState } from "react"
import "./nav.css"
import { useAuth0 } from "@auth0/auth0-react"
import { motion } from "framer-motion"
import LogoutButton from "../login/Logout"
import themeContext from "../../context/darkContext"

const Nav = (props) => {
  const { user } = useAuth0()

  const { darkmode } = useContext(themeContext)

  const toggleOptions = () => {
    const config = document.querySelector(".container-config")
    config.classList.toggle("appear")
  }

  return (
    <header className={["header-container", darkmode].join(" ")}>
      <nav className="container-nav">
        <picture className={["container-img", darkmode].join(" ")}>
          <img src={user.picture} alt="user-img" />
        </picture>
        <div className="container-opcions">
          <div className={["opcion", darkmode].join(" ")}>
            <motion.i
              initial={{ y: 0 }}
              class="ri-donut-chart-fill"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.7 }}
            ></motion.i>
          </div>
          <div className={["opcion", darkmode].join(" ")}>
            <motion.i
              initial={{ y: 0 }}
              class="ri-message-2-fill"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.7 }}
            ></motion.i>
          </div>
          <div className={["opcion", darkmode].join(" ")}>
            <motion.i
              initial={{ y: 0 }}
              class="ri-more-2-fill"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.7, type: "spring", bounce: 0.7 }}
              onClick={toggleOptions}
            ></motion.i>
          </div>
        </div>
        <div className={["container-config", darkmode].join(" ")}>
          <div className={["item", darkmode].join(" ")}>
            <h6>Nuevo grupo</h6>
          </div>
          <div className={["item", darkmode].join(" ")}>
            <h6>Mensajes destacados</h6>
          </div>
          <div className={["item", darkmode].join(" ")}>
            <h6>Configuracion</h6>
          </div>
          <div className={["item", darkmode].join(" ")}>
            <LogoutButton />
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav
