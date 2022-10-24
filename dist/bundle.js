/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/AccountLists.ts":
/*!*************************************!*\
  !*** ./src/scripts/AccountLists.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComptes": () => (/* binding */ ListComptes)
/* harmony export */ });
/** @format */
var ListComptes = /** @class */ (function () {
    function ListComptes() {
        this._listComptes = [];
    }
    ListComptes.prototype.ajouter = function (compte) {
        this._listComptes.push(compte);
    };
    ListComptes.prototype.getComptes = function () {
        return this._listComptes;
    };
    return ListComptes;
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

/***/ "./src/scripts/compte-bancaire.ts":
/*!****************************************!*\
  !*** ./src/scripts/compte-bancaire.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @format */
var CompteBancaire = /** @class */ (function () {
    function CompteBancaire(parametresCompte) {
        this.id = parametresCompte.id;
        this.client = parametresCompte.client;
        this._solde = parametresCompte.solde;
    }
    Object.defineProperty(CompteBancaire.prototype, "solde", {
        get: function () {
            return this._solde;
        },
        set: function (valeur) {
            if (valeur >= 0) {
                this._solde = valeur;
            }
            else {
                throw Error('Solde ne pas etre negatif');
            }
        },
        enumerable: false,
        configurable: true
    });
    CompteBancaire.prototype.crediter = function (somme) {
        this.solde += somme;
    };
    CompteBancaire.prototype.debiter = function (somme) {
        this.solde -= somme;
    };
    CompteBancaire.prototype.infoCompte = function () {
        return {};
    };
    return CompteBancaire;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompteBancaire);


/***/ }),

/***/ "./src/scripts/compte-courant.ts":
/*!***************************************!*\
  !*** ./src/scripts/compte-courant.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _compte_bancaire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compte-bancaire */ "./src/scripts/compte-bancaire.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
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
/** @format */


var CompteCourant = /** @class */ (function (_super) {
    __extends(CompteCourant, _super);
    function CompteCourant(parametresCompte) {
        var _this = _super.call(this, parametresCompte) || this;
        _this.typeCompte = _enums__WEBPACK_IMPORTED_MODULE_1__.TypeCompte.Courant;
        return _this;
    }
    return CompteCourant;
}(_compte_bancaire__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompteCourant);


/***/ }),

/***/ "./src/scripts/compte-epargne.ts":
/*!***************************************!*\
  !*** ./src/scripts/compte-epargne.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _compte_bancaire__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compte-bancaire */ "./src/scripts/compte-bancaire.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enums */ "./src/scripts/enums.ts");
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


var CompteEpargne = /** @class */ (function (_super) {
    __extends(CompteEpargne, _super);
    function CompteEpargne(parametresCompte) {
        var _this = _super.call(this, parametresCompte) || this;
        _this.typeCompte = _enums__WEBPACK_IMPORTED_MODULE_1__.TypeCompte.Epargne;
        _this.tauxInterest = parametresCompte.tauxInteret;
        return _this;
    }
    CompteEpargne.prototype.crediter = function (somme) {
        var nvMontant = somme + somme * (this.tauxInterest / 100);
        this.solde += nvMontant;
    };
    return CompteEpargne;
}(_compte_bancaire__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompteEpargne);


/***/ }),

/***/ "./src/scripts/enums.ts":
/*!******************************!*\
  !*** ./src/scripts/enums.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TypeCompte": () => (/* binding */ TypeCompte)
/* harmony export */ });
/** @format */
var TypeCompte;
(function (TypeCompte) {
    TypeCompte[TypeCompte["Courant"] = 0] = "Courant";
    TypeCompte[TypeCompte["Epargne"] = 1] = "Epargne";
    TypeCompte[TypeCompte["Assurances"] = 2] = "Assurances";
})(TypeCompte || (TypeCompte = {}));


/***/ }),

/***/ "./src/scripts/renderer.ts":
/*!*********************************!*\
  !*** ./src/scripts/renderer.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Renderer": () => (/* binding */ Renderer)
/* harmony export */ });
/** @format */
var Renderer = /** @class */ (function () {
    function Renderer(appTemplate) {
        this.appTemplate = appTemplate;
        this.appTemplate.innerHTML =
            '<h2>Bienvenu a UBA BANK!</h2><br /><h5>Votre Compte:</h5><br />';
    }
    Renderer.prototype.render = function (html) {
        this.appTemplate.innerHTML = html;
    };
    Renderer.prototype.renderError = function (message) {
        this.appTemplate.innerHTML += "<br /><br /><div class=\"alert alert-danger\">".concat(message, "</div>");
    };
    return Renderer;
}());



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
/* harmony import */ var _scripts_AccountLists__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/AccountLists */ "./src/scripts/AccountLists.ts");
/* harmony import */ var _scripts_compte_courant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/compte-courant */ "./src/scripts/compte-courant.ts");
/* harmony import */ var _scripts_compte_epargne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/compte-epargne */ "./src/scripts/compte-epargne.ts");
/* harmony import */ var _scripts_enums__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/enums */ "./src/scripts/enums.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/* harmony import */ var _scripts_atm__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/atm */ "./src/scripts/atm.ts");
/** @format */






var Main = /** @class */ (function () {
    // 1 - creation des comptes bancaires
    function Main(renderer) {
        this.renderer = renderer;
        this.compteCourant = new _scripts_compte_courant__WEBPACK_IMPORTED_MODULE_1__["default"]({
            id: 1,
            client: 'Jose Balla',
            solde: 10000,
        });
        this.compteEpargne = new _scripts_compte_epargne__WEBPACK_IMPORTED_MODULE_2__["default"]({
            id: 100,
            client: 'Jose Balla',
            solde: 15000,
            tauxInteret: 2.5,
        });
        this.atm = new _scripts_atm__WEBPACK_IMPORTED_MODULE_5__["default"](this.compteCourant);
        var html = this.afficheComptes();
        this.renderer.render('<h2>Bienvenu a UBA BANK!</h2><br /><h5>Vos Comptes:</h5><br />' + html);
    }
    Main.prototype.afficheComptes = function () {
        var acctsHtml = '';
        var accList = new _scripts_AccountLists__WEBPACK_IMPORTED_MODULE_0__.ListComptes();
        accList.ajouter(this.compteCourant);
        accList.ajouter(this.compteEpargne);
        accList.getComptes().forEach(function (acct, index) {
            acctsHtml += acct.client + '<br />';
        });
        return acctsHtml;
    };
    Main.prototype.afficheCompte = function (compte) {
        var typeCompte = _scripts_enums__WEBPACK_IMPORTED_MODULE_3__.TypeCompte[compte.typeCompte];
        var html = "\n      <h2></h2>\n      <h3>Compte ".concat(typeCompte, "</h3>\n      <br />\n      <image src=\"src/images/").concat(typeCompte, ".jpg\" heigt=\"150\">\n      <div>\n      <span class=\"label\">Client:</span> ").concat(compte.client, "\n      <br />\n      <span class=\"label\">Solde:</span> ").concat(compte.solde.toFixed(2), "\n      FCFA \n      </div>\n      <br /><br />\n      <input type=\"text\" id=\"sommeDepotRetrait\" />&nbsp;&nbsp;\n      <button onclick=\"main.crediterEtDebiter(true)\">Crediter</button>&nbsp;\n      <button onclick=\"main.crediterEtDebiter(false)\">Debiter</button>&nbsp;\n      ");
        this.renderer.render(html);
    };
    // 3 - Crediter et Debiter les comptes bancaires
    Main.prototype.crediterEtDebiter = function (depot, atm) {
        var input = document.querySelector('#sommeDepotRetrait');
        var inputValue = parseInt(input.value);
        var error;
        try {
            if (depot) {
                if (atm) {
                    this.atm.crediter(inputValue);
                }
                else {
                    this.compteActuel.crediter(inputValue);
                }
            }
            else {
                if (atm) {
                    this.atm.debiter(inputValue);
                }
                else {
                    this.compteActuel.debiter(inputValue);
                }
            }
        }
        catch (e) {
            error = e;
        }
        atm ? this.afficheATM() : this.afficheCompte(this.compteActuel);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    Main.prototype.afficheATM = function () {
        var html = "\n            <h3>ATM</h3>\n            <image src=\"src/images/atm.jpg\" height=\"150\">\n            <br /><br />\n            Votre compte Courant: ".concat(this.compteCourant.solde, " FCFA\n            <br /><br />\n            <input type=\"text\" id=\"sommeDepotRetrait\" /> FCFA &nbsp;&nbsp;\n            <button onclick=\"main.crediterEtDebiter(true, true)\">Crediter</button>&nbsp;\n            <button onclick=\"main.crediterEtDebiter(false, true)\">Debiter</button>&nbsp;\n        ");
        this.renderer.render(html);
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'courant':
                this.compteActuel = this.compteCourant;
                break;
            case 'epargne':
                this.compteActuel = this.compteEpargne;
                break;
            case 'atm':
                this.compteActuel = this.compteCourant;
                this.afficheATM();
                return;
        }
        this.afficheCompte(this.compteActuel);
    };
    return Main;
}());
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_4__.Renderer(document.querySelector('#appTemplate'));
var main = new Main(renderer);
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELHlCQUFVLEdBQVY7UUFDRSxJQUFNLElBQUksR0FBRyxpS0FJbUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLHNUQUtuRCxDQUFDO1FBQ04sSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDN0IsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxJQUFhO1FBQ3RCLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDdkMsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3ZDLE1BQU07WUFDUixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUN2QyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQ2xCLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sUUFBUSxHQUFHLElBQUksdURBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFMUIsTUFBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL0FjY291bnRMaXN0cy50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2F0bS50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2NvbXB0ZS1iYW5jYWlyZS50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2NvbXB0ZS1jb3VyYW50LnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvY29tcHRlLWVwYXJnbmUudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9lbnVtcy50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL3JlbmRlcmVyLnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgQ29tcHRlQmFuY2FpcmUgZnJvbSAnLi9jb21wdGUtYmFuY2FpcmUnO1xuXG5leHBvcnQgY2xhc3MgTGlzdENvbXB0ZXMge1xuICBfbGlzdENvbXB0ZXM6IENvbXB0ZUJhbmNhaXJlW10gPSBbXTtcblxuICBham91dGVyKGNvbXB0ZTogQ29tcHRlQmFuY2FpcmUpIHtcbiAgICB0aGlzLl9saXN0Q29tcHRlcy5wdXNoKGNvbXB0ZSk7XG4gIH1cblxuICBnZXRDb21wdGVzKCk6IENvbXB0ZUJhbmNhaXJlW10ge1xuICAgIHJldHVybiB0aGlzLl9saXN0Q29tcHRlcztcbiAgfVxufVxuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgSUNyZWRpdERlYml0LCBJQ29tcHRlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuXG5jbGFzcyBBVE0gaW1wbGVtZW50cyBJQ3JlZGl0RGViaXQge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGFjY291bnQ6IElDb21wdGUpIHt9XG5cbiAgY3JlZGl0ZXIoc29tbWU6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMuYWNjb3VudC5jcmVkaXRlcihzb21tZSk7XG4gIH1cblxuICBkZWJpdGVyKHNvbW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmFjY291bnQuZGViaXRlcihzb21tZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQVRNO1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgSVBhcmFtZXRyZXNDb21wdGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5pbXBvcnQgeyBJQ29tcHRlIH0gZnJvbSAnLi9pbnRlcmZhY2UnO1xuaW1wb3J0IHsgVHlwZUNvbXB0ZSB9IGZyb20gJy4vZW51bXMnO1xuXG5hYnN0cmFjdCBjbGFzcyBDb21wdGVCYW5jYWlyZSBpbXBsZW1lbnRzIElDb21wdGUge1xuICBwcml2YXRlIF9zb2xkZTogbnVtYmVyO1xuICBpZDogbnVtYmVyO1xuICBwdWJsaWMgY2xpZW50OiBzdHJpbmc7XG5cbiAgYWJzdHJhY3QgdHlwZUNvbXB0ZTogVHlwZUNvbXB0ZTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbWV0cmVzQ29tcHRlOiBJUGFyYW1ldHJlc0NvbXB0ZSkge1xuICAgIHRoaXMuaWQgPSBwYXJhbWV0cmVzQ29tcHRlLmlkO1xuICAgIHRoaXMuY2xpZW50ID0gcGFyYW1ldHJlc0NvbXB0ZS5jbGllbnQ7XG4gICAgdGhpcy5fc29sZGUgPSBwYXJhbWV0cmVzQ29tcHRlLnNvbGRlO1xuICB9XG5cbiAgZ2V0IHNvbGRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvbGRlO1xuICB9XG5cbiAgc2V0IHNvbGRlKHZhbGV1cikge1xuICAgIGlmICh2YWxldXIgPj0gMCkge1xuICAgICAgdGhpcy5fc29sZGUgPSB2YWxldXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKCdTb2xkZSBuZSBwYXMgZXRyZSBuZWdhdGlmJyk7XG4gICAgfVxuICB9XG5cbiAgY3JlZGl0ZXIoc29tbWU6IG51bWJlcikge1xuICAgIHRoaXMuc29sZGUgKz0gc29tbWU7XG4gIH1cblxuICBkZWJpdGVyKHNvbW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLnNvbGRlIC09IHNvbW1lO1xuICB9XG5cbiAgaW5mb0NvbXB0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHRlQmFuY2FpcmU7XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgeyBJUGFyYW1ldHJlc0NvbXB0ZSB9IGZyb20gJy4vaW50ZXJmYWNlJztcbi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBDb21wdGVCYW5jYWlyZSBmcm9tICcuL2NvbXB0ZS1iYW5jYWlyZSc7XG5pbXBvcnQgeyBUeXBlQ29tcHRlIH0gZnJvbSAnLi9lbnVtcyc7XG5cbmNsYXNzIENvbXB0ZUNvdXJhbnQgZXh0ZW5kcyBDb21wdGVCYW5jYWlyZSB7XG4gIHR5cGVDb21wdGUgPSBUeXBlQ29tcHRlLkNvdXJhbnQ7XG5cbiAgY29uc3RydWN0b3IocGFyYW1ldHJlc0NvbXB0ZTogSVBhcmFtZXRyZXNDb21wdGUpIHtcbiAgICBzdXBlcihwYXJhbWV0cmVzQ29tcHRlKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wdGVDb3VyYW50O1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgSVBhcmFtZXRyZXNDb21wdGUgfSBmcm9tICcuL2ludGVyZmFjZSc7XG5cbmltcG9ydCBDb21wdGVCYW5jYWlyZSBmcm9tICcuL2NvbXB0ZS1iYW5jYWlyZSc7XG5pbXBvcnQgeyBUeXBlQ29tcHRlIH0gZnJvbSAnLi9lbnVtcyc7XG5cbmNsYXNzIENvbXB0ZUVwYXJnbmUgZXh0ZW5kcyBDb21wdGVCYW5jYWlyZSB7XG4gIHB1YmxpYyB0YXV4SW50ZXJlc3Q6IG51bWJlcjtcbiAgdHlwZUNvbXB0ZSA9IFR5cGVDb21wdGUuRXBhcmduZTtcblxuICBjb25zdHJ1Y3RvcihwYXJhbWV0cmVzQ29tcHRlOiBJUGFyYW1ldHJlc0NvbXB0ZSkge1xuICAgIHN1cGVyKHBhcmFtZXRyZXNDb21wdGUpO1xuICAgIHRoaXMudGF1eEludGVyZXN0ID0gcGFyYW1ldHJlc0NvbXB0ZS50YXV4SW50ZXJldDtcbiAgfVxuXG4gIGNyZWRpdGVyKHNvbW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgbnZNb250YW50ID0gc29tbWUgKyBzb21tZSAqICh0aGlzLnRhdXhJbnRlcmVzdCAvIDEwMCk7XG4gICAgdGhpcy5zb2xkZSArPSBudk1vbnRhbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHRlRXBhcmduZTtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmV4cG9ydCBlbnVtIFR5cGVDb21wdGUge1xuICBDb3VyYW50LFxuICBFcGFyZ25lLFxuICBBc3N1cmFuY2VzLFxufVxuIiwiLyoqIEBmb3JtYXQgKi9cblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9XG4gICAgICAnPGgyPkJpZW52ZW51IGEgVUJBIEJBTkshPC9oMj48YnIgLz48aDU+Vm90cmUgQ29tcHRlOjwvaDU+PGJyIC8+JztcbiAgfVxuXG4gIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cblxuICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCB7IExpc3RDb21wdGVzIH0gZnJvbSAnLi9zY3JpcHRzL0FjY291bnRMaXN0cyc7XG5pbXBvcnQgQ29tcHRlQ291cmFudCBmcm9tICcuL3NjcmlwdHMvY29tcHRlLWNvdXJhbnQnO1xuaW1wb3J0IENvbXB0ZUVwYXJnbmUgZnJvbSAnLi9zY3JpcHRzL2NvbXB0ZS1lcGFyZ25lJztcbmltcG9ydCBDb21wdGVCYW5jYWlyZSBmcm9tICcuL3NjcmlwdHMvY29tcHRlLWJhbmNhaXJlJztcbmltcG9ydCB7IFR5cGVDb21wdGUgfSBmcm9tICcuL3NjcmlwdHMvZW51bXMnO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3NjcmlwdHMvcmVuZGVyZXInO1xuaW1wb3J0IEFUTSBmcm9tICcuL3NjcmlwdHMvYXRtJztcbmNsYXNzIE1haW4ge1xuICBwdWJsaWMgY29tcHRlQ291cmFudDogQ29tcHRlQ291cmFudDtcbiAgcHVibGljIGNvbXB0ZUVwYXJnbmU6IENvbXB0ZUVwYXJnbmU7XG4gIHB1YmxpYyBjb21wdGVBY3R1ZWw6IENvbXB0ZUJhbmNhaXJlO1xuICBwdWJsaWMgYXRtOiBBVE07XG5cbiAgLy8gMSAtIGNyZWF0aW9uIGRlcyBjb21wdGVzIGJhbmNhaXJlc1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgIHRoaXMuY29tcHRlQ291cmFudCA9IG5ldyBDb21wdGVDb3VyYW50KHtcbiAgICAgIGlkOiAxLFxuICAgICAgY2xpZW50OiAnSm9zZSBCYWxsYScsXG4gICAgICBzb2xkZTogMTAwMDAsXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXB0ZUVwYXJnbmUgPSBuZXcgQ29tcHRlRXBhcmduZSh7XG4gICAgICBpZDogMTAwLFxuICAgICAgY2xpZW50OiAnSm9zZSBCYWxsYScsXG4gICAgICBzb2xkZTogMTUwMDAsXG4gICAgICB0YXV4SW50ZXJldDogMi41LFxuICAgIH0pO1xuXG4gICAgdGhpcy5hdG0gPSBuZXcgQVRNKHRoaXMuY29tcHRlQ291cmFudCk7XG5cbiAgICBsZXQgaHRtbCA9IHRoaXMuYWZmaWNoZUNvbXB0ZXMoKTtcblxuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKFxuICAgICAgJzxoMj5CaWVudmVudSBhIFVCQSBCQU5LITwvaDI+PGJyIC8+PGg1PlZvcyBDb21wdGVzOjwvaDU+PGJyIC8+JyArIGh0bWxcbiAgICApO1xuICB9XG5cbiAgYWZmaWNoZUNvbXB0ZXMoKSB7XG4gICAgbGV0IGFjY3RzSHRtbDogc3RyaW5nID0gJyc7XG4gICAgY29uc3QgYWNjTGlzdCA9IG5ldyBMaXN0Q29tcHRlcygpO1xuICAgIGFjY0xpc3QuYWpvdXRlcih0aGlzLmNvbXB0ZUNvdXJhbnQpO1xuICAgIGFjY0xpc3QuYWpvdXRlcih0aGlzLmNvbXB0ZUVwYXJnbmUpO1xuXG4gICAgYWNjTGlzdC5nZXRDb21wdGVzKCkuZm9yRWFjaCgoYWNjdCwgaW5kZXgpID0+IHtcbiAgICAgIGFjY3RzSHRtbCArPSBhY2N0LmNsaWVudCArICc8YnIgLz4nO1xuICAgIH0pO1xuICAgIHJldHVybiBhY2N0c0h0bWw7XG4gIH1cblxuICBhZmZpY2hlQ29tcHRlKGNvbXB0ZTogQ29tcHRlQmFuY2FpcmUpIHtcbiAgICBjb25zdCB0eXBlQ29tcHRlID0gVHlwZUNvbXB0ZVtjb21wdGUudHlwZUNvbXB0ZV07XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgIDxoMj48L2gyPlxuICAgICAgPGgzPkNvbXB0ZSAke3R5cGVDb21wdGV9PC9oMz5cbiAgICAgIDxiciAvPlxuICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvJHt0eXBlQ29tcHRlfS5qcGdcIiBoZWlndD1cIjE1MFwiPlxuICAgICAgPGRpdj5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5DbGllbnQ6PC9zcGFuPiAke2NvbXB0ZS5jbGllbnR9XG4gICAgICA8YnIgLz5cbiAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Tb2xkZTo8L3NwYW4+ICR7Y29tcHRlLnNvbGRlLnRvRml4ZWQoMil9XG4gICAgICBGQ0ZBIFxuICAgICAgPC9kaXY+XG4gICAgICA8YnIgLz48YnIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic29tbWVEZXBvdFJldHJhaXRcIiAvPiZuYnNwOyZuYnNwO1xuICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckV0RGViaXRlcih0cnVlKVwiPkNyZWRpdGVyPC9idXR0b24+Jm5ic3A7XG4gICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmNyZWRpdGVyRXREZWJpdGVyKGZhbHNlKVwiPkRlYml0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgIGA7XG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoaHRtbCk7XG4gIH1cbiAgLy8gMyAtIENyZWRpdGVyIGV0IERlYml0ZXIgbGVzIGNvbXB0ZXMgYmFuY2FpcmVzXG4gIGNyZWRpdGVyRXREZWJpdGVyKGRlcG90OiBib29sZWFuLCBhdG0/OiBib29sZWFuKSB7XG4gICAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvbW1lRGVwb3RSZXRyYWl0Jyk7XG4gICAgbGV0IGlucHV0VmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSk7XG4gICAgbGV0IGVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChkZXBvdCkge1xuICAgICAgICBpZiAoYXRtKSB7XG4gICAgICAgICAgdGhpcy5hdG0uY3JlZGl0ZXIoaW5wdXRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb21wdGVBY3R1ZWwuY3JlZGl0ZXIoaW5wdXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChhdG0pIHtcbiAgICAgICAgICB0aGlzLmF0bS5kZWJpdGVyKGlucHV0VmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcHRlQWN0dWVsLmRlYml0ZXIoaW5wdXRWYWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBlcnJvciA9IGU7XG4gICAgfVxuXG4gICAgYXRtID8gdGhpcy5hZmZpY2hlQVRNKCkgOiB0aGlzLmFmZmljaGVDb21wdGUodGhpcy5jb21wdGVBY3R1ZWwpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlckVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFmZmljaGVBVE0oKSB7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgIDxoMz5BVE08L2gzPlxuICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvYXRtLmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICBWb3RyZSBjb21wdGUgQ291cmFudDogJHt0aGlzLmNvbXB0ZUNvdXJhbnQuc29sZGV9IEZDRkFcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzb21tZURlcG90UmV0cmFpdFwiIC8+IEZDRkEgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmNyZWRpdGVyRXREZWJpdGVyKHRydWUsIHRydWUpXCI+Q3JlZGl0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJFdERlYml0ZXIoZmFsc2UsIHRydWUpXCI+RGViaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgICBgO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG5cbiAgY2hhbmdlVmlldyh2aWV3Pzogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh2aWV3KSB7XG4gICAgICBjYXNlICdjb3VyYW50JzpcbiAgICAgICAgdGhpcy5jb21wdGVBY3R1ZWwgPSB0aGlzLmNvbXB0ZUNvdXJhbnQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZXBhcmduZSc6XG4gICAgICAgIHRoaXMuY29tcHRlQWN0dWVsID0gdGhpcy5jb21wdGVFcGFyZ25lO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2F0bSc6XG4gICAgICAgIHRoaXMuY29tcHRlQWN0dWVsID0gdGhpcy5jb21wdGVDb3VyYW50O1xuICAgICAgICB0aGlzLmFmZmljaGVBVE0oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFmZmljaGVDb21wdGUodGhpcy5jb21wdGVBY3R1ZWwpO1xuICB9XG59XG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBUZW1wbGF0ZScpKTtcbmNvbnN0IG1haW4gPSBuZXcgTWFpbihyZW5kZXJlcik7XG5cbig8YW55PndpbmRvdykubWFpbiA9IG1haW47XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=