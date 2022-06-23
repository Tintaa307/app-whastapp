import { createContext, useState } from "react"

const themeContext = createContext()

const DarkContext = ({ children }) => {
  const [darkmode, setDarkmode] = useState("")
  const toggleDarkmode = () => {
    setDarkmode(darkmode === "" ? "dark" : "")
  }

  const data = { darkmode, toggleDarkmode }

  return <themeContext.Provider value={data}>{children}</themeContext.Provider>
}

export { DarkContext }
export default themeContext
