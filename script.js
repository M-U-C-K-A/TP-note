var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
/*
(counter | lui même) > le pokémon > contest
(FEU | EAU) > FEU > PLANTE
(FEU | PLANTE) > PLANTE > EAU
(EAU | PLANTE) > EAU > FEU
*/
var PokemonFeu = /** @class */ (function (_super) {
    __extends(PokemonFeu, _super);
    function PokemonFeu(nom, pointsDeVie, pointsAttaque) {
        return _super.call(this, nom, pointsDeVie, pointsAttaque) || this;
    }
    PokemonFeu.prototype.attaquer = function (adversaire) {
        if (adversaire instanceof PokemonPlante) {
            adversaire.subirAttaque(this.pointsAttaque * 2);
        }
        else if (adversaire instanceof PokemonEau || adversaire instanceof PokemonFeu) {
            adversaire.subirAttaque(this.pointsAttaque / 2);
        }
        else {
            adversaire.subirAttaque(this.pointsAttaque);
        }
    };
    return PokemonFeu;
}(Pokemon));
var PokemonEau = /** @class */ (function (_super) {
    __extends(PokemonEau, _super);
    function PokemonEau(nom, pointsDeVie, pointsAttaque) {
        return _super.call(this, nom, pointsDeVie, pointsAttaque) || this;
    }
    PokemonEau.prototype.attaquer = function (adversaire) {
        if (adversaire instanceof PokemonFeu) {
            adversaire.subirAttaque(this.pointsAttaque * 2);
        }
        else if (adversaire instanceof PokemonPlante || adversaire instanceof PokemonEau) {
            adversaire.subirAttaque(this.pointsAttaque / 2);
        }
        else {
            adversaire.subirAttaque(this.pointsAttaque);
        }
    };
    return PokemonEau;
}(Pokemon));
var PokemonPlante = /** @class */ (function (_super) {
    __extends(PokemonPlante, _super);
    function PokemonPlante(nom, pointsDeVie, pointsAttaque) {
        return _super.call(this, nom, pointsDeVie, pointsAttaque) || this;
    }
    PokemonPlante.prototype.attaquer = function (adversaire) {
        if (adversaire instanceof PokemonEau) {
            adversaire.subirAttaque(this.pointsAttaque * 2);
        }
        else if (adversaire instanceof PokemonFeu || adversaire instanceof PokemonPlante) {
            adversaire.subirAttaque(this.pointsAttaque / 2);
        }
        else {
            adversaire.subirAttaque(this.pointsAttaque);
        }
    };
    return PokemonPlante;
}(Pokemon));
var pikachu = new PokemonEau("Pikachu", 100, 30);
var bulbasaur = new PokemonPlante("Bulbasaur", 100, 25);
console.log('bulbasaur avant : ');
bulbasaur.afficherInformations();
console.log('');
pikachu.attaquer(bulbasaur);
console.log('bulbasaur apres : ');
bulbasaur.afficherInformations();
