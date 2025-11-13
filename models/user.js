const DataTypes = require("sequelize")
const db = require("../database")

const User = db.define("User", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name:{
        type: DataTypes.STRING(100),
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
})

module.exports = User

