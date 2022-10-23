/** @format */

import CompteBancaire from './compte-bancaire';
import { TypeCompte } from './enums';

class CompteEpargne extends CompteBancaire {
  public tauxInterest: number;
  typeCompte = TypeCompte.Epargne;

  constructor(parametresCompte: any) {
    super(parametresCompte);
    this.tauxInterest = parametresCompte.tauxInterest;
  }

  crediter(somme: number): void {
    let nvMontant = somme + somme * (this.tauxInterest / 100);
    this.solde += nvMontant;
  }
}

export default CompteEpargne;
