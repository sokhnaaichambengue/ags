/* Etudiant Router script */
const express = require('express')

const EtudiantRouter = express.Router()

const etudiant = require('../controllers/EtudiantController')

// Get Router
EtudiantRouter.get('/etudiant/space', etudiant.getHome)
EtudiantRouter.get('/etudiant/space/logout', etudiant.logout)


module.exports = EtudiantRouter