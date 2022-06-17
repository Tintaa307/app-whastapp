import ChatModel from "../../src/components/chat/ChatModel.js"

// show all chats
export const showAllChats = async (req, res) => {
  try {
    const chats = await ChatModel.findAll()
    res.json({ message: "Success", data: chats })
  } catch (error) {
    res.json({ message: error })
  }
}

// show one chat
export const showOneChat = async (req, res) => {
  try {
    await ChatModel.findAll({
      where: {
        id: req.params.id,
      },
    })
    res.json({ message: "Chat found" })
  } catch (error) {
    res.json({ message: error })
  }
}

// create a chat
export const createChat = async (req, res) => {
  try {
    await ChatModel.create(req.body)
    res.json({ message: "Chat create succesfully!" })
  } catch (error) {
    res.json({ message: error })
  }
}

// update a chat
export const updateChat = async (req, res) => {
  try {
    await ChatModel.update(req.body, {
      where: {
        id: req.params.id,
      },
    })
    res.json({ message: "Chat updated succesfully!" })
  } catch (error) {
    res.json({ message: error })
  }
}

// delete a chat
export const deleteChat = async (req, res) => {
  try {
    await ChatModel.destroy({
      where: {
        id: req.params.id,
      },
    })
    res.json({ message: "Chat deleted succesfully!" })
  } catch (error) {
    res.json({ message: error })
  }
}
