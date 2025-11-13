const Sequelize = require("sequelize")

const db = new Sequelize("webowe4c", "root", "", {
    host:"localhost",
    dialect:"mysql",
    logging: false
})

module.exports = db