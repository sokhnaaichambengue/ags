
const { sequelize,Etudiant, Administrateur, Enseignant } = require('../models/model')

const { QueryTypes } = require('sequelize')
//const session = require('express-session')

const home = {
    getHome: function (req, res) {
        res.render('index.ejs')
    },
    postHome: async function (req, res) {

        const login = req.body.login
        const mdp = req.body.motpasse
        const /*[results, metadata]*/ test =
           
            await sequelize.query('SELECT * FROM administrateurs WHERE login = :login and motpasse = :motpasse',
                {
                    replacements: { login: login, motpasse: mdp },
                    type: QueryTypes.SELECT
                }
            )
        res.send(test)    


    }
}
module.exports = home