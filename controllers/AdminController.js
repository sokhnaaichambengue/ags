/* Admin Controller */
const { Administrateur, sequelize } = require('../models/model')
//const {session} = require('./index')
const admin = {
    getHome: (req, res) =>{
        res.render('admin-view')
    },

    // Create function
    createEtudiant: (req, res) => {

    },
    createEnseignant: (req, res) => {

    },
    createCours: (req, res) => {

    },
    createNote: (req, res) => {

    },

    // Insert function
    insertEtudiant: (req, res) => {

    },
    insertEnseignant: (req, res) => {

    },
    insertCours: (req, res) => {

    },
    insertNote: (req, res) => {

    },

    // Update function
    updateEtudiant: (req, res) => {

    },
    updateEnseignant: (req, res) => {

    },
    updateCours: (req, res) => {

    },
    updateNote: (req, res) => {

    },

    // Delete function
    deleteEtudiant: (req, res) => {

    },
    deleteEnseignant: (req, res) => {

    },
    deleteCours: (req, res) => {

    },

    logout: (req, res) => {
        console.log(req.session.login)
        //res.redirect('/')
    }

}
module.exports = admin

