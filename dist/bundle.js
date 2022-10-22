/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
    function Renderer() {
    }
    Renderer.render = function (html) {
        Renderer.appTemplate.innerHTML = html;
    };
    return Renderer;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Renderer);


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
/* harmony import */ var _styles_scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/scripts/checking-account */ "./src/styles/scripts/checking-account.ts");
/* harmony import */ var _styles_scripts_renreder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/scripts/renreder */ "./src/styles/scripts/renreder.ts");
/** @format */


// Main
// 1 - Creation des compte
// 2 - Affichages des comptes
var Main = /** @class */ (function () {
    // creation des comptes
    function Main() {
        this.checkingAccount = new _styles_scripts_checking_account__WEBPACK_IMPORTED_MODULE_0__["default"]('Hermine Claudia');
        this.renderAccount();
    }
    // affichages des informations du compte
    Main.prototype.renderAccount = function () {
        var html = "\n        <h2>Bienvenu UBA Bank!</h2>\n        <h3>Compte Courant</h3>\n        <br />\n        <span class=\"label\">Client:</span> ".concat(this.checkingAccount.title, "\n        <br />\n        <span class=\"label\">Solde:</span> ").concat(this.checkingAccount.solde.toFixed(2), " FCFA\n        <br /><br />\n        <input type=\"text\" id=\"depositWithdrawalAmount\" />&nbsp;&nbsp;\n        <button onclick=\"main.crediterDebiter(true)\">Crediter</button>&nbsp;\n        <button onclick=\"main.crediterDebiter(false)\">Debiter</button>&nbsp;\n      ");
        _styles_scripts_renreder__WEBPACK_IMPORTED_MODULE_1__["default"].render(html);
    };
    Main.prototype.crediterDebiter = function (deposit) {
        var amountInput = document.querySelector('#depositWithdrawalAmount');
        var amountValue = +amountInput.value;
        if (deposit) {
            this.checkingAccount.crediter(amountValue);
        }
        else {
            this.checkingAccount.debiter(amountValue);
        }
        this.renderAccount();
    };
    return Main;
}());
_styles_scripts_renreder__WEBPACK_IMPORTED_MODULE_1__["default"].appTemplate = document.querySelector('#appTemplate');
var main = new Main();
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUMzQixDQUFDO1FBQ0YsSUFBSSxXQUFXLEdBQUcsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDO1FBRXJDLElBQUksT0FBTyxFQUFFO1lBQ1gsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDNUM7YUFBTTtZQUNMLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzNDO1FBQ0QsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQztBQUVELDRFQUFvQixHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7QUFDOUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQztBQUVsQixNQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3N0eWxlcy9zY3JpcHRzL2JhbmstYWNjb3VudC50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zdHlsZXMvc2NyaXB0cy9jaGVja2luZy1hY2NvdW50LnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3N0eWxlcy9zY3JpcHRzL3JlbnJlZGVyLnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuXG5hYnN0cmFjdCBjbGFzcyBCYW5rQWNjb3VudCB7XG4gIHByaXZhdGUgX3NvbGRlID0gMDtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU6IHN0cmluZztcbiAgYWJzdHJhY3QgYWNjb3VudFR5cGU6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihhY2NvdW50U2V0dGluZ3M6IGFueSkge1xuICAgICh0aGlzLmlkID0gYWNjb3VudFNldHRpbmdzLmlkKSxcbiAgICAgICh0aGlzLnRpdGxlID0gYWNjb3VudFNldHRpbmdzLnRpdGxlKSxcbiAgICAgICh0aGlzLl9zb2xkZSA9IGFjY291bnRTZXR0aW5ncy5zb2xkZSk7XG4gIH1cblxuICBjcmVkaXRlcihzb21tZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc29sZGUgKz0gc29tbWU7XG4gIH1cblxuICBkZWJpdGVyKHNvbW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zb2xkZSAtPSBzb21tZTtcbiAgfVxuXG4gIGdldCBzb2xkZSgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9zb2xkZTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldEFjY291bnRJbmZvKCk6IGFueTtcblxuICBzZXQgc29sZGUodmFsOiBudW1iZXIpIHtcbiAgICBpZiAodmFsID49IDApIHtcbiAgICAgIHRoaXMuX3NvbGRlID0gdmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcignU29sZGUgbmUgcGV1dCBwYXMgZXRyZSBuZWdhdGlmJyk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJhbmtBY2NvdW50O1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IEJhbmtBY2NvdW50IGZyb20gJy4vYmFuay1hY2NvdW50JztcblxuY2xhc3MgQ2hlY2tpbmdBY2NvdW50IGV4dGVuZHMgQmFua0FjY291bnQge1xuICBhY2NvdW50VHlwZTogc3RyaW5nID0gJ0NvbXB0ZSBDb3VyYW50JztcblxuICBnZXRBY2NvdW50SW5mbygpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tpbmdBY2NvdW50O1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuY2xhc3MgUmVuZGVyZXIge1xuICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cblxuICBzdGF0aWMgYXBwVGVtcGxhdGU6IEhUTUxEaXZFbGVtZW50O1xuXG4gIHN0YXRpYyByZW5kZXIoaHRtbDogc3RyaW5nKSB7XG4gICAgUmVuZGVyZXIuYXBwVGVtcGxhdGUuaW5uZXJIVE1MID0gaHRtbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IENoZWNraW5nQWNjb3VudCBmcm9tICcuL3N0eWxlcy9zY3JpcHRzL2NoZWNraW5nLWFjY291bnQnO1xuaW1wb3J0IFJlbmRlcmVyIGZyb20gJy4vc3R5bGVzL3NjcmlwdHMvcmVucmVkZXInO1xuXG4vLyBNYWluXG4vLyAxIC0gQ3JlYXRpb24gZGVzIGNvbXB0ZVxuLy8gMiAtIEFmZmljaGFnZXMgZGVzIGNvbXB0ZXNcblxuY2xhc3MgTWFpbiB7XG4gIHB1YmxpYyBjaGVja2luZ0FjY291bnQ6IENoZWNraW5nQWNjb3VudDtcbiAgLy8gY3JlYXRpb24gZGVzIGNvbXB0ZXNcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jaGVja2luZ0FjY291bnQgPSBuZXcgQ2hlY2tpbmdBY2NvdW50KCdIZXJtaW5lIENsYXVkaWEnKTtcbiAgICB0aGlzLnJlbmRlckFjY291bnQoKTtcbiAgfVxuXG4gIC8vIGFmZmljaGFnZXMgZGVzIGluZm9ybWF0aW9ucyBkdSBjb21wdGVcbiAgcmVuZGVyQWNjb3VudCgpIHtcbiAgICBjb25zdCBodG1sID0gYFxuICAgICAgICA8aDI+QmllbnZlbnUgVUJBIEJhbmshPC9oMj5cbiAgICAgICAgPGgzPkNvbXB0ZSBDb3VyYW50PC9oMz5cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5DbGllbnQ6PC9zcGFuPiAke3RoaXMuY2hlY2tpbmdBY2NvdW50LnRpdGxlfVxuICAgICAgICA8YnIgLz5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlNvbGRlOjwvc3Bhbj4gJHt0aGlzLmNoZWNraW5nQWNjb3VudC5zb2xkZS50b0ZpeGVkKFxuICAgICAgICAgIDJcbiAgICAgICAgKX0gRkNGQVxuICAgICAgICA8YnIgLz48YnIgLz5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJkZXBvc2l0V2l0aGRyYXdhbEFtb3VudFwiIC8+Jm5ic3A7Jm5ic3A7XG4gICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJEZWJpdGVyKHRydWUpXCI+Q3JlZGl0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckRlYml0ZXIoZmFsc2UpXCI+RGViaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgYDtcbiAgICBSZW5kZXJlci5yZW5kZXIoaHRtbCk7XG4gIH1cblxuICBjcmVkaXRlckRlYml0ZXIoZGVwb3NpdDogYm9vbGVhbikge1xuICAgIGxldCBhbW91bnRJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICAnI2RlcG9zaXRXaXRoZHJhd2FsQW1vdW50J1xuICAgICk7XG4gICAgbGV0IGFtb3VudFZhbHVlID0gK2Ftb3VudElucHV0LnZhbHVlO1xuXG4gICAgaWYgKGRlcG9zaXQpIHtcbiAgICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50LmNyZWRpdGVyKGFtb3VudFZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5jaGVja2luZ0FjY291bnQuZGViaXRlcihhbW91bnRWYWx1ZSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyQWNjb3VudCgpO1xuICB9XG59XG5cblJlbmRlcmVyLmFwcFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcFRlbXBsYXRlJyk7XG5jb25zdCBtYWluID0gbmV3IE1haW4oKTtcblxuKDxhbnk+d2luZG93KS5tYWluID0gbWFpbjtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==