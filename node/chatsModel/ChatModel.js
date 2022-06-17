import bd from "../connection/bd.js"
import { DataTypes } from "sequelize"

const ChatModel = bd.define("Chat", {
  name: { type: DataTypes.STRING },
  content: { type: DataTypes.STRING },
})

export default ChatModel
