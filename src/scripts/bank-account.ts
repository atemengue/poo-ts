/** @format */

import { Account, AcccountSettings, AccountInfo } from './interfaces';

abstract class BankAccount implements Account {
  private _solde = 0;
  id: number;
  title: string;
  abstract accountType: string;

  constructor(accountSettings: AcccountSettings) {
    (this.id = accountSettings.id),
      (this.title = accountSettings.title),
      (this._solde = accountSettings.solde);
  }

  crediter(somme: number) {
    this._solde += somme;
  }

  debiter(somme: number) {
    this._solde -= somme;
  }

  get solde(): number {
    return this._solde;
  }

  abstract getAccountInfo(): AccountInfo;

  set solde(val: number) {
    if (val >= 0) {
      this._solde = val;
    } else {
      throw Error('Solde ne peut pas etre negatif');
    }
  }
}

export default BankAccount;
