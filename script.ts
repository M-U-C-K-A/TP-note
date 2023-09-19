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
(counter | lui même) > le pokémon > contest  
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
