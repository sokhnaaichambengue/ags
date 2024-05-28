/* Server script */
const express = require('express')
const app = express()
const PORT = 3000
const router = require('../routes/index')
app.use("../public", express.static("public"))

app.set('views','../views')

app.set('view engine','ejs')

app.use(router)

app.listen(PORT,()=>{
    console.log("Server running on port: "+PORT)
})

module.exports = app