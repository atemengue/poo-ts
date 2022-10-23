/** @format */

export interface ICreditDebit {
  crediter(somme: number): void;
  debiter(somme: number): void;
}

export interface IParametresCompte {
  id: number;
  client: string;
  solde: number;
  tauxInteret?: number;
}

export interface ICompte extends ICreditDebit, IParametresCompte {}
