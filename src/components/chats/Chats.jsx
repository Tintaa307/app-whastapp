import { React, useState } from 'react'
import './chats.css'

const Chats = () => {
  return (
    <main className="container-chats">
      <div className="container-content">
        <div className="container-search">
          <input 
            type="text" 
            className='busqueda'
            max={"20"} />
          <i class="ri-search-2-line"></i>
        </div>
        <div className="container-add-chat">
          <button className='btn-add-chat' >Add new chat...</button>
        </div>
      </div>
    </main>
  )
}

export default Chats