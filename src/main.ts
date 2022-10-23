/** @format */

import { ListComptes } from './scripts/AccountLists';
import CompteCourant from './scripts/compte-courant';
import CompteEpargne from './scripts/compte-epargne';
import CompteBancaire from './scripts/compte-bancaire';
import { TypeCompte } from './scripts/enums';
import { Renderer } from './scripts/renderer';
class Main {
  public compteCourant: CompteCourant;
  public compteEpargne: CompteEpargne;
  public compteActuel: CompteBancaire;

  // 1 - creation des comptes bancaires
  constructor(private renderer: Renderer) {
    this.compteCourant = new CompteCourant({
      id: 1,
      client: 'Jose Balla',
      solde: 10000,
    });

    this.compteEpargne = new CompteEpargne({
      id: 100,
      client: 'Jose Balla',
      solde: 15000,
      tauxInterest: 2.5,
    });

    let html = this.afficheComptes();

    this.renderer.render(
      '<h2>Bienvenu a la banque!</h2><br /><h5>Votre Compte:</h5><br />' + html
    );
  }

  afficheComptes() {
    let acctsHtml: string = '';
    const accList = new ListComptes();
    accList.ajouter(this.compteCourant);
    accList.ajouter(this.compteEpargne);

    accList.getComptes().forEach((acct, index) => {
      acctsHtml += acct.client + '<br />';
    });
    return acctsHtml;
  }

  afficheCompte(compte: CompteBancaire) {
    console.log(compte);
    const typeCompte = TypeCompte[compte.typeCompte];
    const html = `
      <h2></h2>
      <h3>Compte ${typeCompte}</h3>
      <br />
      <span class="label">Client:</span> ${compte.client}
      <br />
      <span class="label">Solde:</span> ${compte.solde.toFixed(2)}
      FCFA <br /><br />
      <input type="text" id="sommeDepotRetrait" />&nbsp;&nbsp;
      <button onclick="main.crediterEtDebiter(true)">Crediter</button>&nbsp;
      <button onclick="main.crediterEtDebiter(false)">Debiter</button>&nbsp;
      `;
    this.renderer.render(html);
  }
  // 3 - Crediter et Debiter les comptes bancaires
  crediterEtDebiter(depot: boolean) {
    let input: HTMLInputElement = document.querySelector('#sommeDepotRetrait');
    let inputValue = parseInt(input.value);
    let error;

    try {
      if (depot) {
        this.compteActuel.crediter(inputValue);
      } else {
        this.compteActuel.debiter(inputValue);
      }
    } catch (e) {
      error = e;
    }
    this.afficheCompte(this.compteActuel);

    if (error) {
      this.renderer.renderError(error.message);
    }
  }

  changeView(view?: string) {
    switch (view) {
      case 'courant':
        this.compteActuel = this.compteCourant;
        break;
      case 'epargne':
        this.compteActuel = this.compteEpargne;
        break;
    }
    this.afficheCompte(this.compteActuel);
  }
}

const renderer = new Renderer(document.querySelector('#appTemplate'));
const main = new Main(renderer);

(<any>window).main = main;
