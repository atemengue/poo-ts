/** @format */
import CompteBancaire from './compte-bancaire';
import { IcrediterDebiter } from './interfaces';

class ATM implements IcrediterDebiter {
  constructor(private compte: CompteBancaire) {}

  crediter(somme: number): void {
    this.compte.crediter(somme);
  }

  debiter(somme: number): void {
    this.compte.debiter(somme);
  }
}

export default ATM;
