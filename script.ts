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
