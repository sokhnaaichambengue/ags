/* Admin Controller */
const { Enseignant, Cours, Notes, sequelize, Evaluation } = require('../models/model')

const enseignant = {
    getHome: (req, res) => {
        res.render('pages/enseignant/enseignant-view')
    },

    createNote: (req, res) => {
        const { valeur, evaluationId, etudiantLogin, semestreId } = req.body
        const note = {
            valeur,
            evaluationId,
            etudiantLogin,
            semestreId

        }

        Notes.create(note).then(() => {
            res.send("La note a été créé avec succès")
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },

    createEvaluation: (req, res) => {
        const { duree, coursNom } = req.body
        const evaluation = {
            duree,
            coursNom
        }

        Evaluation.create(evaluation).then(() => {
            res.send("L'évaluation a été créé avec succès")
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },

    modifNote: (req, res) => {
        const { valeur, evaluationId, etudiantLogin, semestreId } = req.body
        const note = {
            valeur,
            evaluationId,
            etudiantLogin,
            semestreId

        }

        Notes.update(note).then(() => {
            res.send("La note a été modifié avec succès")
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },

    displayCours: (req, res) => {
        const { enseignantLogin } = req.body
        Cours.findAll({
            where: {
                enseignantLogin: enseignantLogin
            }
        }).then(cours => {
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