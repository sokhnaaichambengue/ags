/* Models script */

const {sequelize,Model} = require('config/databaseConfig')

class Utilisateur extends Model{
    #prenom
    #nom
    #login
    #motpasse

    get prenom() {
        return this.#prenom;
    }

    set prenom(value) {
        this.#prenom = value;
    }

    get nom() {
        return this.#nom;
    }

    set nom(value) {
        this.#nom = value;
    }

    get login() {
        return this.#login;
    }

    set login(value) {
        this.#login = value;
    }

    get motpasse() {
        return this.#motpasse;
    }

    set motpasse(value) {
        this.#motpasse = value;
    }

    consulterNote(){}
    consulterCours(){}
    consulterPlanning(){}
    signalerErreur(){}
}

class Etudiant extends Utilisateur{
    filiere
    semestre
    constructor(nom,prenom,login,motpasse,filiere,semestre) {
        super();
        this.nom = nom
        this.prenom = prenom
        this.login = login
        this.motpasse = motpasse
        this.filiere = filiere
        this.semestre = semestre
    }


    consulterCours() {
        super.consulterCours()
        console.log("cours")

    }
}

const et = new Etudiant(
    "fall","ibrahima",
    "ibousv","1234",
    "DBE",1)

et.consulterCours()
