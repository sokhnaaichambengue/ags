/* Server script */
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const PORT = 3000
const router = require('../routes/index')
const Adminrouter = require('../routes/AdminRoute')

// Static files setup
app.use("../public", express.static("public"))

// Views setup
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(bodyparser.urlencoded({ extended: false }))

// Routers setup
app.use('/',router)
app.use('/', Adminrouter)
 
// Server setup
app.listen(PORT, () => {
    console.log("Server running on port: " + PORT)
})

module.exports = app