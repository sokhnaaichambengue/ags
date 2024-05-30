/* Admin Controller */
const {Enseignant,sequelize} = require('../models/model')

const en = {
    getHome: (req, res) => {
        res.render('enseignant-view')
    },
    
    
}