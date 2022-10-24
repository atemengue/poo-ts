/** @format */
import CompteCourant from './scripts/compte-courant';
import Renderer from './scripts/renderer';

// creation d'une instance d' un compte

class Main {
  // proprietes de la classe
  public compteCourant: CompteCourant;

  // constructeur
  constructor() {
    this.compteCourant = new CompteCourant('Antoine Junoir');
    this.afficheCompte();
  }

  // Affiche les comptes
  afficheCompte() {
    const html = (document.querySelector('#appTemplate').innerHTML = `
    <h2> Bienvenu UBA Bank!</h2><br /><h5>Le solde de votre compte:</h5><br />
      Nom du client 1: ${this.compteCourant.nomClient}
      <br />
      Solde du client: ${this.compteCourant.solde.toFixed(2)}

      <br /><br />
      
      <input type="text" id="creditEtDebit" />&nbsp;&nbsp;
      <button onclick="main.crediterDebiter(true)">Crediter</button>&nbsp;
      <button onclick="main.crediterDebiter(false)">Debiter</button>&nbsp;
      

    `);

    Renderer.render(html);
  }
  // debiter et crediter des comptes

  crediterDebiter(credit: boolean) {
    const input: HTMLInputElement = document.querySelector('#creditEtDebit');
    const valeurInput = parseInt(input.value);

    if (credit) {
      this.compteCourant.crediter(valeurInput);
    } else {
      this.compteCourant.debiter(valeurInput);
    }

    this.afficheCompte();
  }
}

Renderer.appTemplate = document.querySelector('#appTemplate');
const main = new Main();

// exposer l'API du main dans la page web
(<any>window).main = main;
