/* Server script */
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const PORT = 3000

const session = require('express-session')

const router = require('../routes/index')
const Adminrouter = require('../routes/AdminRoute')
const Etudiantrouter = require('../routes/EtudiantRoute')
const Enseignantrouter = require('../routes/EnseignantRoute')

// Session setup
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: true
}))

// Static files setup
app.use(express.static('public'))

// Views setup
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(bodyparser.urlencoded({ extended: true }))
app.use(express.json())

// Routers setup
app.use('/',router)
app.use('/', Adminrouter)
app.use('/', Etudiantrouter)
app.use('/', Enseignantrouter)

// Server setup
app.listen(PORT, () => {
    console.log("Server running on port: " + PORT)
})


module.exports = app