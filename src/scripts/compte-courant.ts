/** @format */

import { IParametresCompte } from './interface';
/** @format */

import CompteBancaire from './compte-bancaire';
import { TypeCompte } from './enums';

class CompteCourant extends CompteBancaire {
  typeCompte = TypeCompte.Courant;

  constructor(parametresCompte: IParametresCompte) {
    super(parametresCompte);
  }
}

export default CompteCourant;
