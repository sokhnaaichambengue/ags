
const {sequelize,Etudiant,Administrateur,Enseignant} = require('../models/model')
const home = {
    getHome:function (req,res){
        res.render('../views/index.ejs')
    },
    postHome:function (req,res) {
        const user_login = req.body.login
        const  user_motpasse = req.body.motpasse

    }
}
module.exports = home