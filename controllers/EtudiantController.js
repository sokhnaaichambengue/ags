/* Etudiant Controller */
const {Etudiant,sequelize} = require('../models/model')

const etudiant = {
    getHome: (req, res) => {
        res.render('etudiant-view')
    },
    logout: (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
            }
            res.redirect('/');
        })
    },

    // Main function
    consulterNote: (req, res) => {
        
    },
    consulterCours: (req, res) => {
        
    },

}

module.exports = etudiant