/** @format */

import BankAccount from './bank-account';
import { AcccountSettings, AccountInfo } from './interfaces';

class SavingAccount extends BankAccount {
  private interestRate: number;
  accountType: 'Savings';

  constructor(accountSettings: AcccountSettings) {
    super(accountSettings);
    this.interestRate = accountSettings.interestRate;
  }

  crediter(somme: number): void {
    let nvsomme = somme + somme * (this.interestRate / 100);
    this.solde += nvsomme;
  }

  getAccountInfo(): AccountInfo {
    return {
      routingNumber: 1,
      bankNumber: 2,
    };
  }

  private addInterest() {
    this.solde = this.solde + this.solde * (this.interestRate / 1000);
  }
}

export default SavingAccount;
