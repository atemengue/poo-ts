/** @format */

import { AccountList } from './scripts/account-list';
/** @format */

import BankAccount from './scripts/bank-account';
import CheckingAccount from './scripts/checking-account';
import Renderer from './scripts/renreder';
import SavingAccount from './scripts/saving-account';

// Main
// 1 - Creer des compte
// 2 - Afficher des comptes
// 3 - Changer la vue des comptes
// 4 - Creer et debiter un compte

class Main {
  public checkingAccount: CheckingAccount;
  public savingAccount: SavingAccount;
  public currentAccount: BankAccount;

  // creation des comptes
  constructor(private renderer: Renderer) {
    this.checkingAccount = new CheckingAccount({
      id: 1,
      title: 'Jose Balla',
      solde: 1000000,
    });

    this.savingAccount = new SavingAccount({
      id: 2,
      title: 'Jose Balla',
      solde: 200000,
      interestRate: 2.5,
    });

    let html = this.renderAccounts();

    this.renderer.render(
      '<h2>Bienvenu UBA Bank!</h2><br /><h5>Votre compte:</h5><br />' + html
    );
  }

  changeView(view?: string) {
    switch (view) {
      case 'checking':
        this.currentAccount = this.checkingAccount;
        break;
      case 'savings':
        this.currentAccount = this.savingAccount;
        break;
    }
    this.renderAccount(this.currentAccount);
  }

  renderAccounts() {
    let acctsHtml: string = '';
    const accList = new AccountList();
    accList.add(this.checkingAccount);
    accList.add(this.savingAccount);

    accList.getAccounts().forEach((acct, index) => {
      acctsHtml += acct.title + '<br />';
    });
    return acctsHtml;
  }

  // affichages des informations du compte
  renderAccount(account: BankAccount) {
    const html = `
        <br />
        <span class="label">Client:</span> ${account.title}
        <br />
        <span class="label">Solde:</span> ${account.solde.toFixed(2)} FCFA
        <br /><br />
        <input type="text" id="depositWithdrawalAmount" />&nbsp;&nbsp;
        <button onclick="main.crediterDebiter(true)">Crediter</button>&nbsp;
        <button onclick="main.crediterDebiter(false)">Debiter</button>&nbsp;
      `;
    this.renderer.render(html);
  }

  crediterDebiter(deposit: boolean) {
    let amountInput: HTMLInputElement = document.querySelector(
      '#depositWithdrawalAmount'
    );
    let amountValue = +amountInput.value;
    let error;

    try {
      if (deposit) {
        this.currentAccount.crediter(amountValue);
      } else {
        this.currentAccount.debiter(amountValue);
      }
    } catch (e) {
      error = e;
    }

    this.renderAccount(this.currentAccount);

    if (error) {
      this.renderer.renderError(error.message);
    }
  }
}

const renderer = new Renderer(document.querySelector('#appTemplate'));
const main = new Main(renderer);

console.log(main);

(<any>window).main = main;
