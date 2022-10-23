/** @format */

import CompteCourant from './scripts/compte-courant';
import Renderer from './scripts/renderer';

class Main {
  public compteCourant: CompteCourant;

  // 1 - creation des comptes bancaires
  constructor() {
    this.compteCourant = new CompteCourant('Jose Balla', 1000);
    this.afficheCompte();
  }

  // 2 - Affichages des comptes bancaires;
  afficheCompte() {
    const html = `
      <h2>Bienvenu UBA Bank!</h2>
      <h3>Compte Courant</h3>
      <br />
      <span class="label">Client:</span> ${this.compteCourant.client}
      <br />
      <span class="label">Solde:</span> ${this.compteCourant.solde.toFixed(2)}
      FCFA <br /><br />
      <input type="text" id="sommeDepotRetrait" />&nbsp;&nbsp;
      <button onclick="main.crediterEtDebiter(true)">Crediter</button>&nbsp;
      <button onclick="main.crediterEtDebiter(false)">Debiter</button>&nbsp;
      `;
    Renderer.render(html);
  }
  // 3 - Crediter et Debiter les comptes bancaires
  crediterEtDebiter(depot: boolean) {
    let input: HTMLInputElement = document.querySelector('#sommeDepotRetrait');
    let inputValue = parseInt(input.value);

    if (depot) {
      this.compteCourant.crediter(inputValue);
    } else {
      this.compteCourant.debiter(inputValue);
    }

    this.afficheCompte();
  }
}

Renderer.appTemplate = document.querySelector('#appTemplate');

const main = new Main();

(<any>window).main = main;
