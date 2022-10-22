/** @format */

import CheckingAccount from './styles/scripts/checking-account';
import Renderer from './styles/scripts/renreder';

// Main
// 1 - Creation des compte
// 2 - Affichages des comptes

class Main {
  public checkingAccount: CheckingAccount;
  // creation des comptes
  constructor() {
    this.checkingAccount = new CheckingAccount('Hermine Claudia');
    this.renderAccount();
  }

  // affichages des informations du compte
  renderAccount() {
    const html = `
        <h2>Bienvenu UBA Bank!</h2>
        <h3>Compte Courant</h3>
        <br />
        <span class="label">Client:</span> ${this.checkingAccount.title}
        <br />
        <span class="label">Solde:</span> ${this.checkingAccount.solde.toFixed(
          2
        )} FCFA
        <br /><br />
        <input type="text" id="depositWithdrawalAmount" />&nbsp;&nbsp;
        <button onclick="main.crediterDebiter(true)">Crediter</button>&nbsp;
        <button onclick="main.crediterDebiter(false)">Debiter</button>&nbsp;
      `;
    Renderer.render(html);
  }

  crediterDebiter(deposit: boolean) {
    let amountInput: HTMLInputElement = document.querySelector(
      '#depositWithdrawalAmount'
    );
    let amountValue = +amountInput.value;

    if (deposit) {
      this.checkingAccount.crediter(amountValue);
    } else {
      this.checkingAccount.debiter(amountValue);
    }
    this.renderAccount();
  }
}

Renderer.appTemplate = document.querySelector('#appTemplate');
const main = new Main();

(<any>window).main = main;
