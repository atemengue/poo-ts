/** @format */

class CheckingAccount {
  private _solde: number = 0; //
  public title: string;

  constructor(title: string) {
    this.title = title;
  }

  public get solde(): number {
    return this._solde;
  }

  set solde(somme) {
    this._solde = somme;
  }

  crediter(somme: number) {
    this._solde += somme;
  }

  debiter(somme: number) {
    this._solde -= somme;
  }
}

export default CheckingAccount;
