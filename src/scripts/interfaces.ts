/** @format */

export interface iCrediterDebiter {
  crediter(somme: number): void;
  debiter(somme: number): void;
}

export interface IParametresCompte {
  id: number;
  solde: number;
  nomClient: string;
  tauxInteret?: number;
}

export interface ICompteBancaire extends iCrediterDebiter, IParametresCompte {}
