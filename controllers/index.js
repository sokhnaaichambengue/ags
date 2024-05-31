
const { sequelize,Administrateur, Etudiant, Enseignant } = require('../models/model')

const home = {
    getHome: function (req, res) {
        res.render('index')
    },
    postHome: async function (req, res) {

        const { login, motpasse } = req.body
        
        const ad = await Administrateur.findOne({
            where: {
                login: login,
                motpasse: motpasse
            }
        })
        const et = await Etudiant.findOne({
            where: {
                login: login,
                motpasse: motpasse
            }
        })
        const en = await Enseignant.findOne({
            where: {
                login: login,
                motpasse: motpasse
            }
        })
        if (!ad) {
            res.status(400).send('login ou mot de passe incorrect')
        } else {
            req.session.login = login
            req.session.motpasse = motpasse
            session.role = 'admin' 
            res.redirect('/admin/space')
        }
    }
}
module.exports =  home
