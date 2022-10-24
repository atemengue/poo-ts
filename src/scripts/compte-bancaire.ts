/** @format */

import { IparametresComptes, ICompteBancaire } from './interfaces';
import { TypeCompte } from './emuns';

abstract class CompteBancaire implements ICompteBancaire {
  // proprietes
  private _solde: number = 0;
  public id: number;
  public nomClient: string;

  abstract typeCompte: string;

  // constructeur avec des propriets
  constructor(parametresComptes: any) {
    this.id = parametresComptes.id;
    this._solde = parametresComptes.solde;
    this.nomClient = parametresComptes.nomClient;
  }
  // getters et setters
  public get solde(): number {
    return this._solde;
  }

  public set solde(valeur: number) {
    this._solde = valeur;
  }
  // methodes
  abstract infoCompte(): void;

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

export default CompteBancaire;
