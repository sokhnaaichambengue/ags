// Class Utilisateur
class Utilisateur {
    private nom
    private prenom
    private login
    private motpasse

    constructor(nom,prenom,login,motpasse) {
        this.nom = nom
        this.prenom = prenom
        this.login = login
        this.motpasse = motpasse
    }

    get nom(){
        return this.nom
    }

    set nom(n){
        this.nom = n
    }

    get prenom() {
        return this.prenom
    }

    set prenom(n){
        this.prenom = n
    }

    get login(){
        return this.login
    }

    set login(n){
        this.login = n
    }

    get motpasse() {
        return this.motpasse
    }

    set motpasse(n){
        this.motpasse = n
    }
}
module.exports = Utilisateur