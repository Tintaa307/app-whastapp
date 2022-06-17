import express from "express"
import {
  showAllChats,
  showOneChat,
  createChat,
  updateChat,
  deleteChat,
} from "../controllers/ChatController"

const router = express.Router()

router.get("/", showAllChats)
router.get("/:id", showOneChat)
router.post("/", createChat)
router.put("/:id", updateChat)
router.delete("/:id", deleteChat)

export default router
