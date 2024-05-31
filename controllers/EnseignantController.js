/* Admin Controller */
const {Enseignant,Cours,Notes,sequelize} = require('../models/model')

const en = {
    getHome: (req, res) => {
        res.render('enseignant-view')
    },
    createNote: (req, res) => {
        const { valeur, evaluation, etudiant, notes } = req.body;
        const note = {
            valeur,
            evaluation,
            etudiant,
            cours,
            notes
        }

        Notes.create(note).then(() => {
            res.send("La note a été créé avec succès")
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },
    modifNote: (req, res) => {
        const { valeur, evaluation, etudiant, notes } = req.body;
        const note = {
            valeur,
            evaluation,
            etudiant,
            cours,
            notes
        }

        Notes.update(note).then(() => {
            res.send("La note a été modifié avec succès")
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },
    
}