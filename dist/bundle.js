/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/ListComptes.ts":
/*!************************************!*\
  !*** ./src/scripts/ListComptes.ts ***!
  \************************************/
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
    function ATM(compte) {
        this.compte = compte;
    }
    ATM.prototype.crediter = function (somme) {
        this.compte.crediter(somme);
    };
    ATM.prototype.debiter = function (somme) {
        this.compte.debiter(somme);
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
    // constructeur avec des propriets
    function CompteBancaire(parametresComptes) {
        // proprietes
        this._solde = 0;
        this.id = parametresComptes.id;
        this._solde = parametresComptes.solde;
        this.nomClient = parametresComptes.nomClient;
        this.tauxInteret = parametresComptes.tauxInteret;
    }
    Object.defineProperty(CompteBancaire.prototype, "solde", {
        // getters et setters
        get: function () {
            return this._solde;
        },
        set: function (valeur) {
            this._solde = valeur;
        },
        enumerable: false,
        configurable: true
    });
    CompteBancaire.prototype.debiter = function (somme) {
        if (somme < this._solde) {
            this._solde -= somme;
        }
        else {
            throw Error('la solde debiteur est inferieur');
        }
    };
    CompteBancaire.prototype.crediter = function (somme) {
        this._solde += somme;
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

var CompteCourant = /** @class */ (function (_super) {
    __extends(CompteCourant, _super);
    function CompteCourant() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.typeCompte = 'courant';
        return _this;
    }
    CompteCourant.prototype.infoCompte = function () {
        return {};
    };
    CompteCourant.prototype.transfertArgent = function (somme, compte) {
        this.debiter(somme);
        compte.crediter(somme);
    };
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

var CompteEpargne = /** @class */ (function (_super) {
    __extends(CompteEpargne, _super);
    function CompteEpargne(parametresComptes) {
        var _this = _super.call(this, parametresComptes) || this;
        _this.typeCompte = 'epargne';
        _this.tauxInteret = parametresComptes.tauxInteret;
        return _this;
    }
    CompteEpargne.prototype.infoCompte = function () { };
    CompteEpargne.prototype.crediter = function (somme) {
        var montant = somme + (somme * this.tauxInteret) / 100;
        this.solde += montant;
    };
    return CompteEpargne;
}(_compte_bancaire__WEBPACK_IMPORTED_MODULE_0__["default"]));
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompteEpargne);


/***/ }),

/***/ "./src/scripts/renderer.ts":
/*!*********************************!*\
  !*** ./src/scripts/renderer.ts ***!
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
/* harmony import */ var _scripts_ListComptes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/ListComptes */ "./src/scripts/ListComptes.ts");
/* harmony import */ var _scripts_compte_courant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/compte-courant */ "./src/scripts/compte-courant.ts");
/* harmony import */ var _scripts_compte_epargne__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/compte-epargne */ "./src/scripts/compte-epargne.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/* harmony import */ var _scripts_atm__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/atm */ "./src/scripts/atm.ts");
/** @format */





var Main = /** @class */ (function () {
    // creation compte actuel/ en cours de traitement;
    // 1 - creation des comptes bancaires
    function Main(renderer) {
        this.renderer = renderer;
        this.compteCourant = new _scripts_compte_courant__WEBPACK_IMPORTED_MODULE_1__["default"]({
            id: 1,
            nomClient: 'Jose Balla',
            solde: 10000,
        });
        this.compteEpargne = new _scripts_compte_epargne__WEBPACK_IMPORTED_MODULE_2__["default"]({
            id: 100,
            nomClient: 'Jose Balla',
            solde: 15000,
            tauxInteret: 2.5,
        });
        // ATM instanciaction de L'ATM
        this.atm = new _scripts_atm__WEBPACK_IMPORTED_MODULE_4__["default"](this.compteCourant);
        var html = this.afficheComptes();
        this.renderer.render('<h2>Bienvenu a UBA BANK!</h2><br /><h5>Vos Comptes:</h5><br />' + html);
    }
    Main.prototype.afficheComptes = function () {
        var acctsHtml = '';
        var accList = new _scripts_ListComptes__WEBPACK_IMPORTED_MODULE_0__.ListComptes();
        accList.ajouter(this.compteCourant);
        accList.ajouter(this.compteEpargne);
        accList.getComptes().forEach(function (acct, index) {
            acctsHtml += acct.nomClient + '<br />';
        });
        return acctsHtml;
    };
    Main.prototype.afficheCompte = function (compte) {
        var typeCompte = compte.typeCompte;
        var html = "\n      <h2></h2>\n      <h3>Compte ".concat(typeCompte, "</h3>\n      <br />\n      <image src=\"src/images/").concat(typeCompte, ".jpg\" heigt=\"150\">\n      <div>\n      <span class=\"label\">Client:</span> ").concat(compte.nomClient, "\n      <br />\n      <span class=\"label\">Solde:</span> ").concat(compte.solde.toFixed(2), "\n      FCFA \n      </div>\n      <br /><br />\n      <input type=\"text\" id=\"sommeDepotRetrait\" />&nbsp;&nbsp;\n      <button onclick=\"main.crediterEtDebiter(true)\">Crediter</button>&nbsp;\n      <button onclick=\"main.crediterEtDebiter(false)\">Debiter</button>&nbsp;\n      <button onclick=\"main.transfert()\">Transferer au Compte Epargne</button>&nbsp;\n      ");
        this.renderer.render(html);
    };
    // 3 - Crediter et Debiter les comptes bancaires
    Main.prototype.crediterEtDebiter = function (depot, atm) {
        var input = document.querySelector('#sommeDepotRetrait');
        var somme = parseInt(input.value);
        var error;
        try {
            if (depot) {
                if (atm) {
                    this.atm.crediter(somme);
                }
                else {
                    this.compteEnCours.crediter(somme);
                }
            }
            else {
                if (atm) {
                    this.atm.debiter(somme);
                }
                else {
                    this.compteEnCours.debiter(somme);
                }
            }
        }
        catch (e) {
            error = e;
        }
        atm ? this.afficheATM() : this.afficheCompte(this.compteEnCours);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    Main.prototype.transfert = function () {
        var input = document.querySelector('#sommeDepotRetrait');
        var somme = +input.value;
        this.compteCourant.transfertArgent(somme, this.compteEpargne);
        this.afficheCompte(this.compteCourant);
    };
    Main.prototype.afficheATM = function () {
        var html = "\n            <h3>ATM</h3>\n            <image src=\"src/images/atm.jpg\" height=\"150\">\n            <br /><br />\n            Votre compte Courant: ".concat(this.compteCourant.solde, " FCFA\n            <br /><br />\n            <input type=\"text\" id=\"sommeDepotRetrait\" /> FCFA &nbsp;&nbsp;\n            <button onclick=\"main.crediterEtDebiter(true, true)\">Crediter</button>&nbsp;\n            <button onclick=\"main.crediterEtDebiter(false, true)\">Debiter</button>&nbsp;\n        ");
        this.renderer.render(html);
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'courant':
                this.compteEnCours = this.compteCourant;
                break;
            case 'epargne':
                this.compteEnCours = this.compteEpargne;
                break;
            case 'atm':
                this.compteEnCours = this.compteCourant;
                this.afficheATM();
                return;
        }
        this.afficheCompte(this.compteEnCours);
    };
    return Main;
}());
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__["default"](document.querySelector('#appTemplate'));
var main = new Main(renderer);
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN6QyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFFRCxJQUFNLFFBQVEsR0FBRyxJQUFJLHlEQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRTFCLE1BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9MaXN0Q29tcHRlcy50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2F0bS50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2NvbXB0ZS1iYW5jYWlyZS50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2NvbXB0ZS1jb3VyYW50LnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvY29tcHRlLWVwYXJnbmUudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IENvbXB0ZUJhbmNhaXJlIGZyb20gJy4vY29tcHRlLWJhbmNhaXJlJztcblxuZXhwb3J0IGNsYXNzIExpc3RDb21wdGVzIHtcbiAgX2xpc3RDb21wdGVzOiBDb21wdGVCYW5jYWlyZVtdID0gW107XG5cbiAgYWpvdXRlcihjb21wdGU6IENvbXB0ZUJhbmNhaXJlKSB7XG4gICAgdGhpcy5fbGlzdENvbXB0ZXMucHVzaChjb21wdGUpO1xuICB9XG5cbiAgZ2V0Q29tcHRlcygpOiBDb21wdGVCYW5jYWlyZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdENvbXB0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBDb21wdGVCYW5jYWlyZSBmcm9tICcuL2NvbXB0ZS1iYW5jYWlyZSc7XG5pbXBvcnQgeyBpQ3JlZGl0ZXJEZWJpdGVyIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuY2xhc3MgQVRNIGltcGxlbWVudHMgaUNyZWRpdGVyRGViaXRlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgY29tcHRlOiBDb21wdGVCYW5jYWlyZSkge31cblxuICBjcmVkaXRlcihzb21tZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jb21wdGUuY3JlZGl0ZXIoc29tbWUpO1xuICB9XG5cbiAgZGViaXRlcihzb21tZTogbnVtYmVyKTogdm9pZCB7XG4gICAgdGhpcy5jb21wdGUuZGViaXRlcihzb21tZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQVRNO1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgSVBhcmFtZXRyZXNDb21wdGUgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuaW1wb3J0IHsgSUNvbXB0ZUJhbmNhaXJlIH0gZnJvbSAnLi9pbnRlcmZhY2VzJztcblxuYWJzdHJhY3QgY2xhc3MgQ29tcHRlQmFuY2FpcmUgaW1wbGVtZW50cyBJQ29tcHRlQmFuY2FpcmUge1xuICAvLyBwcm9wcmlldGVzXG4gIHByaXZhdGUgX3NvbGRlOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgcHVibGljIG5vbUNsaWVudDogc3RyaW5nO1xuXG4gIGFic3RyYWN0IHR5cGVDb21wdGU6IHN0cmluZztcblxuICBwdWJsaWMgdGF1eEludGVyZXQ/OiBudW1iZXI7XG5cbiAgLy8gY29uc3RydWN0ZXVyIGF2ZWMgZGVzIHByb3ByaWV0c1xuICBjb25zdHJ1Y3RvcihwYXJhbWV0cmVzQ29tcHRlczogSVBhcmFtZXRyZXNDb21wdGUpIHtcbiAgICB0aGlzLmlkID0gcGFyYW1ldHJlc0NvbXB0ZXMuaWQ7XG4gICAgdGhpcy5fc29sZGUgPSBwYXJhbWV0cmVzQ29tcHRlcy5zb2xkZTtcbiAgICB0aGlzLm5vbUNsaWVudCA9IHBhcmFtZXRyZXNDb21wdGVzLm5vbUNsaWVudDtcbiAgICB0aGlzLnRhdXhJbnRlcmV0ID0gcGFyYW1ldHJlc0NvbXB0ZXMudGF1eEludGVyZXQ7XG4gIH1cbiAgLy8gZ2V0dGVycyBldCBzZXR0ZXJzXG4gIHB1YmxpYyBnZXQgc29sZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc29sZGU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHNvbGRlKHZhbGV1cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc29sZGUgPSB2YWxldXI7XG4gIH1cbiAgLy8gbWV0aG9kZXNcbiAgYWJzdHJhY3QgaW5mb0NvbXB0ZSgpOiB2b2lkO1xuXG4gIGRlYml0ZXIoc29tbWU6IG51bWJlcikge1xuICAgIGlmIChzb21tZSA8IHRoaXMuX3NvbGRlKSB7XG4gICAgICB0aGlzLl9zb2xkZSAtPSBzb21tZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoJ2xhIHNvbGRlIGRlYml0ZXVyIGVzdCBpbmZlcmlldXInKTtcbiAgICB9XG4gIH1cbiAgY3JlZGl0ZXIoc29tbWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NvbGRlICs9IHNvbW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXB0ZUJhbmNhaXJlO1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IENvbXB0ZUJhbmNhaXJlIGZyb20gJy4vY29tcHRlLWJhbmNhaXJlJztcbmltcG9ydCB7IFR5cGVDb21wdGUgfSBmcm9tICcuL2VtdW5zJztcblxuY2xhc3MgQ29tcHRlQ291cmFudCBleHRlbmRzIENvbXB0ZUJhbmNhaXJlIHtcbiAgcHVibGljIHR5cGVDb21wdGU6IHN0cmluZyA9ICdjb3VyYW50JztcblxuICBpbmZvQ29tcHRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHRyYW5zZmVydEFyZ2VudChzb21tZTogbnVtYmVyLCBjb21wdGU6IENvbXB0ZUJhbmNhaXJlKSB7XG4gICAgdGhpcy5kZWJpdGVyKHNvbW1lKTtcbiAgICBjb21wdGUuY3JlZGl0ZXIoc29tbWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXB0ZUNvdXJhbnQ7XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgeyBUeXBlQ29tcHRlIH0gZnJvbSAnLi9lbXVucyc7XG4vKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgeyBJUGFyYW1ldHJlc0NvbXB0ZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG4vKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgQ29tcHRlQmFuY2FpcmUgZnJvbSAnLi9jb21wdGUtYmFuY2FpcmUnO1xuXG5jbGFzcyBDb21wdGVFcGFyZ25lIGV4dGVuZHMgQ29tcHRlQmFuY2FpcmUge1xuICBwdWJsaWMgdGF1eEludGVyZXQ6IG51bWJlcjtcblxuICB0eXBlQ29tcHRlOiBzdHJpbmcgPSAnZXBhcmduZSc7XG5cbiAgY29uc3RydWN0b3IocGFyYW1ldHJlc0NvbXB0ZXM6IElQYXJhbWV0cmVzQ29tcHRlKSB7XG4gICAgc3VwZXIocGFyYW1ldHJlc0NvbXB0ZXMpO1xuICAgIHRoaXMudGF1eEludGVyZXQgPSBwYXJhbWV0cmVzQ29tcHRlcy50YXV4SW50ZXJldDtcbiAgfVxuXG4gIGluZm9Db21wdGUoKTogdm9pZCB7fVxuXG4gIGNyZWRpdGVyKHNvbW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgbW9udGFudCA9IHNvbW1lICsgKHNvbW1lICogdGhpcy50YXV4SW50ZXJldCkgLyAxMDA7XG4gICAgdGhpcy5zb2xkZSArPSBtb250YW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXB0ZUVwYXJnbmU7XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5jbGFzcyBSZW5kZXJlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwVGVtcGxhdGU6IEhUTUxEaXZFbGVtZW50KSB7XG4gICAgdGhpcy5hcHBUZW1wbGF0ZS5pbm5lckhUTUwgPVxuICAgICAgJzxoMj5CaWVudmVudSBhIFVCQSE8L2gyPjxiciAvPjxoNT5Wb3MgQ29tcHRlczo8L2g1PjxiciAvPic7XG4gIH1cblxuICByZW5kZXIoaHRtbDogc3RyaW5nKSB7XG4gICAgdGhpcy5hcHBUZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICB9XG5cbiAgcmVuZGVyRXJyb3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgdGhpcy5hcHBUZW1wbGF0ZS5pbm5lckhUTUwgKz0gYDxiciAvPjxiciAvPjxkaXYgY2xhc3M9XCJhbGVydCBhbGVydC1kYW5nZXJcIj4ke21lc3NhZ2V9PC9kaXY+YDtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCB7IExpc3RDb21wdGVzIH0gZnJvbSAnLi9zY3JpcHRzL0xpc3RDb21wdGVzJztcbmltcG9ydCBDb21wdGVDb3VyYW50IGZyb20gJy4vc2NyaXB0cy9jb21wdGUtY291cmFudCc7XG5pbXBvcnQgQ29tcHRlRXBhcmduZSBmcm9tICcuL3NjcmlwdHMvY29tcHRlLWVwYXJnbmUnO1xuaW1wb3J0IENvbXB0ZUJhbmNhaXJlIGZyb20gJy4vc2NyaXB0cy9jb21wdGUtYmFuY2FpcmUnO1xuaW1wb3J0IHsgVHlwZUNvbXB0ZSB9IGZyb20gJy4vc2NyaXB0cy9lbXVucyc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9zY3JpcHRzL3JlbmRlcmVyJztcbmltcG9ydCBBVE0gZnJvbSAnLi9zY3JpcHRzL2F0bSc7XG5cbmNsYXNzIE1haW4ge1xuICBwdWJsaWMgY29tcHRlQ291cmFudDogQ29tcHRlQ291cmFudDtcbiAgcHVibGljIGNvbXB0ZUVwYXJnbmU6IENvbXB0ZUVwYXJnbmU7XG4gIHB1YmxpYyBjb21wdGVFbkNvdXJzOiBDb21wdGVCYW5jYWlyZTtcbiAgYXRtOiBBVE07XG5cbiAgLy8gY3JlYXRpb24gY29tcHRlIGFjdHVlbC8gZW4gY291cnMgZGUgdHJhaXRlbWVudDtcblxuICAvLyAxIC0gY3JlYXRpb24gZGVzIGNvbXB0ZXMgYmFuY2FpcmVzXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgdGhpcy5jb21wdGVDb3VyYW50ID0gbmV3IENvbXB0ZUNvdXJhbnQoe1xuICAgICAgaWQ6IDEsXG4gICAgICBub21DbGllbnQ6ICdKb3NlIEJhbGxhJyxcbiAgICAgIHNvbGRlOiAxMDAwMCxcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcHRlRXBhcmduZSA9IG5ldyBDb21wdGVFcGFyZ25lKHtcbiAgICAgIGlkOiAxMDAsXG4gICAgICBub21DbGllbnQ6ICdKb3NlIEJhbGxhJyxcbiAgICAgIHNvbGRlOiAxNTAwMCxcbiAgICAgIHRhdXhJbnRlcmV0OiAyLjUsXG4gICAgfSk7XG5cbiAgICAvLyBBVE0gaW5zdGFuY2lhY3Rpb24gZGUgTCdBVE1cbiAgICB0aGlzLmF0bSA9IG5ldyBBVE0odGhpcy5jb21wdGVDb3VyYW50KTtcblxuICAgIGxldCBodG1sID0gdGhpcy5hZmZpY2hlQ29tcHRlcygpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoXG4gICAgICAnPGgyPkJpZW52ZW51IGEgVUJBIEJBTkshPC9oMj48YnIgLz48aDU+Vm9zIENvbXB0ZXM6PC9oNT48YnIgLz4nICsgaHRtbFxuICAgICk7XG4gIH1cblxuICBhZmZpY2hlQ29tcHRlcygpIHtcbiAgICBsZXQgYWNjdHNIdG1sOiBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhY2NMaXN0ID0gbmV3IExpc3RDb21wdGVzKCk7XG4gICAgYWNjTGlzdC5ham91dGVyKHRoaXMuY29tcHRlQ291cmFudCk7XG4gICAgYWNjTGlzdC5ham91dGVyKHRoaXMuY29tcHRlRXBhcmduZSk7XG5cbiAgICBhY2NMaXN0LmdldENvbXB0ZXMoKS5mb3JFYWNoKChhY2N0LCBpbmRleCkgPT4ge1xuICAgICAgYWNjdHNIdG1sICs9IGFjY3Qubm9tQ2xpZW50ICsgJzxiciAvPic7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjY3RzSHRtbDtcbiAgfVxuXG4gIGFmZmljaGVDb21wdGUoY29tcHRlOiBDb21wdGVCYW5jYWlyZSkge1xuICAgIGNvbnN0IHR5cGVDb21wdGUgPSBjb21wdGUudHlwZUNvbXB0ZTtcblxuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8aDI+PC9oMj5cbiAgICAgIDxoMz5Db21wdGUgJHt0eXBlQ29tcHRlfTwvaDM+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpbWFnZSBzcmM9XCJzcmMvaW1hZ2VzLyR7dHlwZUNvbXB0ZX0uanBnXCIgaGVpZ3Q9XCIxNTBcIj5cbiAgICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Q2xpZW50Ojwvc3Bhbj4gJHtjb21wdGUubm9tQ2xpZW50fVxuICAgICAgPGJyIC8+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+U29sZGU6PC9zcGFuPiAke2NvbXB0ZS5zb2xkZS50b0ZpeGVkKDIpfVxuICAgICAgRkNGQSBcbiAgICAgIDwvZGl2PlxuICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNvbW1lRGVwb3RSZXRyYWl0XCIgLz4mbmJzcDsmbmJzcDtcbiAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJFdERlYml0ZXIodHJ1ZSlcIj5DcmVkaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckV0RGViaXRlcihmYWxzZSlcIj5EZWJpdGVyPC9idXR0b24+Jm5ic3A7XG4gICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLnRyYW5zZmVydCgpXCI+VHJhbnNmZXJlciBhdSBDb21wdGUgRXBhcmduZTwvYnV0dG9uPiZuYnNwO1xuICAgICAgYDtcbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihodG1sKTtcbiAgfVxuXG4gIC8vIDMgLSBDcmVkaXRlciBldCBEZWJpdGVyIGxlcyBjb21wdGVzIGJhbmNhaXJlc1xuICBjcmVkaXRlckV0RGViaXRlcihkZXBvdDogYm9vbGVhbiwgYXRtPzogYm9vbGVhbikge1xuICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb21tZURlcG90UmV0cmFpdCcpO1xuICAgIGxldCBzb21tZSA9IHBhcnNlSW50KGlucHV0LnZhbHVlKTtcbiAgICBsZXQgZXJyb3I7XG5cbiAgICB0cnkge1xuICAgICAgaWYgKGRlcG90KSB7XG4gICAgICAgIGlmIChhdG0pIHtcbiAgICAgICAgICB0aGlzLmF0bS5jcmVkaXRlcihzb21tZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb21wdGVFbkNvdXJzLmNyZWRpdGVyKHNvbW1lKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGF0bSkge1xuICAgICAgICAgIHRoaXMuYXRtLmRlYml0ZXIoc29tbWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuY29tcHRlRW5Db3Vycy5kZWJpdGVyKHNvbW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG5cbiAgICBhdG0gPyB0aGlzLmFmZmljaGVBVE0oKSA6IHRoaXMuYWZmaWNoZUNvbXB0ZSh0aGlzLmNvbXB0ZUVuQ291cnMpO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlckVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIHRyYW5zZmVydCgpIHtcbiAgICBjb25zdCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29tbWVEZXBvdFJldHJhaXQnKTtcblxuICAgIGNvbnN0IHNvbW1lID0gK2lucHV0LnZhbHVlO1xuICAgIHRoaXMuY29tcHRlQ291cmFudC50cmFuc2ZlcnRBcmdlbnQoc29tbWUsIHRoaXMuY29tcHRlRXBhcmduZSk7XG5cbiAgICB0aGlzLmFmZmljaGVDb21wdGUodGhpcy5jb21wdGVDb3VyYW50KTtcbiAgfVxuXG4gIGFmZmljaGVBVE0oKSB7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgIDxoMz5BVE08L2gzPlxuICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvYXRtLmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICBWb3RyZSBjb21wdGUgQ291cmFudDogJHt0aGlzLmNvbXB0ZUNvdXJhbnQuc29sZGV9IEZDRkFcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzb21tZURlcG90UmV0cmFpdFwiIC8+IEZDRkEgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmNyZWRpdGVyRXREZWJpdGVyKHRydWUsIHRydWUpXCI+Q3JlZGl0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJFdERlYml0ZXIoZmFsc2UsIHRydWUpXCI+RGViaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgICBgO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG5cbiAgY2hhbmdlVmlldyh2aWV3Pzogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh2aWV3KSB7XG4gICAgICBjYXNlICdjb3VyYW50JzpcbiAgICAgICAgdGhpcy5jb21wdGVFbkNvdXJzID0gdGhpcy5jb21wdGVDb3VyYW50O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2VwYXJnbmUnOlxuICAgICAgICB0aGlzLmNvbXB0ZUVuQ291cnMgPSB0aGlzLmNvbXB0ZUVwYXJnbmU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnYXRtJzpcbiAgICAgICAgdGhpcy5jb21wdGVFbkNvdXJzID0gdGhpcy5jb21wdGVDb3VyYW50O1xuICAgICAgICB0aGlzLmFmZmljaGVBVE0oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFmZmljaGVDb21wdGUodGhpcy5jb21wdGVFbkNvdXJzKTtcbiAgfVxufVxuXG5jb25zdCByZW5kZXJlciA9IG5ldyBSZW5kZXJlcihkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwVGVtcGxhdGUnKSk7XG5jb25zdCBtYWluID0gbmV3IE1haW4ocmVuZGVyZXIpO1xuXG4oPGFueT53aW5kb3cpLm1haW4gPSBtYWluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9