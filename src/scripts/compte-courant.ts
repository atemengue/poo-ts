/** @format */

import CompteBancaire from './compte-bancaire';
import { TypeCompte } from './enums';

class CompteCourant extends CompteBancaire {
  typeCompte = TypeCompte.Courant;

  constructor(parametresCompte: any) {
    super(parametresCompte);
  }
}

export default CompteCourant;
