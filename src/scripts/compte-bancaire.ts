/** @format */

import { IParametresCompte } from './interface';
import { ICompte } from './interface';
import { TypeCompte } from './enums';

abstract class CompteBancaire implements ICompte {
  private _solde: number;
  id: number;
  public client: string;

  abstract typeCompte: TypeCompte;

  constructor(parametresCompte: IParametresCompte) {
    this.id = parametresCompte.id;
    this.client = parametresCompte.client;
    this._solde = parametresCompte.solde;
  }

  get solde(): number {
    return this._solde;
  }

  set solde(valeur) {
    if (valeur >= 0) {
      this._solde = valeur;
    } else {
      throw Error('Solde ne pas etre negatif');
    }
  }

  crediter(somme: number) {
    this.solde += somme;
  }

  debiter(somme: number) {
    this.solde -= somme;
  }

  infoCompte() {
    return {};
  }
}

export default CompteBancaire;
