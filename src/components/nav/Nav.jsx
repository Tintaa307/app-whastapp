import React from 'react'
import './nav.css'
import { useAuth0 } from "@auth0/auth0-react"
import { motion } from 'framer-motion'

const Nav = () => { 
  const { user ,isAuthenticated } = useAuth0()
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
              transition={{ duration: 0.7, type: 'spring', bounce: 0.7 }} ></motion.i>
          </div>
          <div className="opcion">
            <motion.i 
              initial={{ y: 0 }}
              class="ri-message-2-fill"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.7, type: 'spring', bounce: 0.7 }} ></motion.i>
          </div>
          <div className="opcion">
            <motion.i 
              initial={{ y: 0 }}
              class="ri-more-2-fill"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.7, type: 'spring', bounce: 0.7 }} ></motion.i>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Nav