
const { Sequelize } = require('sequelize')
const {sequelize,Etudiant,Administrateur,Enseignant} = require('../models/model')
//const session = require('express-session')

const home = {
    getHome:function (req,res){
        res.render('index.ejs')
    },
    postHome: function (req, res) {

        const login = req.body.login
        const mdp = req.body.motpasse
        
    }
}
module.exports = home