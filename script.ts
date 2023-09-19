/*
 * Nom du fichier: script.ts
 * Description: Ce fichier contient le code source pokemon pour le TP noté
 * Auteur: Hugo DELACOUR
 * Date de création: 19 septembre 2023
 */

class Pokemon {
  private nom: string;
  protected pointsDeVie: number;
  protected pointsAttaque: number;

  constructor(nom: string, pointsDeVie: number, pointsAttaque: number) {
    this.nom = nom;
    this.pointsDeVie = pointsDeVie;
    this.pointsAttaque = pointsAttaque;
  }

  estMort(): boolean {
    return this.pointsDeVie <= 0;
  }

  attaquer(adversaire: Pokemon): void {
    adversaire.subirAttaque(this.pointsAttaque);
  }

  afficherInformations(): void {
    console.log(`Nom: ${this.nom}`);
    console.log(`Points de Vie: ${this.pointsDeVie}`);
    console.log(`Points d'Attaque: ${this.pointsAttaque}`);
  }

  public subirAttaque(degats: number): void {
    this.pointsDeVie -= degats;
    if (this.pointsDeVie < 0) {
      this.pointsDeVie = 0;
    }
  }
}
/*
(FEU | EAU) > FEU > PLANTE
(FEU | PLANTE) > PLANTE > EAU
(EAU | PLANTE) > EAU > FEU
*/
class PokemonFeu extends Pokemon {
  constructor(nom: string, pointsDeVie: number, pointsAttaque: number) {
    super(nom, pointsDeVie, pointsAttaque);
  }

  attaquer(adversaire: Pokemon): void {
    if (adversaire instanceof PokemonPlante) {
      adversaire.subirAttaque(this.pointsAttaque * 2);
    } else if (adversaire instanceof PokemonEau || adversaire instanceof PokemonFeu) {
      adversaire.subirAttaque(this.pointsAttaque / 2);
    } else {
      adversaire.subirAttaque(this.pointsAttaque);
    }
  }
}

class PokemonEau extends Pokemon {
  constructor(nom: string, pointsDeVie: number, pointsAttaque: number) {
    super(nom, pointsDeVie, pointsAttaque);
  }

  attaquer(adversaire: Pokemon): void {
    if (adversaire instanceof PokemonFeu) {
      adversaire.subirAttaque(this.pointsAttaque * 2);
    } else if (adversaire instanceof PokemonPlante || adversaire instanceof PokemonEau) {
      adversaire.subirAttaque(this.pointsAttaque / 2);
    } else {
      adversaire.subirAttaque(this.pointsAttaque);
    }
  }
}

class PokemonPlante extends Pokemon {
  constructor(nom: string, pointsDeVie: number, pointsAttaque: number) {
    super(nom, pointsDeVie, pointsAttaque);
  }

  attaquer(adversaire: Pokemon): void {
    if (adversaire instanceof PokemonEau) {
      adversaire.subirAttaque(this.pointsAttaque * 2);
    } else if (adversaire instanceof PokemonFeu || adversaire instanceof PokemonPlante) {
      adversaire.subirAttaque(this.pointsAttaque / 2);
    } else {
      adversaire.subirAttaque(this.pointsAttaque);
    }
  }
}

const pikachu = new PokemonEau("Pikachu", 210, 30);
const bulbizarre = new PokemonPlante("Bulbizarre", 120, 25);
const salameche = new PokemonFeu("Salameche", 150, 35);
const carapuce = new PokemonEau("Carapuce", 110, 32);
const herbizarre = new PokemonPlante("Herbizarre", 230, 28);

console.log('Avant le combat :');
console.table([pikachu, bulbizarre, salameche, carapuce, herbizarre]);

console.log('\nCombat :');
pikachu.attaquer(salameche);
bulbizarre.attaquer(carapuce);
salameche.attaquer(bulbizarre);
carapuce.attaquer(herbizarre);
herbizarre.attaquer(salameche);

console.log('Après le combat :');
console.table([pikachu, bulbizarre, salameche, carapuce, herbizarre]);