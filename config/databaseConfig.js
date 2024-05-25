const mysql = require("mysql")
const { Sequelize} = require("sequelize")
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

module.exports = {sequelize,Sequelize}