/* Admin Controller */
const { Administrateur, sequelize, Etudiant, Enseignant, Cours, Notes } = require('../models/model')
//const {session} = require('./index')
const admin = {
    getHome: (req, res) => {
        res.render('admin-view')
    },

    // Create function
    createEtudiant: (req, res) => {
        const { nom, prenom, login, motpasse, filiere, semestre } = req.body;
        const etudiant = {
            nom,
            prenom,
            login,
            motpasse,
            filiere,
            semestre
        }

        Etudiant.create(etudiant).then(() => {
            res.send("L' étudiant a été créé avec succès")
        }).catch(err => {
            res.end("Une erreur s'est produite")
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
            res.end("Une erreur s'est produite")
        })
    },
    createCours: (req, res) => {
        const { nom, enseignant,lieu } = req.body;
        const cours = {
            nom,
            enseignant,
            lieu
        }

        Cours.create(cours).then(()=>{
            res.send("Le cours a été créé avec succès")
        }).catch(err => {
            res.end("Une erreur s'est produite")
        })
    },
    createNote: (req, res) => {
        const { valeur,evaluation,etudiant,notes } = req.body;
        const note = {
            valeur,
            evaluation,
            etudiant,
            cours,
            notes
        }

        Notes.create(note).then(()=> {
            res.send("La note a été créé avec succès")
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

    },
    displayCours: (req, res) => {

    },
    displayNote: (req, res) => {

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
