/** @format */

import CompteBancaire from './compte-bancaire';

class CompteEpargne extends CompteBancaire {
  public tauxInteret: number;

  typeCompte: string = 'Epargne';

  constructor(parametresComptes: any) {
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
