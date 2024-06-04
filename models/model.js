/* Models script */
const { sequelize, Model } = require("../config/databaseConfig")
const { DataTypes } = require("sequelize");

/* Models */

class Utilisateur extends Model { }

class Administrateur extends Utilisateur { }
Administrateur.init(
    {
        nom: {
            type: DataTypes.STRING,
        },
        prenom: {
            type: DataTypes.STRING,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        motpasse: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        }
    },
    {
        sequelize: sequelize,
        modelName: 'administrateur',
        timestamps: false
    }
)

class Enseignant extends Utilisateur { }
Enseignant.init(
    {
        nom: {
            type: DataTypes.STRING,
        },
        prenom: {
            type: DataTypes.STRING,
        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true
        },
        motpasse: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notNull: true,
                notEmpty: true
            }
        }
    },
    {
        sequelize: sequelize,
        modelName: 'enseignant',
        timestamps: false
    }
)

class Filieres extends Model { }
Filieres.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize: sequelize,
        modelName: 'filieres',
        timestamps: false
    }
)

class Semestre extends Model { }
Semestre.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nom: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    },
    {
        sequelize: sequelize,
        modelName: 'semestre',
        timestamps: false
    }
)

class Etudiant extends Utilisateur { }
Etudiant.init(
    {
        nom: {
            type: DataTypes.STRING,

        },
        prenom: {
            type: DataTypes.STRING,

        },
        login: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
            unique: true,
            validate: {
                notNull: true,
                notEmpty: true
            }

        },
        motpasse: {
            type: DataTypes.STRING,
            allowNull: false

        }
    },
    {
        sequelize: sequelize,
        modelName: 'etudiant',
        timestamps: false
    }
)

class Evaluation extends Model { }
Evaluation.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        duree: {
            type: DataTypes.INTEGER,
        },
        cour:
        {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize: sequelize,
        modelName: 'evaluation',
        timestamps: false
    }
)

class Notes extends Model { }
Notes.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        valeur: {
            type: DataTypes.INTEGER,
            validate: {
                notEmpty: true,
            }
        }
    },
    {
        sequelize: sequelize,
        modelName: 'notes',
        timestamps: false
    }
)

class Cours extends Model { }
Cours.init(
    {
        nom: {
            type: DataTypes.STRING,
            primaryKey: true,
            unique: true,

        },
        lieu: {
            type: DataTypes.STRING,
        }
    },
    {
        sequelize: sequelize,
        modelName: 'cours',
        timestamps: false
    }
)

/* Association */

Filieres.hasMany(Etudiant)
Etudiant.belongsTo(Filieres, { onDelete: 'CASCADE' })

Filieres.belongsToMany(Evaluation, { through: 'assos_fe' })
Evaluation.belongsToMany(Filieres, { through: 'assos_fe' })

Evaluation.hasMany(Notes)
Notes.belongsTo(Evaluation, { onDelete: 'CASCADE' })

Evaluation.belongsToMany(Cours, { through: 'assos_ec' })
Cours.belongsToMany(Evaluation, { through: 'assos_ec' })

Cours.belongsToMany(Notes, { through: 'assos_cn' })
Notes.belongsToMany(Cours, { through: 'assos_cn' })

Cours.belongsToMany(Etudiant, { through: 'assos_ce' })
Etudiant.belongsToMany(Cours, { through: 'assos_ce' })

Enseignant.hasMany(Cours)
Cours.belongsTo(Enseignant, { onDelete: 'CASCADE' })

Etudiant.hasMany(Notes)
Notes.belongsTo(Etudiant, { onDelete: 'CASCADE' })

Semestre.hasMany(Notes)
Notes.belongsTo(Semestre, { onDelete: 'CASCADE' })

Semestre.belongsToMany(Etudiant, { through: 'assos_se' })
Etudiant.belongsToMany(Semestre, { through: 'assos_se' })

sequelize.sync({update: true})

module.exports =
{
    Etudiant, Enseignant,
    Administrateur, Cours,
    Notes, Filieres,
    Evaluation, Semestre, sequelize
}
