/** @format */

class CompteCourant {
  // proprietes
  private _solde: number = 0;

  public nomClient: string;

  // constructeur avec des propriets
  constructor(nomClient: string) {
    this.nomClient = nomClient;
  }

  // getters et setters
  public get solde(): number {
    return this._solde;
  }

  public set solde(valeur: number) {
    this._solde = valeur;
  }
  // methodes

  debiter(somme: number) {
    if (somme < this._solde) {
      this._solde -= somme;
    } else {
      throw Error('la solde debiteur est inferieur');
    }
  }
  crediter(somme: number) {
    this._solde += somme;
  }
}

export default CompteCourant;
