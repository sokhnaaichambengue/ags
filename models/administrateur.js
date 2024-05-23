
const sequelize = require("config/databaseConfig")
const Utilisateur = require("./utilisateur");


// Class Administrateur
class Administrateur extends Utilisateur{
    constructor(nom, prenom, login, motpasse) {
        super(nom, prenom, login, motpasse);
    }
}

const administrateur = sequelize.define("Administrateur",
    {
        //...
    }
)
module.exports = administrateur