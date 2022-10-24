/** @format */
import CompteCourant from './scripts/compte-courant';
import CompteEpargne from './scripts/compte-epargne';
import Renderer from './scripts/renderer';

// creation d'une instance d' un compte

class Main {
  // proprietes de la classe
  public compteCourant: CompteCourant;
  public compteEpargne: CompteEpargne;

  // constructeur
  constructor() {
    this.compteEpargne = new CompteEpargne({
      id: 1,
      nomClient: 'Antoine Junoir',
      solde: 2000,
      tauxInteret: 2.5,
    });
    this.afficheCompte();
  }

  // Affiche les comptes
  afficheCompte() {
    const html = (document.querySelector('#appTemplate').innerHTML = `
    <h2> Bienvenu UBA Bank!</h2><br /><h5>Le solde de votre compte:</h5><br />

      <h3>Type de Compte: Epargne</h3>
      Nom du client: ${this.compteEpargne.nomClient}
      <br />
      Solde du client: ${this.compteEpargne.solde.toFixed(2)}

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
      this.compteEpargne.crediter(valeurInput);
    } else {
      this.compteEpargne.debiter(valeurInput);
    }

    this.afficheCompte();
  }
}

Renderer.appTemplate = document.querySelector('#appTemplate');
const main = new Main();

// exposer l'API du main dans la page web
(<any>window).main = main;
