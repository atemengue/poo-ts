/** @format */

import CompteBancaire from './compte-bancaire';
import { TypeCompte } from './emuns';

class CompteCourant extends CompteBancaire {
  public typeCompte: string = 'courant';

  infoCompte() {
    return {};
  }

  transfertArgent(somme: number, compte: CompteBancaire) {
    this.debiter(somme);
    compte.crediter(somme);
  }
}

export default CompteCourant;
