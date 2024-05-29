const mysql = require("mysql")

const { Sequelize,Model} = require("sequelize")
const sequelize = new Sequelize("sequelize-test","root","",{
    host:"localhost",
    dialect:"mysql"
})

 sequelize.authenticate()
     .then(()=>{
        console.log("Connnected !")
    })
     .catch ((err)=> {
    console.log("Error while loading connection")
})

sequelize.sync({update:true})

module.exports = {sequelize,Model}
