/** @format */

import CompteBancaire from './compte-bancaire';
import { TypeCompte } from './emuns';

class CompteCourant extends CompteBancaire {
  public typeCompte: string = 'Epargne';

  infoCompte() {
    return {};
  }
}

export default CompteCourant;
