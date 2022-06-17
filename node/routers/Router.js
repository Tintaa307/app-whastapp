import express from "express"
import {
  showAllChats,
  showOneChat,
  createChat,
  updateChat,
  deleteChat,
} from "../controller/ChatController.js"

const router = express.Router()

router.get("/", showAllChats)
router.get("/:id", showOneChat)
router.post("/", createChat)
router.put("/:id", updateChat)
router.delete("/:id", deleteChat)

export default router
