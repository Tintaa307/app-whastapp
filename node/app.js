import express from "express"
import cors from "cors"
import bd from "./connection/bd.js"
import chatRoutes from "./routers/Router.js"

const app = express()

// hello world

app.get("/", (req, res) => {
  res.send("Hello World")
})

// settings

app.use(cors())
app.use(express.json())
app.use("/chats", chatRoutes)

// Try connection

try {
  await bd.authenticate()
  console.log("Connection has been established successfully.")
} catch (error) {
  console.error("Unable to connect to the database:", error)
}

// listen port

app.listen(8000, () => {
  console.log("Server on port 8000")
})
