var Pokemon = /** @class */ (function () {
    function Pokemon(nom, pointsDeVie, pointsAttaque) {
        this.nom = nom;
        this.pointsDeVie = pointsDeVie;
        this.pointsAttaque = pointsAttaque;
    }
    Pokemon.prototype.estMort = function () {
        return this.pointsDeVie <= 0;
    };
    Pokemon.prototype.attaquer = function (adversaire) {
        adversaire.subirAttaque(this.pointsAttaque);
    };
    Pokemon.prototype.afficherInformations = function () {
        console.log("Nom: ".concat(this.nom));
        console.log("Points de Vie: ".concat(this.pointsDeVie));
        console.log("Points d'Attaque: ".concat(this.pointsAttaque));
    };
    Pokemon.prototype.subirAttaque = function (degats) {
        this.pointsDeVie -= degats;
        if (this.pointsDeVie < 0) {
            this.pointsDeVie = 0;
        }
    };
    return Pokemon;
}());
