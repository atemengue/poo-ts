/** @format */

import { IParametresCompte } from './interface';

import CompteBancaire from './compte-bancaire';
import { TypeCompte } from './enums';

class CompteEpargne extends CompteBancaire {
  public tauxInterest: number;
  typeCompte = TypeCompte.Epargne;

  constructor(parametresCompte: IParametresCompte) {
    super(parametresCompte);
    this.tauxInterest = parametresCompte.tauxInteret;
  }

  crediter(somme: number): void {
    let nvMontant = somme + somme * (this.tauxInterest / 100);
    this.solde += nvMontant;
  }
}

export default CompteEpargne;
