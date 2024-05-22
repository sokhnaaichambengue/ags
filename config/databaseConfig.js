const mysql = require("mysql")
const { Sequelize } = require("sequelize")
const sequelize = new Sequelize("ags","root","")


module.exports = sequelize