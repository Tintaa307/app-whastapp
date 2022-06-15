import { React, useState } from "react"
import './button.css'

const ButtonDarkMode = (props) => {

  const darkMode = () => {
    if(props.propiety === 'dark') {
      document.querySelector('.header-container').classList.toggle('dark')
      const opcion = document.querySelectorAll('.opcion')
      opcion.forEach(item => {
        item.classList.toggle('dark')
      })
      document.querySelector('.container-img').classList.toggle('dark')
      document.querySelector('.container-chats').classList.toggle('dark')
      document.querySelector('.container-search').classList.toggle('dark')
      document.querySelector('.container-add-chat').classList.toggle('dark')
      document.querySelector('.container-chat-nav').classList.toggle('dark')
      document.querySelector('.container-info-user').classList.toggle('dark')
      document.querySelector('.container-icons').classList.toggle('dark')
      document.querySelector('.container-input-msg').classList.toggle('dark')
      document.querySelector('.container-emotes').classList.toggle('dark')
      document.querySelector('.container-chat-msg').classList.toggle('dark')
    } else {
      document.querySelector('.header-container').classList.remove('dark')
      document.querySelector('.opcion').classList.remove('dark')
      document.querySelector('.container-img').classList.remove('dark')
      document.querySelector('.container-chats').classList.remove('dark')
      document.querySelector('.container-search').classList.remove('dark')
      document.querySelector('.container-add-chat').classList.remove('dark')
      document.querySelector('.container-chat-nav').classList.remove('dark')
      document.querySelector('.container-info-user').classList.remove('dark')
      document.querySelector('.container-icons').classList.remove('dark')
      document.querySelector('.container-input-msg').classList.remove('dark')
      document.querySelector('.container-emotes').classList.remove('dark')
      document.querySelector('.container-chat-msg').classList.remove('dark')
    }
  }

  return (
    <div className="container-btn">
      <label class="switch">
        <input onClick={darkMode} type="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  )
}

export default ButtonDarkMode