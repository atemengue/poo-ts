/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/account-list.ts":
/*!*************************************!*\
  !*** ./src/scripts/account-list.ts ***!
  \*************************************/
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

/***/ "./src/scripts/bank-account.ts":
/*!*************************************!*\
  !*** ./src/scripts/bank-account.ts ***!
  \*************************************/
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

/***/ "./src/scripts/checking-account.ts":
/*!*****************************************!*\
  !*** ./src/scripts/checking-account.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
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
        return {
            routingNumber: 1,
            bankNumber: 2,
        };
    };
    return CheckingAccount;
}(_bank_account__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CheckingAccount);


/***/ }),

/***/ "./src/scripts/renreder.ts":
/*!*********************************!*\
  !*** ./src/scripts/renreder.ts ***!
  \*********************************/
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

/***/ "./src/scripts/saving-account.ts":
/*!***************************************!*\
  !*** ./src/scripts/saving-account.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _bank_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bank-account */ "./src/scripts/bank-account.ts");
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
        return {
            routingNumber: 1,
            bankNumber: 2,
        };
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
/* harmony import */ var _scripts_account_list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/account-list */ "./src/scripts/account-list.ts");
/* harmony import */ var _scripts_checking_account__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/checking-account */ "./src/scripts/checking-account.ts");
/* harmony import */ var _scripts_renreder__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/renreder */ "./src/scripts/renreder.ts");
/* harmony import */ var _scripts_saving_account__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/saving-account */ "./src/scripts/saving-account.ts");
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
        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_1__["default"]({
            id: 1,
            title: 'Jose Balla',
            solde: 1000000,
        });
        this.savingAccount = new _scripts_saving_account__WEBPACK_IMPORTED_MODULE_3__["default"]({
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
        var accList = new _scripts_account_list__WEBPACK_IMPORTED_MODULE_0__.AccountList();
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
var renderer = new _scripts_renreder__WEBPACK_IMPORTED_MODULE_2__["default"](document.querySelector('#appTemplate'));
var main = new Main(renderer);
console.log(main);
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Iiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9hY2NvdW50LWxpc3QudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9iYW5rLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9jaGVja2luZy1hY2NvdW50LnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvcmVucmVkZXIudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9zYXZpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IEJhbmtBY2NvdW50IGZyb20gJy4vYmFuay1hY2NvdW50JztcblxuZXhwb3J0IGNsYXNzIEFjY291bnRMaXN0IHtcbiAgX2FjY291bnRMaXN0OiBCYW5rQWNjb3VudFtdID0gW107XG5cbiAgYWRkKGFjY291bnQ6IEJhbmtBY2NvdW50KSB7XG4gICAgdGhpcy5fYWNjb3VudExpc3QucHVzaChhY2NvdW50KTtcbiAgfVxuXG4gIGdldEFjY291bnRzKCk6IEJhbmtBY2NvdW50W10ge1xuICAgIHJldHVybiB0aGlzLl9hY2NvdW50TGlzdDtcbiAgfVxufVxuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgQWNjb3VudCwgQWNjY291bnRTZXR0aW5ncywgQWNjb3VudEluZm8gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5hYnN0cmFjdCBjbGFzcyBCYW5rQWNjb3VudCBpbXBsZW1lbnRzIEFjY291bnQge1xuICBwcml2YXRlIF9zb2xkZSA9IDA7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIGFic3RyYWN0IGFjY291bnRUeXBlOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBBY2Njb3VudFNldHRpbmdzKSB7XG4gICAgKHRoaXMuaWQgPSBhY2NvdW50U2V0dGluZ3MuaWQpLFxuICAgICAgKHRoaXMudGl0bGUgPSBhY2NvdW50U2V0dGluZ3MudGl0bGUpLFxuICAgICAgKHRoaXMuX3NvbGRlID0gYWNjb3VudFNldHRpbmdzLnNvbGRlKTtcbiAgfVxuXG4gIGNyZWRpdGVyKHNvbW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zb2xkZSArPSBzb21tZTtcbiAgfVxuXG4gIGRlYml0ZXIoc29tbWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NvbGRlIC09IHNvbW1lO1xuICB9XG5cbiAgZ2V0IHNvbGRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvbGRlO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0QWNjb3VudEluZm8oKTogQWNjb3VudEluZm87XG5cbiAgc2V0IHNvbGRlKHZhbDogbnVtYmVyKSB7XG4gICAgaWYgKHZhbCA+PSAwKSB7XG4gICAgICB0aGlzLl9zb2xkZSA9IHZhbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoJ1NvbGRlIG5lIHBldXQgcGFzIGV0cmUgbmVnYXRpZicpO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYW5rQWNjb3VudDtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBCYW5rQWNjb3VudCBmcm9tICcuL2JhbmstYWNjb3VudCc7XG5pbXBvcnQgeyBBY2NvdW50SW5mbyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmNsYXNzIENoZWNraW5nQWNjb3VudCBleHRlbmRzIEJhbmtBY2NvdW50IHtcbiAgYWNjb3VudFR5cGU6IHN0cmluZyA9ICdDb21wdGUgQ291cmFudCc7XG5cbiAgZ2V0QWNjb3VudEluZm8oKTogQWNjb3VudEluZm8ge1xuICAgIHJldHVybiB7XG4gICAgICByb3V0aW5nTnVtYmVyOiAxLFxuICAgICAgYmFua051bWJlcjogMixcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNraW5nQWNjb3VudDtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9XG4gICAgICAnPGgyPkJpZW52ZW51IGEgVUJBITwvaDI+PGJyIC8+PGg1PlZvcyBDb21wdGVzOjwvaDU+PGJyIC8+JztcbiAgfVxuXG4gIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cblxuICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcmVyO1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IEJhbmtBY2NvdW50IGZyb20gJy4vYmFuay1hY2NvdW50JztcbmltcG9ydCB7IEFjY2NvdW50U2V0dGluZ3MsIEFjY291bnRJbmZvIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuY2xhc3MgU2F2aW5nQWNjb3VudCBleHRlbmRzIEJhbmtBY2NvdW50IHtcbiAgcHJpdmF0ZSBpbnRlcmVzdFJhdGU6IG51bWJlcjtcbiAgYWNjb3VudFR5cGU6ICdTYXZpbmdzJztcblxuICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IEFjY2NvdW50U2V0dGluZ3MpIHtcbiAgICBzdXBlcihhY2NvdW50U2V0dGluZ3MpO1xuICAgIHRoaXMuaW50ZXJlc3RSYXRlID0gYWNjb3VudFNldHRpbmdzLmludGVyZXN0UmF0ZTtcbiAgfVxuXG4gIGNyZWRpdGVyKHNvbW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgbnZzb21tZSA9IHNvbW1lICsgc29tbWUgKiAodGhpcy5pbnRlcmVzdFJhdGUgLyAxMDApO1xuICAgIHRoaXMuc29sZGUgKz0gbnZzb21tZTtcbiAgfVxuXG4gIGdldEFjY291bnRJbmZvKCk6IEFjY291bnRJbmZvIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm91dGluZ051bWJlcjogMSxcbiAgICAgIGJhbmtOdW1iZXI6IDIsXG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgYWRkSW50ZXJlc3QoKSB7XG4gICAgdGhpcy5zb2xkZSA9IHRoaXMuc29sZGUgKyB0aGlzLnNvbGRlICogKHRoaXMuaW50ZXJlc3RSYXRlIC8gMTAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2F2aW5nQWNjb3VudDtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgQWNjb3VudExpc3QgfSBmcm9tICcuL3NjcmlwdHMvYWNjb3VudC1saXN0Jztcbi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBCYW5rQWNjb3VudCBmcm9tICcuL3NjcmlwdHMvYmFuay1hY2NvdW50JztcbmltcG9ydCBDaGVja2luZ0FjY291bnQgZnJvbSAnLi9zY3JpcHRzL2NoZWNraW5nLWFjY291bnQnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vc2NyaXB0cy9yZW5yZWRlcic7XG5pbXBvcnQgU2F2aW5nQWNjb3VudCBmcm9tICcuL3NjcmlwdHMvc2F2aW5nLWFjY291bnQnO1xuXG4vLyBNYWluXG4vLyAxIC0gQ3JlZXIgZGVzIGNvbXB0ZVxuLy8gMiAtIEFmZmljaGVyIGRlcyBjb21wdGVzXG4vLyAzIC0gQ2hhbmdlciBsYSB2dWUgZGVzIGNvbXB0ZXNcbi8vIDQgLSBDcmVlciBldCBkZWJpdGVyIHVuIGNvbXB0ZVxuXG5jbGFzcyBNYWluIHtcbiAgcHVibGljIGNoZWNraW5nQWNjb3VudDogQ2hlY2tpbmdBY2NvdW50O1xuICBwdWJsaWMgc2F2aW5nQWNjb3VudDogU2F2aW5nQWNjb3VudDtcbiAgcHVibGljIGN1cnJlbnRBY2NvdW50OiBCYW5rQWNjb3VudDtcblxuICAvLyBjcmVhdGlvbiBkZXMgY29tcHRlc1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50ID0gbmV3IENoZWNraW5nQWNjb3VudCh7XG4gICAgICBpZDogMSxcbiAgICAgIHRpdGxlOiAnSm9zZSBCYWxsYScsXG4gICAgICBzb2xkZTogMTAwMDAwMCxcbiAgICB9KTtcblxuICAgIHRoaXMuc2F2aW5nQWNjb3VudCA9IG5ldyBTYXZpbmdBY2NvdW50KHtcbiAgICAgIGlkOiAyLFxuICAgICAgdGl0bGU6ICdKb3NlIEJhbGxhJyxcbiAgICAgIHNvbGRlOiAyMDAwMDAsXG4gICAgICBpbnRlcmVzdFJhdGU6IDIuNSxcbiAgICB9KTtcblxuICAgIGxldCBodG1sID0gdGhpcy5yZW5kZXJBY2NvdW50cygpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoXG4gICAgICAnPGgyPkJpZW52ZW51IFVCQSBCYW5rITwvaDI+PGJyIC8+PGg1PlZvdHJlIGNvbXB0ZTo8L2g1PjxiciAvPicgKyBodG1sXG4gICAgKTtcbiAgfVxuXG4gIGNoYW5nZVZpZXcodmlldz86IHN0cmluZykge1xuICAgIHN3aXRjaCAodmlldykge1xuICAgICAgY2FzZSAnY2hlY2tpbmcnOlxuICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5jaGVja2luZ0FjY291bnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnc2F2aW5ncyc6XG4gICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSB0aGlzLnNhdmluZ0FjY291bnQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XG4gIH1cblxuICByZW5kZXJBY2NvdW50cygpIHtcbiAgICBsZXQgYWNjdHNIdG1sOiBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhY2NMaXN0ID0gbmV3IEFjY291bnRMaXN0KCk7XG4gICAgYWNjTGlzdC5hZGQodGhpcy5jaGVja2luZ0FjY291bnQpO1xuICAgIGFjY0xpc3QuYWRkKHRoaXMuc2F2aW5nQWNjb3VudCk7XG5cbiAgICBhY2NMaXN0LmdldEFjY291bnRzKCkuZm9yRWFjaCgoYWNjdCwgaW5kZXgpID0+IHtcbiAgICAgIGFjY3RzSHRtbCArPSBhY2N0LnRpdGxlICsgJzxiciAvPic7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjY3RzSHRtbDtcbiAgfVxuXG4gIC8vIGFmZmljaGFnZXMgZGVzIGluZm9ybWF0aW9ucyBkdSBjb21wdGVcbiAgcmVuZGVyQWNjb3VudChhY2NvdW50OiBCYW5rQWNjb3VudCkge1xuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Q2xpZW50Ojwvc3Bhbj4gJHthY2NvdW50LnRpdGxlfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlNvbGRlOjwvc3Bhbj4gJHthY2NvdW50LnNvbGRlLnRvRml4ZWQoMil9IEZDRkFcbiAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVwb3NpdFdpdGhkcmF3YWxBbW91bnRcIiAvPiZuYnNwOyZuYnNwO1xuICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmNyZWRpdGVyRGViaXRlcih0cnVlKVwiPkNyZWRpdGVyPC9idXR0b24+Jm5ic3A7XG4gICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJEZWJpdGVyKGZhbHNlKVwiPkRlYml0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgIGA7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoaHRtbCk7XG4gIH1cblxuICBjcmVkaXRlckRlYml0ZXIoZGVwb3NpdDogYm9vbGVhbikge1xuICAgIGxldCBhbW91bnRJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2RlcG9zaXRXaXRoZHJhd2FsQW1vdW50J1xuICAgICk7XG4gICAgbGV0IGFtb3VudFZhbHVlID0gK2Ftb3VudElucHV0LnZhbHVlO1xuICAgIGxldCBlcnJvcjtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoZGVwb3NpdCkge1xuICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50LmNyZWRpdGVyKGFtb3VudFZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudEFjY291bnQuZGViaXRlcihhbW91bnRWYWx1ZSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyQWNjb3VudCh0aGlzLmN1cnJlbnRBY2NvdW50KTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXJFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcFRlbXBsYXRlJykpO1xuY29uc3QgbWFpbiA9IG5ldyBNYWluKHJlbmRlcmVyKTtcblxuY29uc29sZS5sb2cobWFpbik7XG5cbig8YW55PndpbmRvdykubWFpbiA9IG1haW47XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=