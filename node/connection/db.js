import { Sequelize } from "sequelize"

const bd = new Sequelize("whatsappbd", "root", "", {
  dialect: "mysql",
  host: "localhost",
})

export default bd
