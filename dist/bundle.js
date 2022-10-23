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

/***/ "./src/scripts/atm.ts":
/*!****************************!*\
  !*** ./src/scripts/atm.ts ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @format */
var ATM = /** @class */ (function () {
    function ATM(account) {
        this.account = account;
    }
    ATM.prototype.crediter = function (somme) {
        this.account.crediter(somme);
    };
    ATM.prototype.debiter = function (somme) {
        this.account.debiter(somme);
    };
    return ATM;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ATM);


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
/* harmony import */ var _scripts_atm__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/atm */ "./src/scripts/atm.ts");
/* harmony import */ var _scripts_checking_account__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/checking-account */ "./src/scripts/checking-account.ts");
/* harmony import */ var _scripts_renreder__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/renreder */ "./src/scripts/renreder.ts");
/* harmony import */ var _scripts_saving_account__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/saving-account */ "./src/scripts/saving-account.ts");
/** @format */
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





// Main
// 1 - Creer des compte
// 2 - Afficher des comptes
// 3 - Changer la vue des comptes
// 4 - Creer et debiter un compte
var Main = /** @class */ (function () {
    // creation des comptes
    function Main(renderer) {
        this.renderer = renderer;
    }
    Main.prototype.loadAccount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, data, html;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch('./data.json')];
                    case 1:
                        response = _a.sent();
                        return [4 /*yield*/, response.json()];
                    case 2:
                        data = _a.sent();
                        this.checkingAccount = new _scripts_checking_account__WEBPACK_IMPORTED_MODULE_2__["default"](__assign({}, data.checkingAccount));
                        this.savingAccount = new _scripts_saving_account__WEBPACK_IMPORTED_MODULE_4__["default"](__assign({}, data.savingsAccount));
                        this.atm = new _scripts_atm__WEBPACK_IMPORTED_MODULE_1__["default"](this.checkingAccount);
                        html = this.renderAccounts();
                        this.renderer.render("<h2>Bienvenu UBA Bank!</h2><br />\n       <image src=\"src/images/acmebank.jpg\" height=\"150\">\n      <br/><br />\n      <h5>Votre compte:</h5><br />\n      ".concat(html));
                        return [2 /*return*/];
                }
            });
        });
    };
    Main.prototype.renderAtm = function () {
        var html = "\n            <h3>ATM</h3>\n            <image src=\"src/images/atm.jpg\" height=\"150\">\n            <br /><br />\n            Current Checking Account Balance: ".concat(this.savingAccount.solde, " FCFA\n            <br /><br />\n            $<input type=\"text\" id=\"depositWithdrawalAmount\">&nbsp;&nbsp;\n            <button onclick=\"main.crediterDebiter(true, true)\">Deposit</button>&nbsp;\n            <button onclick=\"main.crediterDebiter(false, true)\">Withdrawal</button>&nbsp;\n        ");
        this.renderer.render(html);
    };
    Main.prototype.changeView = function (view) {
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
    Main.prototype.crediterDebiter = function (deposit, atm) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amountValue = +amountInput.value;
        var error;
        try {
            if (deposit) {
                if (atm) {
                    this.atm.crediter(amountValue);
                }
                else {
                    this.currentAccount.crediter(amountValue);
                }
            }
            else {
                if (atm) {
                    this.atm.debiter(amountValue);
                }
                else {
                    this.currentAccount.debiter(amountValue);
                }
            }
        }
        catch (e) {
            error = e;
        }
        this.renderAccount(this.currentAccount);
        atm ? this.renderAtm() : this.renderAccount(this.currentAccount);
        if (error) {
            console.log(error);
            this.renderer.renderError(error.message);
        }
    };
    return Main;
}());
var renderer = new _scripts_renreder__WEBPACK_IMPORTED_MODULE_3__["default"](document.querySelector('#appTemplate'));
var main = new Main(renderer);
main.loadAccount();
console.log(main);
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUM7QUFDdEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO0FBRW5CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFWixNQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvYWNjb3VudC1saXN0LnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvYXRtLnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvYmFuay1hY2NvdW50LnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL3JlbnJlZGVyLnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvc2F2aW5nLWFjY291bnQudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBCYW5rQWNjb3VudCBmcm9tICcuL2JhbmstYWNjb3VudCc7XG5cbmV4cG9ydCBjbGFzcyBBY2NvdW50TGlzdCB7XG4gIF9hY2NvdW50TGlzdDogQmFua0FjY291bnRbXSA9IFtdO1xuXG4gIGFkZChhY2NvdW50OiBCYW5rQWNjb3VudCkge1xuICAgIHRoaXMuX2FjY291bnRMaXN0LnB1c2goYWNjb3VudCk7XG4gIH1cblxuICBnZXRBY2NvdW50cygpOiBCYW5rQWNjb3VudFtdIHtcbiAgICByZXR1cm4gdGhpcy5fYWNjb3VudExpc3Q7XG4gIH1cbn1cbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBCYW5rQWNjb3VudCBmcm9tICcuL2JhbmstYWNjb3VudCc7XG5pbXBvcnQgeyBDcmVkaXRFdERlYml0LCBBY2NvdW50IH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuY2xhc3MgQVRNIGltcGxlbWVudHMgQ3JlZGl0RXREZWJpdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWNjb3VudDogQmFua0FjY291bnQpIHt9XG5cbiAgY3JlZGl0ZXIoc29tbWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWNjb3VudC5jcmVkaXRlcihzb21tZSk7XG4gIH1cbiAgZGViaXRlcihzb21tZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5hY2NvdW50LmRlYml0ZXIoc29tbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFUTTtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCB7IEFjY291bnQsIEFjY2NvdW50U2V0dGluZ3MsIEFjY291bnRJbmZvIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuYWJzdHJhY3QgY2xhc3MgQmFua0FjY291bnQgaW1wbGVtZW50cyBBY2NvdW50IHtcbiAgcHJpdmF0ZSBfc29sZGUgPSAwO1xuICBpZDogbnVtYmVyO1xuICB0aXRsZTogc3RyaW5nO1xuICBhYnN0cmFjdCBhY2NvdW50VHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGFjY291bnRTZXR0aW5nczogQWNjY291bnRTZXR0aW5ncykge1xuICAgICh0aGlzLmlkID0gYWNjb3VudFNldHRpbmdzLmlkKSxcbiAgICAgICh0aGlzLnRpdGxlID0gYWNjb3VudFNldHRpbmdzLnRpdGxlKSxcbiAgICAgICh0aGlzLl9zb2xkZSA9IGFjY291bnRTZXR0aW5ncy5zb2xkZSk7XG4gIH1cblxuICBjcmVkaXRlcihzb21tZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc29sZGUgKz0gc29tbWU7XG4gIH1cblxuICBkZWJpdGVyKHNvbW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zb2xkZSAtPSBzb21tZTtcbiAgfVxuXG4gIGdldCBzb2xkZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zb2xkZTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldEFjY291bnRJbmZvKCk6IEFjY291bnRJbmZvO1xuXG4gIHNldCBzb2xkZSh2YWw6IG51bWJlcikge1xuICAgIGlmICh2YWwgPj0gMCkge1xuICAgICAgdGhpcy5fc29sZGUgPSB2YWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKCdTb2xkZSBuZSBwZXV0IHBhcyBldHJlIG5lZ2F0aWYnKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQmFua0FjY291bnQ7XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgQmFua0FjY291bnQgZnJvbSAnLi9iYW5rLWFjY291bnQnO1xuaW1wb3J0IHsgQWNjb3VudEluZm8gfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5jbGFzcyBDaGVja2luZ0FjY291bnQgZXh0ZW5kcyBCYW5rQWNjb3VudCB7XG4gIGFjY291bnRUeXBlOiBzdHJpbmcgPSAnQ29tcHRlIENvdXJhbnQnO1xuXG4gIGdldEFjY291bnRJbmZvKCk6IEFjY291bnRJbmZvIHtcbiAgICByZXR1cm4ge1xuICAgICAgcm91dGluZ051bWJlcjogMSxcbiAgICAgIGJhbmtOdW1iZXI6IDIsXG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaGVja2luZ0FjY291bnQ7XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwVGVtcGxhdGU6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy5hcHBUZW1wbGF0ZS5pbm5lckhUTUwgPVxuICAgICAgJzxoMj5CaWVudmVudSBhIFVCQSE8L2gyPjxiciAvPjxoNT5Wb3MgQ29tcHRlczo8L2g1PjxiciAvPic7XG4gIH1cblxuICByZW5kZXIoaHRtbDogc3RyaW5nKSB7XG4gICAgdGhpcy5hcHBUZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICB9XG5cbiAgcmVuZGVyRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5hcHBUZW1wbGF0ZS5pbm5lckhUTUwgKz0gYDxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBCYW5rQWNjb3VudCBmcm9tICcuL2JhbmstYWNjb3VudCc7XG5pbXBvcnQgeyBBY2Njb3VudFNldHRpbmdzLCBBY2NvdW50SW5mbyB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5cbmNsYXNzIFNhdmluZ0FjY291bnQgZXh0ZW5kcyBCYW5rQWNjb3VudCB7XG4gIHByaXZhdGUgaW50ZXJlc3RSYXRlOiBudW1iZXI7XG4gIGFjY291bnRUeXBlOiAnU2F2aW5ncyc7XG5cbiAgY29uc3RydWN0b3IoYWNjb3VudFNldHRpbmdzOiBBY2Njb3VudFNldHRpbmdzKSB7XG4gICAgc3VwZXIoYWNjb3VudFNldHRpbmdzKTtcbiAgICB0aGlzLmludGVyZXN0UmF0ZSA9IGFjY291bnRTZXR0aW5ncy5pbnRlcmVzdFJhdGU7XG4gIH1cblxuICBjcmVkaXRlcihzb21tZTogbnVtYmVyKTogdm9pZCB7XG4gICAgbGV0IG52c29tbWUgPSBzb21tZSArIHNvbW1lICogKHRoaXMuaW50ZXJlc3RSYXRlIC8gMTAwKTtcbiAgICB0aGlzLnNvbGRlICs9IG52c29tbWU7XG4gIH1cblxuICBnZXRBY2NvdW50SW5mbygpOiBBY2NvdW50SW5mbyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHJvdXRpbmdOdW1iZXI6IDEsXG4gICAgICBiYW5rTnVtYmVyOiAyLFxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIGFkZEludGVyZXN0KCkge1xuICAgIHRoaXMuc29sZGUgPSB0aGlzLnNvbGRlICsgdGhpcy5zb2xkZSAqICh0aGlzLmludGVyZXN0UmF0ZSAvIDEwMDApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNhdmluZ0FjY291bnQ7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCB7IEFjY291bnRMaXN0IH0gZnJvbSAnLi9zY3JpcHRzL2FjY291bnQtbGlzdCc7XG5pbXBvcnQgQVRNIGZyb20gJy4vc2NyaXB0cy9hdG0nO1xuLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IEJhbmtBY2NvdW50IGZyb20gJy4vc2NyaXB0cy9iYW5rLWFjY291bnQnO1xuaW1wb3J0IENoZWNraW5nQWNjb3VudCBmcm9tICcuL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudCc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9zY3JpcHRzL3JlbnJlZGVyJztcbmltcG9ydCBTYXZpbmdBY2NvdW50IGZyb20gJy4vc2NyaXB0cy9zYXZpbmctYWNjb3VudCc7XG5cbi8vIE1haW5cbi8vIDEgLSBDcmVlciBkZXMgY29tcHRlXG4vLyAyIC0gQWZmaWNoZXIgZGVzIGNvbXB0ZXNcbi8vIDMgLSBDaGFuZ2VyIGxhIHZ1ZSBkZXMgY29tcHRlc1xuLy8gNCAtIENyZWVyIGV0IGRlYml0ZXIgdW4gY29tcHRlXG5cbmNsYXNzIE1haW4ge1xuICBwdWJsaWMgY2hlY2tpbmdBY2NvdW50OiBDaGVja2luZ0FjY291bnQ7XG4gIHB1YmxpYyBzYXZpbmdBY2NvdW50OiBTYXZpbmdBY2NvdW50O1xuICBwdWJsaWMgY3VycmVudEFjY291bnQ6IEJhbmtBY2NvdW50O1xuICBwdWJsaWMgYXRtOiBBVE07XG5cbiAgLy8gY3JlYXRpb24gZGVzIGNvbXB0ZXNcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHt9XG5cbiAgYXN5bmMgbG9hZEFjY291bnQoKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnLi9kYXRhLmpzb24nKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50ID0gbmV3IENoZWNraW5nQWNjb3VudCh7IC4uLmRhdGEuY2hlY2tpbmdBY2NvdW50IH0pO1xuICAgIHRoaXMuc2F2aW5nQWNjb3VudCA9IG5ldyBTYXZpbmdBY2NvdW50KHsgLi4uZGF0YS5zYXZpbmdzQWNjb3VudCB9KTtcbiAgICB0aGlzLmF0bSA9IG5ldyBBVE0odGhpcy5jaGVja2luZ0FjY291bnQpO1xuXG4gICAgbGV0IGh0bWwgPSB0aGlzLnJlbmRlckFjY291bnRzKCk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihcbiAgICAgIGA8aDI+QmllbnZlbnUgVUJBIEJhbmshPC9oMj48YnIgLz5cbiAgICAgICA8aW1hZ2Ugc3JjPVwic3JjL2ltYWdlcy9hY21lYmFuay5qcGdcIiBoZWlnaHQ9XCIxNTBcIj5cbiAgICAgIDxici8+PGJyIC8+XG4gICAgICA8aDU+Vm90cmUgY29tcHRlOjwvaDU+PGJyIC8+XG4gICAgICAke2h0bWx9YFxuICAgICk7XG4gIH1cblxuICByZW5kZXJBdG0oKSB7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgIDxoMz5BVE08L2gzPlxuICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvYXRtLmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICBDdXJyZW50IENoZWNraW5nIEFjY291bnQgQmFsYW5jZTogJHt0aGlzLnNhdmluZ0FjY291bnQuc29sZGV9IEZDRkFcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgJDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVwb3NpdFdpdGhkcmF3YWxBbW91bnRcIj4mbmJzcDsmbmJzcDtcbiAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJEZWJpdGVyKHRydWUsIHRydWUpXCI+RGVwb3NpdDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckRlYml0ZXIoZmFsc2UsIHRydWUpXCI+V2l0aGRyYXdhbDwvYnV0dG9uPiZuYnNwO1xuICAgICAgICBgO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG5cbiAgY2hhbmdlVmlldyh2aWV3Pzogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh2aWV3KSB7XG4gICAgICBjYXNlICdjaGVja2luZyc6XG4gICAgICAgIHRoaXMuY3VycmVudEFjY291bnQgPSB0aGlzLmNoZWNraW5nQWNjb3VudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdzYXZpbmdzJzpcbiAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudCA9IHRoaXMuc2F2aW5nQWNjb3VudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdG0nOlxuICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50ID0gdGhpcy5zYXZpbmdBY2NvdW50O1xuICAgICAgICB0aGlzLnJlbmRlckF0bSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucmVuZGVyQWNjb3VudCh0aGlzLmN1cnJlbnRBY2NvdW50KTtcbiAgfVxuXG4gIHJlbmRlckFjY291bnRzKCkge1xuICAgIGxldCBhY2N0c0h0bWw6IHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGFjY0xpc3QgPSBuZXcgQWNjb3VudExpc3QoKTtcbiAgICBhY2NMaXN0LmFkZCh0aGlzLmNoZWNraW5nQWNjb3VudCk7XG4gICAgYWNjTGlzdC5hZGQodGhpcy5zYXZpbmdBY2NvdW50KTtcblxuICAgIGFjY0xpc3QuZ2V0QWNjb3VudHMoKS5mb3JFYWNoKChhY2N0LCBpbmRleCkgPT4ge1xuICAgICAgYWNjdHNIdG1sICs9IGFjY3QudGl0bGUgKyAnPGJyIC8+JztcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjdHNIdG1sO1xuICB9XG5cbiAgLy8gYWZmaWNoYWdlcyBkZXMgaW5mb3JtYXRpb25zIGR1IGNvbXB0ZVxuICByZW5kZXJBY2NvdW50KGFjY291bnQ6IEJhbmtBY2NvdW50KSB7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5DbGllbnQ6PC9zcGFuPiAke2FjY291bnQudGl0bGV9XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+U29sZGU6PC9zcGFuPiAke2FjY291bnQuc29sZGUudG9GaXhlZCgyKX0gRkNGQVxuICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXBvc2l0V2l0aGRyYXdhbEFtb3VudFwiIC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJEZWJpdGVyKHRydWUpXCI+Q3JlZGl0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckRlYml0ZXIoZmFsc2UpXCI+RGViaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgYDtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihodG1sKTtcbiAgfVxuXG4gIGNyZWRpdGVyRGViaXRlcihkZXBvc2l0OiBib29sZWFuLCBhdG0/OiBib29sZWFuKSB7XG4gICAgbGV0IGFtb3VudElucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICcjZGVwb3NpdFdpdGhkcmF3YWxBbW91bnQnXG4gICAgKTtcbiAgICBsZXQgYW1vdW50VmFsdWUgPSArYW1vdW50SW5wdXQudmFsdWU7XG4gICAgbGV0IGVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChkZXBvc2l0KSB7XG4gICAgICAgIGlmIChhdG0pIHtcbiAgICAgICAgICB0aGlzLmF0bS5jcmVkaXRlcihhbW91bnRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jdXJyZW50QWNjb3VudC5jcmVkaXRlcihhbW91bnRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhdG0pIHtcbiAgICAgICAgICB0aGlzLmF0bS5kZWJpdGVyKGFtb3VudFZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLmN1cnJlbnRBY2NvdW50LmRlYml0ZXIoYW1vdW50VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyQWNjb3VudCh0aGlzLmN1cnJlbnRBY2NvdW50KTtcblxuICAgIGF0bSA/IHRoaXMucmVuZGVyQXRtKCkgOiB0aGlzLnJlbmRlckFjY291bnQodGhpcy5jdXJyZW50QWNjb3VudCk7XG4gICAgaWYgKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlckVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwVGVtcGxhdGUnKSk7XG5jb25zdCBtYWluID0gbmV3IE1haW4ocmVuZGVyZXIpO1xubWFpbi5sb2FkQWNjb3VudCgpO1xuXG5jb25zb2xlLmxvZyhtYWluKTtcblxuKDxhbnk+d2luZG93KS5tYWluID0gbWFpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==