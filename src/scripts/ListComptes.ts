/** @format */

import CompteBancaire from './compte-bancaire';

export class ListComptes {
  _listComptes: CompteBancaire[] = [];

  ajouter(compte: CompteBancaire) {
    this._listComptes.push(compte);
  }

  getComptes(): CompteBancaire[] {
    return this._listComptes;
  }
}
