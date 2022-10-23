/** @format */

import { AccountList } from './scripts/account-list';
import ATM from './scripts/atm';
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
  public atm: ATM;

  // creation des comptes
  constructor(private renderer: Renderer) {}

  async loadAccount() {
    const response = await fetch('./data.json');
    const data = await response.json();
    this.checkingAccount = new CheckingAccount({ ...data.checkingAccount });
    this.savingAccount = new SavingAccount({ ...data.savingsAccount });
    this.atm = new ATM(this.checkingAccount);

    let html = this.renderAccounts();

    this.renderer.render(
      `<h2>Bienvenu UBA Bank!</h2><br />
       <image src="src/images/acmebank.jpg" height="150">
      <br/><br />
      <h5>Votre compte:</h5><br />
      ${html}`
    );
  }

  renderAtm() {
    const html = `
            <h3>ATM</h3>
            <image src="src/images/atm.jpg" height="150">
            <br /><br />
            Current Checking Account Balance: ${this.savingAccount.solde} FCFA
            <br /><br />
            $<input type="text" id="depositWithdrawalAmount">&nbsp;&nbsp;
            <button onclick="main.crediterDebiter(true, true)">Deposit</button>&nbsp;
            <button onclick="main.crediterDebiter(false, true)">Withdrawal</button>&nbsp;
        `;
    this.renderer.render(html);
  }

  changeView(view?: string) {
    switch (view) {
      case 'checking':
        this.currentAccount = this.checkingAccount;
        break;
      case 'savings':
        this.currentAccount = this.savingAccount;
        break;
      case 'atm':
        this.currentAccount = this.savingAccount;
        this.renderAtm();
        return;
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

  crediterDebiter(deposit: boolean, atm?: boolean) {
    let amountInput: HTMLInputElement = document.querySelector(
      '#depositWithdrawalAmount'
    );
    let amountValue = +amountInput.value;
    let error;

    try {
      if (deposit) {
        if (atm) {
          this.atm.crediter(amountValue);
        } else {
          this.currentAccount.crediter(amountValue);
        }
      } else {
        if (atm) {
          this.atm.debiter(amountValue);
        } else {
          this.currentAccount.debiter(amountValue);
        }
      }
    } catch (e) {
      error = e;
    }

    this.renderAccount(this.currentAccount);

    atm ? this.renderAtm() : this.renderAccount(this.currentAccount);
    if (error) {
      console.log(error);
      this.renderer.renderError(error.message);
    }
  }
}

const renderer = new Renderer(document.querySelector('#appTemplate'));
const main = new Main(renderer);
main.loadAccount();

console.log(main);

(<any>window).main = main;
