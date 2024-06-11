/* Admin Controller */
const
    { sequelize, Etudiant,
        Enseignant, Cours,
        Notes, Filieres,
        Semestre } = require('../models/model')


const admin = {
    getHome: (req, res) => {
        res.render('pages/admin/admin-view')
    },


    createEtudiant: (req, res) => {
        const { nom, prenom, login, motpasse, filiereId } = req.body
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
        const { nom, prenom, login, motpasse } = req.body
        const enseignant = {
            nom,
            prenom,
            login,
            motpasse
        }

        Enseignant.create(enseignant).then(() => {
            res.send("L'enseignant a été créé avec succès")
        }).catch(err => {
            res.end(err)
        })
    },
    createCours: (req, res) => {
        const { nom, lieu, enseignantLogin, semestreId } = req.body
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


    createFilieres: (req, res) => {
        const { nom } = req.body
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
        const { nom } = req.body
        const semestres = {
            nom
        }

        Semestre.create(semestres).then(() => {
            res.send("La filière a été créé avec succès")
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })

    },


    displayEtudiant: (req, res) => {
        Etudiant.findAll().then(etudiants => {
            res.render('', { etudiants })
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },
    displayEnseignant: (req, res) => {
        Enseignant.findAll().then(enseignants => {
            res.render('', { enseignants })
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
    displayFilieres: (req, res) => {
        Filieres.findAll().then(filieres => {
            res.render('', { filieres })
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },
    displaySemestres: (req, res) => {
        Semestre.findAll().then(semestres => {
            res.render('', { semestres })
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },



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
        const { nom, prenom, login, motpasse, filiereId } = req.body;
        const etudiant = {
            nom,
            prenom,
            login,
            motpasse,
            filiereId
        }

        Etudiant.destroy(etudiant).then(() => {
            res.send('Etudiant supprimé avec succés')
        }).catch(err => {
            res.send(err)
        })
    },
    deleteEnseignant: (req, res) => {
        const { nom, prenom, login, motpasse } = req.body;
        const enseignant = {
            nom,
            prenom,
            login,
            motpasse
        }

        Etudiant.destroy(enseignant).then(() => {
            res.send('Enseignant supprimé avec succés')
        }).catch(err => {
            res.send(err)
        })
    },
    deleteCours: (req, res) => {
        const { nom, lieu, enseignantLogin, semestreId } = req.body
        const cours = {
            nom,
            lieu,
            enseignantLogin,
            semestreId
        }

        Cours.destroy(cours).then(() => {
            res.send('Cours supprimé avec succés')
        }).catch(err => {
            res.send(err)
        })
    },
    deleteFilieres: (req, res) => {
        const { nom } = req.body
        const filieres = {
            nom
        }
        Filieres.destroy(filieres).then(
            res.send('Filière supprimé avec succés')
        ).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },
    deleteSemestres: (req, res) => {
        const { nom } = req.body
        const semestres = {
            nom
        }
        Semestre.destroy(semestres).then(
            res.end('Semestre supprimé avec succés')
        ).catch(err => {
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

module.exports = admin
