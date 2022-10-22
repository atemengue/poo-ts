/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/scripts/account-list.ts":
/*!********************************************!*\
  !*** ./src/styles/scripts/account-list.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccountList": () => (/* binding */ AccountList)
/* harmony export */ });
/** @format */
var AccountList = /** @class */ (function () {
    function AccountList() {
        this._accountList = [];
    }
    AccountList.prototype.add = function (account) {
        this._accountList.push(account);
    };
    AccountList.prototype.getAccounts = function () {
        return this._accountList;
    };
    return AccountList;
}());



/***/ }),

/***/ "./src/styles/scripts/bank-account.ts":
/*!********************************************!*\
  !*** ./src/styles/scripts/bank-account.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @format */
var BankAccount = /** @class */ (function () {
    function BankAccount(accountSettings) {
        this._solde = 0;
        (this.id = accountSettings.id),
            (this.title = accountSettings.title),
            (this._solde = accountSettings.solde);
    }
    BankAccount.prototype.crediter = function (somme) {
        this._solde += somme;
    };
    BankAccount.prototype.debiter = function (somme) {
        this._solde -= somme;
    };
    Object.defineProperty(BankAccount.prototype, "solde", {
        get: function () {
            return this._solde;
        },
        set: function (val) {
            if (val >= 0) {
                this._solde = val;
            }
            else {
                throw Error('Solde ne peut pas etre negatif');
            }
        },
        enumerable: false,
        configurable: true
    });
    return BankAccount;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BankAccount);


/***/ }),

/***/ "./src/styles/scripts/checking-account.ts":
/*!************************************************!*\
  !*** ./src/styles/scripts/checking-account.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/styles/scripts/bank-account.ts");
/** @format */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var CheckingAccount = /** @class */ (function (_super) {
    __extends(CheckingAccount, _super);
    function CheckingAccount() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.accountType = 'Compte Courant';
        return _this;
    }
    CheckingAccount.prototype.getAccountInfo = function () {
        return {};
    };
    return CheckingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckingAccount);


/***/ }),

/***/ "./src/styles/scripts/renreder.ts":
/*!****************************************!*\
  !*** ./src/styles/scripts/renreder.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @format */
var Renderer = /** @class */ (function () {
    function Renderer(appTemplate) {
        this.appTemplate = appTemplate;
        this.appTemplate.innerHTML =
            '<h2>Bienvenu a UBA!</h2><br /><h5>Vos Comptes:</h5><br />';
    }
    Renderer.prototype.render = function (html) {
        this.appTemplate.innerHTML = html;
    };
    Renderer.prototype.renderError = function (message) {
        this.appTemplate.innerHTML += "<br /><br /><div class=\"alert alert-danger\">".concat(message, "</div>");
    };
    return Renderer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Renderer);


/***/ }),

/***/ "./src/styles/scripts/saving-account.ts":
/*!**********************************************!*\
  !*** ./src/styles/scripts/saving-account.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/styles/scripts/bank-account.ts");
/** @format */
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(accountSettings) {
        var _this = _super.call(this, accountSettings) || this;
        _this.interestRate = accountSettings.interestRate;
        return _this;
    }
    SavingAccount.prototype.crediter = function (somme) {
        var nvsomme = somme + somme * (this.interestRate / 100);
        this.solde += nvsomme;
    };
    SavingAccount.prototype.getAccountInfo = function () {
        return {};
    };
    SavingAccount.prototype.addInterest = function () {
        this.solde = this.solde + this.solde * (this.interestRate / 1000);
    };
    return SavingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SavingAccount);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_scripts_account_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/scripts/account-list */ "./src/styles/scripts/account-list.ts");
/* harmony import */ var _styles_scripts_checking_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/scripts/checking-account */ "./src/styles/scripts/checking-account.ts");
/* harmony import */ var _styles_scripts_renreder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/scripts/renreder */ "./src/styles/scripts/renreder.ts");
/* harmony import */ var _styles_scripts_saving_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./styles/scripts/saving-account */ "./src/styles/scripts/saving-account.ts");
/** @format */




// Main
// 1 - Creer des compte
// 2 - Afficher des comptes
// 3 - Changer la vue des comptes
// 4 - Creer et debiter un compte
var Main = /** @class */ (function () {
    // creation des comptes
    function Main(renderer) {
        this.renderer = renderer;
        this.checkingAccount = new _styles_scripts_checking_account__WEBPACK_IMPORTED_MODULE_1__["default"]({
            id: 1,
            title: 'Jose Balla',
            solde: 1000000,
        });
        this.savingAccount = new _styles_scripts_saving_account__WEBPACK_IMPORTED_MODULE_3__["default"]({
            id: 2,
            title: 'Jose Balla',
            solde: 200000,
            interestRate: 2.5,
        });
        var html = this.renderAccounts();
        this.renderer.render('<h2>Bienvenu UBA Bank!</h2><br /><h5>Votre compte:</h5><br />' + html);
    }
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'checking':
                this.currentAccount = this.checkingAccount;
                break;
            case 'savings':
                this.currentAccount = this.savingAccount;
                break;
        }
        this.renderAccount(this.currentAccount);
    };
    Main.prototype.renderAccounts = function () {
        var acctsHtml = '';
        var accList = new _styles_scripts_account_list__WEBPACK_IMPORTED_MODULE_0__.AccountList();
        accList.add(this.checkingAccount);
        accList.add(this.savingAccount);
        accList.getAccounts().forEach(function (acct, index) {
            acctsHtml += acct.title + '<br />';
        });
        return acctsHtml;
    };
    // affichages des informations du compte
    Main.prototype.renderAccount = function (account) {
        var html = "\n        <br />\n        <span class=\"label\">Client:</span> ".concat(account.title, "\n        <br />\n        <span class=\"label\">Solde:</span> ").concat(account.solde.toFixed(2), " FCFA\n        <br /><br />\n        <input type=\"text\" id=\"depositWithdrawalAmount\" />&nbsp;&nbsp;\n        <button onclick=\"main.crediterDebiter(true)\">Crediter</button>&nbsp;\n        <button onclick=\"main.crediterDebiter(false)\">Debiter</button>&nbsp;\n      ");
        this.renderer.render(html);
    };
    Main.prototype.crediterDebiter = function (deposit) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amountValue = +amountInput.value;
        var error;
        try {
            if (deposit) {
                this.currentAccount.crediter(amountValue);
            }
            else {
                this.currentAccount.debiter(amountValue);
            }
        }
        catch (e) {
            error = e;
        }
        this.renderAccount(this.currentAccount);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
var renderer = new _styles_scripts_renreder__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector('#appTemplate'));
var main = new Main(renderer);
console.log(main);
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxDQUFDLENBQUMsb1JBSzdELENBQUM7UUFDSixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBRUQsOEJBQWUsR0FBZixVQUFnQixPQUFnQjtRQUM5QixJQUFJLFdBQVcsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FDeEQsMEJBQTBCLENBQzNCLENBQUM7UUFDRixJQUFJLFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFDckMsSUFBSSxLQUFLLENBQUM7UUFFVixJQUFJO1lBQ0YsSUFBSSxPQUFPLEVBQUU7Z0JBQ1gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDMUM7U0FDRjtRQUFDLE9BQU8sQ0FBQyxFQUFFO1lBQ1YsS0FBSyxHQUFHLENBQUMsQ0FBQztTQUNYO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFFeEMsSUFBSSxLQUFLLEVBQUU7WUFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7U0FDMUM7SUFDSCxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFFRCxJQUFNLFFBQVEsR0FBRyxJQUFJLGdFQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWhDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFWixNQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3N0eWxlcy9zY3JpcHRzL2FjY291bnQtbGlzdC50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zdHlsZXMvc2NyaXB0cy9iYW5rLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc3R5bGVzL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zdHlsZXMvc2NyaXB0cy9yZW5yZWRlci50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zdHlsZXMvc2NyaXB0cy9zYXZpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IEJhbmtBY2NvdW50IGZyb20gJy4vYmFuay1hY2NvdW50JztcblxuZXhwb3J0IGNsYXNzIEFjY291bnRMaXN0IHtcbiAgX2FjY291bnRMaXN0OiBCYW5rQWNjb3VudFtdID0gW107XG5cbiAgYWRkKGFjY291bnQ6IEJhbmtBY2NvdW50KSB7XG4gICAgdGhpcy5fYWNjb3VudExpc3QucHVzaChhY2NvdW50KTtcbiAgfVxuXG4gIGdldEFjY291bnRzKCk6IEJhbmtBY2NvdW50W10ge1xuICAgIHJldHVybiB0aGlzLl9hY2NvdW50TGlzdDtcbiAgfVxufVxuIiwiLyoqIEBmb3JtYXQgKi9cblxuYWJzdHJhY3QgY2xhc3MgQmFua0FjY291bnQge1xuICBwcml2YXRlIF9zb2xkZSA9IDA7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGFic3RyYWN0IGFjY291bnRUeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBhbnkpIHtcbiAgICAodGhpcy5pZCA9IGFjY291bnRTZXR0aW5ncy5pZCksXG4gICAgICAodGhpcy50aXRsZSA9IGFjY291bnRTZXR0aW5ncy50aXRsZSksXG4gICAgICAodGhpcy5fc29sZGUgPSBhY2NvdW50U2V0dGluZ3Muc29sZGUpO1xuICB9XG5cbiAgY3JlZGl0ZXIoc29tbWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NvbGRlICs9IHNvbW1lO1xuICB9XG5cbiAgZGViaXRlcihzb21tZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc29sZGUgLT0gc29tbWU7XG4gIH1cblxuICBnZXQgc29sZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc29sZGU7XG4gIH1cblxuICBhYnN0cmFjdCBnZXRBY2NvdW50SW5mbygpOiBhbnk7XG5cbiAgc2V0IHNvbGRlKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCA+PSAwKSB7XG4gICAgICB0aGlzLl9zb2xkZSA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoJ1NvbGRlIG5lIHBldXQgcGFzIGV0cmUgbmVnYXRpZicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5rQWNjb3VudDtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBCYW5rQWNjb3VudCBmcm9tICcuL2JhbmstYWNjb3VudCc7XG5cbmNsYXNzIENoZWNraW5nQWNjb3VudCBleHRlbmRzIEJhbmtBY2NvdW50IHtcbiAgYWNjb3VudFR5cGU6IHN0cmluZyA9ICdDb21wdGUgQ291cmFudCc7XG5cbiAgZ2V0QWNjb3VudEluZm8oKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNraW5nQWNjb3VudDtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9XG4gICAgICAnPGgyPkJpZW52ZW51IGEgVUJBITwvaDI+PGJyIC8+PGg1PlZvcyBDb21wdGVzOjwvaDU+PGJyIC8+JztcbiAgfVxuXG4gIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cblxuICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IEJhbmtBY2NvdW50IGZyb20gJy4vYmFuay1hY2NvdW50JztcblxuY2xhc3MgU2F2aW5nQWNjb3VudCBleHRlbmRzIEJhbmtBY2NvdW50IHtcbiAgcHJpdmF0ZSBpbnRlcmVzdFJhdGU6IG51bWJlcjtcbiAgYWNjb3VudFR5cGU6ICdTYXZpbmdzJztcblxuICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IGFueSkge1xuICAgIHN1cGVyKGFjY291bnRTZXR0aW5ncyk7XG4gICAgdGhpcy5pbnRlcmVzdFJhdGUgPSBhY2NvdW50U2V0dGluZ3MuaW50ZXJlc3RSYXRlO1xuICB9XG5cbiAgY3JlZGl0ZXIoc29tbWU6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBudnNvbW1lID0gc29tbWUgKyBzb21tZSAqICh0aGlzLmludGVyZXN0UmF0ZSAvIDEwMCk7XG4gICAgdGhpcy5zb2xkZSArPSBudnNvbW1lO1xuICB9XG5cbiAgZ2V0QWNjb3VudEluZm8oKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG5cbiAgcHJpdmF0ZSBhZGRJbnRlcmVzdCgpIHtcbiAgICB0aGlzLnNvbGRlID0gdGhpcy5zb2xkZSArIHRoaXMuc29sZGUgKiAodGhpcy5pbnRlcmVzdFJhdGUgLyAxMDAwKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTYXZpbmdBY2NvdW50O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgeyBBY2NvdW50TGlzdCB9IGZyb20gJy4vc3R5bGVzL3NjcmlwdHMvYWNjb3VudC1saXN0Jztcbi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBCYW5rQWNjb3VudCBmcm9tICcuL3N0eWxlcy9zY3JpcHRzL2JhbmstYWNjb3VudCc7XG5pbXBvcnQgQ2hlY2tpbmdBY2NvdW50IGZyb20gJy4vc3R5bGVzL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudCc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9zdHlsZXMvc2NyaXB0cy9yZW5yZWRlcic7XG5pbXBvcnQgU2F2aW5nQWNjb3VudCBmcm9tICcuL3N0eWxlcy9zY3JpcHRzL3NhdmluZy1hY2NvdW50JztcblxuLy8gTWFpblxuLy8gMSAtIENyZWVyIGRlcyBjb21wdGVcbi8vIDIgLSBBZmZpY2hlciBkZXMgY29tcHRlc1xuLy8gMyAtIENoYW5nZXIgbGEgdnVlIGRlcyBjb21wdGVzXG4vLyA0IC0gQ3JlZXIgZXQgZGViaXRlciB1biBjb21wdGVcblxuY2xhc3MgTWFpbiB7XG4gIHB1YmxpYyBjaGVja2luZ0FjY291bnQ6IENoZWNraW5nQWNjb3VudDtcbiAgcHVibGljIHNhdmluZ0FjY291bnQ6IFNhdmluZ0FjY291bnQ7XG4gIHB1YmxpYyBjdXJyZW50QWNjb3VudDogQmFua0FjY291bnQ7XG5cbiAgLy8gY3JlYXRpb24gZGVzIGNvbXB0ZXNcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICB0aGlzLmNoZWNraW5nQWNjb3VudCA9IG5ldyBDaGVja2luZ0FjY291bnQoe1xuICAgICAgaWQ6IDEsXG4gICAgICB0aXRsZTogJ0pvc2UgQmFsbGEnLFxuICAgICAgc29sZGU6IDEwMDAwMDAsXG4gICAgfSk7XG5cbiAgICB0aGlzLnNhdmluZ0FjY291bnQgPSBuZXcgU2F2aW5nQWNjb3VudCh7XG4gICAgICBpZDogMixcbiAgICAgIHRpdGxlOiAnSm9zZSBCYWxsYScsXG4gICAgICBzb2xkZTogMjAwMDAwLFxuICAgICAgaW50ZXJlc3RSYXRlOiAyLjUsXG4gICAgfSk7XG5cbiAgICBsZXQgaHRtbCA9IHRoaXMucmVuZGVyQWNjb3VudHMoKTtcblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKFxuICAgICAgJzxoMj5CaWVudmVudSBVQkEgQmFuayE8L2gyPjxiciAvPjxoNT5Wb3RyZSBjb21wdGU6PC9oNT48YnIgLz4nICsgaHRtbFxuICAgICk7XG4gIH1cblxuICBjaGFuZ2VWaWV3KHZpZXc/OiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHZpZXcpIHtcbiAgICAgIGNhc2UgJ2NoZWNraW5nJzpcbiAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuY2hlY2tpbmdBY2NvdW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3NhdmluZ3MnOlxuICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5zYXZpbmdBY2NvdW50O1xuICAgICAgICBicmVhaztcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJBY2NvdW50KHRoaXMuY3VycmVudEFjY291bnQpO1xuICB9XG5cbiAgcmVuZGVyQWNjb3VudHMoKSB7XG4gICAgbGV0IGFjY3RzSHRtbDogc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWNjTGlzdCA9IG5ldyBBY2NvdW50TGlzdCgpO1xuICAgIGFjY0xpc3QuYWRkKHRoaXMuY2hlY2tpbmdBY2NvdW50KTtcbiAgICBhY2NMaXN0LmFkZCh0aGlzLnNhdmluZ0FjY291bnQpO1xuXG4gICAgYWNjTGlzdC5nZXRBY2NvdW50cygpLmZvckVhY2goKGFjY3QsIGluZGV4KSA9PiB7XG4gICAgICBhY2N0c0h0bWwgKz0gYWNjdC50aXRsZSArICc8YnIgLz4nO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2N0c0h0bWw7XG4gIH1cblxuICAvLyBhZmZpY2hhZ2VzIGRlcyBpbmZvcm1hdGlvbnMgZHUgY29tcHRlXG4gIHJlbmRlckFjY291bnQoYWNjb3VudDogQmFua0FjY291bnQpIHtcbiAgICBjb25zdCBodG1sID0gYFxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNsaWVudDo8L3NwYW4+ICR7YWNjb3VudC50aXRsZX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Tb2xkZTo8L3NwYW4+ICR7YWNjb3VudC5zb2xkZS50b0ZpeGVkKDIpfSBGQ0ZBXG4gICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImRlcG9zaXRXaXRoZHJhd2FsQW1vdW50XCIgLz4mbmJzcDsmbmJzcDtcbiAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckRlYml0ZXIodHJ1ZSlcIj5DcmVkaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmNyZWRpdGVyRGViaXRlcihmYWxzZSlcIj5EZWJpdGVyPC9idXR0b24+Jm5ic3A7XG4gICAgICBgO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG5cbiAgY3JlZGl0ZXJEZWJpdGVyKGRlcG9zaXQ6IGJvb2xlYW4pIHtcbiAgICBsZXQgYW1vdW50SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNkZXBvc2l0V2l0aGRyYXdhbEFtb3VudCdcbiAgICApO1xuICAgIGxldCBhbW91bnRWYWx1ZSA9ICthbW91bnRJbnB1dC52YWx1ZTtcbiAgICBsZXQgZXJyb3I7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGRlcG9zaXQpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudC5jcmVkaXRlcihhbW91bnRWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50LmRlYml0ZXIoYW1vdW50VmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XG5cbiAgICBpZiAoZXJyb3IpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIucmVuZGVyRXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICB9XG59XG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBUZW1wbGF0ZScpKTtcbmNvbnN0IG1haW4gPSBuZXcgTWFpbihyZW5kZXJlcik7XG5cbmNvbnNvbGUubG9nKG1haW4pO1xuXG4oPGFueT53aW5kb3cpLm1haW4gPSBtYWluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9