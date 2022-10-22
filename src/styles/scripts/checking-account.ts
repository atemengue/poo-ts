/** @format */

import BankAccount from './bank-account';

class CheckingAccount extends BankAccount {
  accountType: string = 'Compte Courant';

  getAccountInfo() {
    return {};
  }
}

export default CheckingAccount;
