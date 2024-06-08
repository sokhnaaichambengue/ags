
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
        if (!ad && !et && !en) {
            res.status(404).send('<script>alert("login ou mot de passe incorrect")</script>')
        } else if(ad){
            res.redirect('/admin/space')
        }else if(et){
            res.redirect('/etudiant/space')
        }else if(en){
            res.redirect('/enseignant/space')
        }


    }
}

module.exports =  home