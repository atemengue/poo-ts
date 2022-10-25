/** @format */

import { TypeCompte } from './emuns';
/** @format */

import { IParametresCompte } from './interfaces';
/** @format */

import CompteBancaire from './compte-bancaire';

class CompteEpargne extends CompteBancaire {
  public tauxInteret: number;

  typeCompte: string = 'epargne';

  constructor(parametresComptes: IParametresCompte) {
    super(parametresComptes);
    this.tauxInteret = parametresComptes.tauxInteret;
  }

  infoCompte(): void {}

  crediter(somme: number): void {
    let montant = somme + (somme * this.tauxInteret) / 100;
    this.solde += montant;
  }
}

export default CompteEpargne;
