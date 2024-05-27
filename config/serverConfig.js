/* Server script */
const express = require('express')
const app = express()
const PORT = 3000

app.use("../public", express.static("public"));
app.set('views','../views')

app.listen(PORT,()=>{
    console.log("Server running on port: "+PORT)
})

module.exports = app