/** @format */

import BankAccount from './bank-account';

class SavingAccount extends BankAccount {
  private interestRate: number;
  accountType: 'Savings';

  constructor(accountSettings: any) {
    super(accountSettings);
    this.interestRate = accountSettings.interestRate;
  }

  crediter(somme: number): void {
    let nvsomme = somme + somme * (this.interestRate / 100);
    this.solde += nvsomme;
  }

  getAccountInfo() {
    return {};
  }

  private addInterest() {
    this.solde = this.solde + this.solde * (this.interestRate / 1000);
  }
}

export default SavingAccount;
