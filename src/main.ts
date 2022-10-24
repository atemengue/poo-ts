/** @format */

import { ListComptes } from './scripts/ListComptes';
import CompteCourant from './scripts/compte-courant';
import CompteEpargne from './scripts/compte-epargne';
import CompteBancaire from './scripts/compte-bancaire';
import Renderer from './scripts/renderer';
import ATM from './scripts/atm';
class Main {
  public compteCourant: CompteCourant;
  public compteEpargne: CompteEpargne;
  public compteTransaction: CompteBancaire;
  public atm: ATM;

  // creation compte actuel/ en cours de traitement;

  // 1 - creation des comptes bancaires
  constructor(private renderer: Renderer) {
    this.compteCourant = new CompteCourant({
      id: 1,
      nomClient: 'Jose Balla',
      solde: 10000,
    });

    this.compteEpargne = new CompteEpargne({
      id: 100,
      nomClient: 'Jose Balla',
      solde: 15000,
      tauxInteret: 2.5,
    });

    // ATM instanciaction de L'ATM
    this.atm = new ATM(this.compteEpargne);

    let html = this.afficheComptes();

    this.renderer.render(
      '<h2>Bienvenu a UBA BANK!</h2><br /><h5>Vos Comptes:</h5><br />' + html
    );
  }

  afficheComptes() {
    let acctsHtml: string = '';
    const accList = new ListComptes();
    accList.ajouter(this.compteCourant);
    accList.ajouter(this.compteEpargne);

    accList.getComptes().forEach((acct, index) => {
      acctsHtml += acct.nomClient + '<br />';
    });
    return acctsHtml;
  }

  transfert() {
    let input: HTMLInputElement = document.querySelector('#sommeDepotRetrait');
    let somme = parseInt(input.value);

    this.compteCourant.transfererArgent(somme, this.compteEpargne);

    this.afficheCompte(this.compteTransaction);
  }

  afficheCompte(compte: CompteBancaire) {
    const typeCompte = compte.typeCompte;
    const html = `
      <h2></h2>
      <h3>Compte ${typeCompte}</h3>
      <br />
      <image src="src/images/${typeCompte}.jpg" heigt="150">
      <div>
      <span class="label">Client:</span> ${compte.nomClient}
      <br />
      <span class="label">Solde:</span> ${compte.solde.toFixed(2)}
      FCFA 
      </div>
      <br /><br />
      <input type="text" id="sommeDepotRetrait" />&nbsp;&nbsp;
      <button onclick="main.crediterEtDebiter(true)">Crediter</button>&nbsp;
      <button onclick="main.crediterEtDebiter(false)">Debiter</button>&nbsp;
      <button onclick="main.transfert()">Transferer argent</button>&nbsp;
      `;
    this.renderer.render(html);
  }

  // 3 - Crediter et Debiter les comptes bancaires
  crediterEtDebiter(depot: boolean, atm?: boolean) {
    let input: HTMLInputElement = document.querySelector('#sommeDepotRetrait');
    let inputValue = parseInt(input.value);
    let error;

    try {
      if (depot) {
        if (atm) {
          this.atm.crediter(inputValue);
        } else {
          this.compteTransaction.crediter(inputValue);
        }
      } else {
        if (atm) {
          this.atm.debiter(inputValue);
        } else {
          this.compteTransaction.debiter(inputValue);
        }
      }
    } catch (e) {
      error = e;
    }

    atm ? this.afficheATM() : this.afficheCompte(this.compteTransaction);

    if (error) {
      this.renderer.renderError(error.message);
    }
  }

  afficheATM() {
    const html = `
            <h3>ATM</h3>
            <image src="src/images/atm.jpg" height="150">
            <br /><br />
            Votre compte Courant: ${this.compteEpargne.solde} FCFA
            <br /><br />
            <input type="text" id="sommeDepotRetrait" /> FCFA &nbsp;&nbsp;
            <button onclick="main.crediterEtDebiter(true, true)">Crediter</button>&nbsp;
            <button onclick="main.crediterEtDebiter(false, true)">Debiter</button>&nbsp;
        `;
    this.renderer.render(html);
  }

  changeView(view?: string) {
    switch (view) {
      case 'courant':
        this.compteTransaction = this.compteCourant;
        break;
      case 'epargne':
        this.compteTransaction = this.compteEpargne;
        break;
      case 'atm':
        this.compteTransaction = this.compteCourant;
        this.afficheATM();
        return;
    }
    this.afficheCompte(this.compteTransaction);
  }
}

const renderer = new Renderer(document.querySelector('#appTemplate'));
const main = new Main(renderer);

// renderer API main disponible dans l'app
(<any>window).main = main;
