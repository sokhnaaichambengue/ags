/* Models script */

const { sequelize,Model} = require("../config/databaseConfig")

class Utilisateur extends Model{}

class Etudiant extends Utilisateur{}
Etudiant.init(
    {
        nom:{

        },
        prenom:{

        },
        login:{

        },
        motpasse:{

        },
        filiere:{

        },
        semestre:{

        }
    },
    {
        sequelize:sequelize,
        modelName:etudiant
    }
)


class Enseignant extends Utilisateur{}
Enseignant.init(
    {
        nom:{

        },
        prenom:{

        },
        login:{

        },
        motpasse:{

        },
        module:{

        }
    },
    {
        sequelize:sequelize,
        modelName:enseignant
    }
)

class Administrateur extends Utilisateur{}
Administrateur.init(
    {
        nom:{

        },
        prenom:{

        },
        login:{

        },
        motpasse:{

        }
    },
    {
        sequelize:sequelize,
        modelName:administrateur
    }
)

class Cours extends Model{}
Cours.init(
    {
        nom:{

        },
        enseignant:{

        },
        lieu:{

        }
    },
    {
        sequelize:sequelize,
        modelName:cours
    }
)

class Notes extends Model{}
Notes.init(
    {
        valeur:{

        },
        evaluation:{

        },
        etudiant:{

        },
        semestre:{

        }
    },
    {
        sequelize:sequelize,
        modelName:notes
    }
)

class Evaluation extends Model{}
Evaluation.init(
    {
        id:{

        },
        duree:{

        },
        cours:{

        },
        filiere:{

        }
    },
    {
        sequelize:sequelize,
        modelName:evaluation
    }
)

class Semestre extends Model{}
Semestre.init(
    {
        nom:{

        }
    },
    {
        sequelize:sequelize,
        modelName:semestre
    }
)
class Filieres extends Model{}
Filieres.init(
    {
        nom:{

        },
        nbretudiant:{

        },
        groupe:{

        }
    },
    {
        sequelize:sequelize,
        modelName:filieres
    }
)

module.exports = {Etudiant,Enseignant}