/** @format */

import { ICreditDebit, ICompte } from './interface';

class ATM implements ICreditDebit {
  constructor(private account: ICompte) {}

  crediter(somme: number): void {
    this.account.crediter(somme);
  }

  debiter(somme: number): void {
    this.account.debiter(somme);
  }
}

export default ATM;
