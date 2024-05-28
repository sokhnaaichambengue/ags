/* Models script */

const { sequelize,Model} = require("../config/databaseConfig")
const {DataTypes} = require("sequelize");

class Utilisateur extends Model{}

class Administrateur extends Utilisateur{}
Administrateur.init(
    {
        nom:{
            type:DataTypes.STRING,
        },
        prenom:{
            type:DataTypes.STRING,
        },
        login:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true,
            unique:true
        },
        motpasse:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                 notNull: true,
                 notEmpty:true,
                 len: [8,12]
            }
        }
    },
    {
        sequelize:sequelize,
        modelName:'administrateur',
        timestamps:false
    }
)

class Enseignant extends Utilisateur{}
Enseignant.init(
    {
        nom:{
            type:DataTypes.STRING,
        },
        prenom:{
            type:DataTypes.STRING,
        },
        login:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true,
            unique:true
        },
        motpasse:{
            type:DataTypes.STRING,
            allowNull:false,
            validate:{
                 notNull: true,
                 notEmpty:true,
                 len: [8,12]
            }
        },
        module:{
            type:DataTypes.STRING,
        }
    },
    {
        sequelize:sequelize,
        modelName:'enseignant',
        timestamps:false
    }
)

class Filieres extends Model{}
Filieres.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        nom:{
            type:DataTypes.STRING,
            allowNull:false
        },
        nbretudiant:{
            type:DataTypes.INTEGER,
        }
    },
    {
        sequelize:sequelize,
        modelName:'filieres',
        timestamps:false
    }
)

class Semestre extends Model{}
Semestre.init(
    {
         id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        nom:{
            type:DataTypes.STRING,
        }
    },
    {
        sequelize:sequelize,
        modelName:'semestre',
        timestamps:false
    }
)

class Etudiant extends Utilisateur{}
Etudiant.init(
    {
        nom:{
            type:DataTypes.STRING,

        },
        prenom:{
            type:DataTypes.STRING,

        },
        login:{
            type:DataTypes.STRING,
            allowNull:false,
            primaryKey:true,
            unique:true,
            validate:{
                 notNull: true,
                 notEmpty:true,
                 len: [8,12]
            }

        },
        motpasse:{
            type:DataTypes.STRING,
            allowNull:false

        },
        filiere:{
            type:DataTypes.STRING,

        },
        semestre:{
            type:DataTypes.STRING,

        }
    },
    {
        sequelize:sequelize,
        modelName:'etudiant',
        timestamps:false
    }
)

class Evaluation extends Model{}
Evaluation.init(
    {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        duree:{
            type:DataTypes.INTEGER,
        },
        cours:{
            type:DataTypes.STRING,
        },
        filiere:{
            type:DataTypes.STRING,
        }
    },
    {
        sequelize:sequelize,
        modelName:'evaluation',
        timestamps:false
    }
)

class Notes extends Model{}
Notes.init(
    {
         id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            primaryKey:true
        },
        valeur:{
            type:DataTypes.INTEGER,
            validate:{
                 notEmpty:true,
                 len: [0,20]
            }
        },
        evaluation:{
            type:DataTypes.INTEGER,
        },
        etudiant:{
            type:DataTypes.STRING,
            allowNull:false
        },
        semestre:{
            type:DataTypes.INTEGER,
        }
    },
    {
        sequelize:sequelize,
        modelName:'notes',
        timestamps:false
    }
)

class Cours extends Model{}
Cours.init(
    {
        nom:{
            type:DataTypes.STRING,
            primaryKey:true,
            unique:true,

        },
        enseignant:{
            type:DataTypes.STRING,
        },
        lieu:{
            type:DataTypes.STRING,
        }
    },
    {
        sequelize:sequelize,
        modelName:'cours',
        timestamps:false
    }
)


module.exports =
    {
        Etudiant,Enseignant,
        Administrateur,Cours,
        Notes,Filieres,
        Evaluation,Semestre
    }
