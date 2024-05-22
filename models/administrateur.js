const {Utilisateur} = require("utilisateur")
const sequelize = require("config/databaseConfig")
// Class Administrateur
class Administrateur extends Utilisateur{
    constructor() {
        super();
    }
}

const administrateur = sequelize.define("Administrateur",
    {
        //...
    }
)
module.exports = administrateur