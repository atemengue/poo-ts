/** @format */

class CompteCourant {
  private _solde: number;
  public client: string;

  constructor(client: string, solde: number) {
    this.client = client;
    this._solde = solde;
  }

  get solde(): number {
    return this._solde;
  }

  set solde(valeur) {
    this._solde = valeur;
  }

  crediter(somme: number) {
    this.solde += somme;
  }

  debiter(somme: number) {
    this.solde -= somme;
  }
}

export default CompteCourant;
