/* Admin Controller */
const
    { sequelize, Etudiant,
        Enseignant, Cours,
        Notes, Filieres,
        Semestre } = require('../models/model')


const admin = {
    getHome: (req, res) => {
        res.render('admin-view')
    },

    // Create function
    createEtudiant: (req, res) => {
        const { nom, prenom, login, motpasse, filiereId } = req.body;
        const etudiant = {
            nom,
            prenom,
            login,
            motpasse,
            filiereId
        }

        Etudiant.create(etudiant).then(() => {
            res.send("L' étudiant a été créé avec succès")
        }).catch(err => {
            res.end(err)
        })

    },

    createEnseignant: (req, res) => {
        const { nom, prenom, login, motpasse, module } = req.body;
        Enseignant.create({
            nom,
            prenom,
            login,
            motpasse,
            module
        })

        const enseignant = {
            nom,
            prenom,
            login,
            motpasse,
            module
        }

        Enseignant.create(enseignant).then(() => {
            res.send("L'enseignant a été créé avec succès")
        }).catch(err => {
            res.end(err)
        })
    },
    createCours: (req, res) => {
        const { nom, lieu, enseignantLogin,semestreId } = req.body;
        const cours = {
            nom,
            lieu,
            enseignantLogin,
            semestreId
        }

        Cours.create(cours).then(() => {
            res.send("Le cours a été créé avec succès")
        }).catch(err => {
            res.end(err)
        })
    },
/*     createNote: (req, res) => {
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
    }, */

    createFilieres: (req, res) => {
        const { nom } = req.body;
        const filieres = {
            nom
        }

        Filieres.create(filieres).then(() => {
            res.send("La filière a été créé avec succès")
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })

    },

    createSemestres: (req, res) => {
        const { nom } = req.body;
        const semestres = {
            nom
        }

        Semestre.create(semestres).then(() => {
            res.send("La filière a été créé avec succès")
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })

    },

    // Read function
    displayEtudiant: (req, res) => {
        Etudiant.findAll().then((etudiants) => {
            res.send({ etudiants })
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },
    displayEnseignant: (req, res) => {
        Enseignant.findAll().then((enseignants) => {
            res.send({ ennseignants })
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },
    displayCours: (req, res) => {

    },
    displayFilieres: (req, res) => {

    },
    displaySemestres: (req, res) => {

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
        req.session.destroy((err) => {
            if (err) {
                console.error(err);
            }
            res.redirect('/');
        })
    }

}

module.exports = admin
