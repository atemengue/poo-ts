/** @format */

import BankAccount from './bank-account';
import { AccountInfo } from './interfaces';

class CheckingAccount extends BankAccount {
  accountType: string = 'Compte Courant';

  getAccountInfo(): AccountInfo {
    return {
      routingNumber: 1,
      bankNumber: 2,
    };
  }
}

export default CheckingAccount;
