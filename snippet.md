<!-- @format -->

// MAIN HTML GETTING STARTED //

<h2>Bienvenu UBA Bank!</h2>
<br />
<h5>Le solde de votre compte:</h5>
<br />
Object Literal Object Solde: ${objLiteral.solde} FCFA
<br />
Class Object solde: ${classObj.solde} FCFA
<br />
Function Constructor Object Solde: ${functionObj.solde} FCFA
<br />
Object.create() Object solde: $${objCreate.solde} FCFA

<br /><br />
<strong>Total:</strong>

${total} FCFA // MAIN HTML CLASS AND OBJET //

<h2>Bienvenu UBA Bank!</h2>
<h3>Compte Courant</h3>
<br />
<span class="label">Client:</span> ${this.checkingAccount.title}
<br />
<span class="label">Solde:</span> ${this.checkingAccount.solde.toFixed( 2 )}
FCFA <br /><br />
<input type="text" id="depositWithdrawalAmount" />&nbsp;&nbsp;
<button onclick="main.crediterDebiter(true)">Crediter</button>&nbsp;
<button onclick="main.crediterDebiter(false)">Debiter</button>&nbsp;
Renderer.appTemplate = document.querySelector('#appTemplate'); const main = new
Main(); (<any>window).main = main; </any>

<!-- RENDERER CLASS HERITAGE  -->

export class Renderer { constructor(private appTemplate: HTMLDivElement) {
this.appTemplate.innerHTML = '

<h2>Bienvenu a UBA!</h2>
<br />
<h5>Vos Comptes:</h5>
<br />'; } render(html: string) { this.appTemplate.innerHTML = html; }
renderError(message: string) { this.appTemplate.innerHTML += `<br /><br />
<div class="alert alert-danger">${message}</div>
`; } }

// Acccount List
import { BankAccount } from './bank-account';

export class AccountList {
\_accountList: BankAccount[] = [];

    add(account: BankAccount) {
        this._accountList.push(account);
    }

    getAccounts(): BankAccount[] {
        return this._accountList;
    }

}

renderAccounts() {
let acctsHtml: string = '';  
 const accList = new AccountList();
accList.add(this.checkingAccount);
accList.add(this.savingsAccount);

        accList.getAccounts().forEach((acct, index) => {
            acctsHtml += acct.title + '<br />';
        });
        return acctsHtml;
    }

    changeView(view?: string) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
        }
        this.renderAccount(this.currentAccount);
    }

   <div class="collapse navbar-collapse" id="navbarText">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#" onclick="main.changeView('checking')"
                >Compte courant</a
              >
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#" onclick="main.changeView('savings')"
                >Compte Epargne</a
              >
            </li>
          </ul>



    changeView(view?: string) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingsAccount;
                break;
            case 'atm':
                this.currentAccount = this.checkingAccount;
                this.renderAtm();
                return;
        }
        this.renderAccount(this.currentAccount);
    }

    renderAtm() {
        const html = `
                <h3>ATM</h3>
                <image src="src/images/atm.jpg" height="150">
                <br /><br />
                Current Checking Account Balance: $${this.checkingAccount.balance}
                <br /><br />
                $<input type="text" id="depositWithdrawalAmount">&nbsp;&nbsp;
                <button onclick="main.depositWithDrawal(true, true)">Deposit</button>&nbsp;
                <button onclick="main.depositWithDrawal(false, true)">Withdrawal</button>&nbsp;
            `;
        this.renderer.render(html);
    }