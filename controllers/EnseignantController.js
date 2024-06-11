/* Admin Controller */
const {Enseignant,Cours,Notes,sequelize} = require('../models/model')

const enseignant = {
    getHome: (req, res) => {
        res.render('pages/enseignant/enseignant-view')
    },
    createNote: (req, res) => {
        const { valeur, evaluation, etudiant, notes } = req.body;
        const note = {
            valeur,
            evaluation,
            etudiant,
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
    displayCours: (req, res) => {
        Enseignant.findAll().then(cours => {
            res.render('', { cours })
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },
    logout: (req, res) => {
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
            }
            res.redirect('/');
        })
    }
}

module.exports = enseignant