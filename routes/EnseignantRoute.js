/* Enseignat Router script */
const express = require('express')

const EnseignantRouter = express.Router()

const enseignant = require('../controllers/EnseignantController')

// Get Router
EnseignantRouter.get('/enseignant/space', enseignant.getHome)
EnseignantRouter.get('/enseignant/space/logout', enseignant.logout)

module.exports = EnseignantRouter