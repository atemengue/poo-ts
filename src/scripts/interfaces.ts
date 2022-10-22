/** @format */

/** @format */

export interface CreditEtDebit {
  crediter(somme: number): void;
  debiter(somme: number): void;
}

export interface AccountInfo {
  routingNumber: number;
  bankNumber: number;
}

export interface AcccountSettings {
  id: number;
  title: string;
  solde: number;
  interestRate?: number;
  // acccount info
}

export interface Account extends AcccountSettings, CreditEtDebit {}
