/** @format */

import CompteBancaire from './compte-bancaire';
import { TypeCompte } from './emuns';

class CompteCourant extends CompteBancaire {
  public typeCompte: string = 'courant';

  infoCompte() {
    return {};
  }

  transfererArgent(somme: number, compte: CompteBancaire) {
    this.debiter(somme);
    compte.crediter(somme);
  }
}

export default CompteCourant;
