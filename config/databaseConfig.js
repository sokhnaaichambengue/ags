const mysql = require("mysql")

const { Sequelize,Model} = require("sequelize")
const sequelize = new Sequelize("sequelize_ags","root","31012003",{
    host:"localhost",
    dialect:"mysql"
})

 sequelize.authenticate()
     .then(()=>{
         console.log("Connnected !")
         sequelize.sync({ update: true })
    })
     .catch ((err)=> {
    console.log("Error while loading connection")
})

module.exports = {sequelize,Model}