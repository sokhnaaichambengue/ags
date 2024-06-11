/* Admin Router script */
const express = require('express')

const AdminRouter = express.Router()

const admin = require('../controllers/AdminController')

// Get Router
AdminRouter.get('/admin/space', admin.getHome)
AdminRouter.get('/admin/space/logout', admin.logout)
AdminRouter.get('/admin/space/display/etudiant', admin.displayEtudiant)
AdminRouter.get('/admin/space/display/enseignant', admin.displayEnseignant)
AdminRouter.get('/admin/space/display/cour', admin.displayCours)
// Post Router
AdminRouter.post('/admin/space/create/etudiant', admin.createEtudiant)
AdminRouter.post('/admin/space/create/enseignant', admin.createEnseignant)
AdminRouter.post('/admin/space/create/cours', admin.createCours)
//AdminRouter.post('/admin/space/create/note', admin.createNote)
AdminRouter.post('/admin/space/create/filiere', admin.createFilieres)
AdminRouter.post('/admin/space/create/semestre', admin.createSemestres)


// Put Router
AdminRouter.put('/admin/space/update/etudiant', admin.updateEtudiant)
AdminRouter.put('/admin/space/update/enseignant', admin.updateEnseignant)
AdminRouter.put('/admin/space/update/cour', admin.updateCours)
//AdminRouter.put('/admin/space/update/note', admin.updateNote)

// Delete Router
AdminRouter.delete('/admin/space/delete/etudiant', admin.deleteEtudiant)
AdminRouter.delete('/admin/space/delete/enseignant', admin.deleteEnseignant)
AdminRouter.delete('/admin/space/delete/cour', admin.deleteCours)

// Export
module.exports = AdminRouter