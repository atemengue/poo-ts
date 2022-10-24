/** @format */

export interface IcrediterDebiter {
  crediter(somme: number): void;
  debiter(somme: number): void;
}

export interface IparametresComptes {
  id: number;
  nomClient: string;
  solde: number;
  tauxInteret?: number;
}

export interface ICompteBancaire extends IcrediterDebiter, IparametresComptes {}
