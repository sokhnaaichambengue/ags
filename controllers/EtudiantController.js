/* Etudiant Controller */
const { Etudiant, sequelize } = require('../models/model')

const etudiant = {
    getHome: (req, res) => {
        res.render('pages/etudiant/etudiant-view')
    },

    
    logout: (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
            }
            res.redirect('/');
        })
    },

}

module.exports = etudiant