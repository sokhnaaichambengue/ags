/* Models script */

const { UPDATE } = require("sequelize/lib/query-types");
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
                notEmpty: true,
                len: [8, 12]
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
                notEmpty: true,
                len: [8, 12]
            }
        },
        module: {
            type: DataTypes.STRING,
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
        },
        nbretudiant: {
            type: DataTypes.INTEGER,
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
                notEmpty: true,
                len: [8, 12]
            }

        },
        motpasse: {
            type: DataTypes.STRING,
            allowNull: false

        },
        filiere: {
            type: DataTypes.STRING,

        },
        semestre: {
            type: DataTypes.STRING,

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
        cours: {
            type: DataTypes.STRING,
        },
        filiere: {
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
                len: [0, 20]
            }
        },
        evaluation: {
            type: DataTypes.INTEGER,
        },
        etudiant: {
            type: DataTypes.STRING,
            allowNull: false
        },
        semestre: {
            type: DataTypes.INTEGER,
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
        enseignant: {
            type: DataTypes.STRING,
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
Etudiant.belongsTo(Filieres, { as: 'FilieresEtudiant', foreignKey: 'FK_fe', onDelete: 'CASCADE' })

Filieres.belongsToMany(Evaluation, { as: 'FilieresEvaluation', through: 'assos_fe' })
Evaluation.belongsToMany(Filieres, { as: 'FilieresEvaluation', through: 'assos_fe' })

Evaluation.hasMany(Notes)
Notes.belongsTo(Evaluation, { as: 'EvaluationNotes', foreignKey: 'FK_evaluation_notes', onDelete: 'CASCADE' })

Evaluation.belongsToMany(Cours, { as: 'EvaluationCours', through: 'assos_ec' })
Cours.belongsToMany(Evaluation, { as: 'EvaluationCours', through: 'assos_ec' })

Cours.belongsToMany(Notes, { as: 'CoursNotes', through: 'assos_cn' })
Notes.belongsToMany(Cours, { as: 'CoursNotes', through: 'assos_cn' })

Cours.belongsToMany(Etudiant, { as: 'CoursEtudiant', through: 'assos_ce' })
Etudiant.belongsToMany(Cours, { as: 'CoursEtudiant', through: 'assos_ce' })

Enseignant.hasMany(Cours)
Cours.belongsTo(Enseignant, { as: 'EnseignantCours', foreignKey: 'FK_enseignant_cours', onDelete: 'CASCADE' })

Etudiant.hasMany(Notes)
Notes.belongsTo(Etudiant, { as: 'EtudiantNotes', foreignKey: 'FK_etudiant_notes', onDelete: 'CASCADE' })

Semestre.hasMany(Notes)
Notes.belongsTo(Semestre, { as: 'SemestreEtudiant', foreignKey: 'FK_semestre_notes', onDelete: 'CASCADE' })

Semestre.belongsToMany(Etudiant, {  as:'SemestreEtudiant',through: 'assos_se' })
Etudiant.belongsToMany(Semestre, {  as:'SemestreEtudiant',through: 'assos_se' })


module.exports =
{
    Etudiant, Enseignant,
    Administrateur, Cours,
    Notes, Filieres,
    Evaluation, Semestre
}
