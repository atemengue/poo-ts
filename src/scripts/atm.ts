/** @format */

import BankAccount from './bank-account';
import { CreditEtDebit, Account } from './interfaces';

class ATM implements CreditEtDebit {
  constructor(private account: BankAccount) {}

  crediter(somme: number): void {
    this.account.crediter(somme);
  }
  debiter(somme: number): void {
    this.account.debiter(somme);
  }
}

export default ATM;
