/* Admin Router script */
const express = require('express')

const AdminRouter = express.Router()

const admin = require('../controllers/AdminController')

AdminRouter.get('/admin/space', admin.getHome)
AdminRouter.get('/admin/space/logout', admin.logout)

module.exports = AdminRouter;
