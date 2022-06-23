import { useContext } from "react"
import { React, useState } from "react"
import "./button.css"
import themeContext from "../../context/darkContext"

const ButtonDarkMode = () => {
  const { toggleDarkmode } = useContext(themeContext)
  return (
    <div className="container-btn-2">
      <label class="switch">
        <input onClick={toggleDarkmode} type="checkbox" />
        <span class="slider"></span>
      </label>
    </div>
  )
}

export default ButtonDarkMode
