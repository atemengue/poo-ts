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
    CompteCourant.prototype.transfererArgent = function (somme, compte) {
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
    CompteEpargne.prototype.transfererArgent = function (somme, compte) {
        this.debiter(somme);
        compte.crediter(somme);
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
        this.atm = new _scripts_atm__WEBPACK_IMPORTED_MODULE_4__["default"](this.compteEpargne);
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
    Main.prototype.transfert = function () {
        var input = document.querySelector('#sommeDepotRetrait');
        var somme = parseInt(input.value);
        this.compteCourant.transfererArgent(somme, this.compteEpargne);
        this.afficheCompte(this.compteTransaction);
    };
    Main.prototype.afficheCompte = function (compte) {
        var typeCompte = compte.typeCompte;
        var html = "\n      <h2></h2>\n      <h3>Compte ".concat(typeCompte, "</h3>\n      <br />\n      <image src=\"src/images/").concat(typeCompte, ".jpg\" heigt=\"150\">\n      <div>\n      <span class=\"label\">Client:</span> ").concat(compte.nomClient, "\n      <br />\n      <span class=\"label\">Solde:</span> ").concat(compte.solde.toFixed(2), "\n      FCFA \n      </div>\n      <br /><br />\n      <input type=\"text\" id=\"sommeDepotRetrait\" />&nbsp;&nbsp;\n      <button onclick=\"main.crediterEtDebiter(true)\">Crediter</button>&nbsp;\n      <button onclick=\"main.crediterEtDebiter(false)\">Debiter</button>&nbsp;\n      <button onclick=\"main.transfert()\">Transferer argent</button>&nbsp;\n      ");
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
                    this.compteTransaction.crediter(inputValue);
                }
            }
            else {
                if (atm) {
                    this.atm.debiter(inputValue);
                }
                else {
                    this.compteTransaction.debiter(inputValue);
                }
            }
        }
        catch (e) {
            error = e;
        }
        atm ? this.afficheATM() : this.afficheCompte(this.compteTransaction);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    Main.prototype.afficheATM = function () {
        var html = "\n            <h3>ATM</h3>\n            <image src=\"src/images/atm.jpg\" height=\"150\">\n            <br /><br />\n            Votre compte Courant: ".concat(this.compteEpargne.solde, " FCFA\n            <br /><br />\n            <input type=\"text\" id=\"sommeDepotRetrait\" /> FCFA &nbsp;&nbsp;\n            <button onclick=\"main.crediterEtDebiter(true, true)\">Crediter</button>&nbsp;\n            <button onclick=\"main.crediterEtDebiter(false, true)\">Debiter</button>&nbsp;\n        ");
        this.renderer.render(html);
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'courant':
                this.compteTransaction = this.compteCourant;
                break;
            case 'epargne':
                this.compteTransaction = this.compteEpargne;
                break;
            case 'atm':
                this.compteTransaction = this.compteCourant;
                this.afficheATM();
                return;
        }
        this.afficheCompte(this.compteTransaction);
    };
    return Main;
}());
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_3__["default"](document.querySelector('#appTemplate'));
var main = new Main(renderer);
// renderer API main disponible dans l'app
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztnQkFDbEIsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBQ0gsV0FBQztBQUFELENBQUM7QUFFRCxJQUFNLFFBQVEsR0FBRyxJQUFJLHlEQUFRLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0FBQ3RFLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBRWhDLDBDQUEwQztBQUNwQyxNQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvTGlzdENvbXB0ZXMudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9hdG0udHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9jb21wdGUtYmFuY2FpcmUudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9jb21wdGUtY291cmFudC50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2NvbXB0ZS1lcGFyZ25lLnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBDb21wdGVCYW5jYWlyZSBmcm9tICcuL2NvbXB0ZS1iYW5jYWlyZSc7XG5cbmV4cG9ydCBjbGFzcyBMaXN0Q29tcHRlcyB7XG4gIF9saXN0Q29tcHRlczogQ29tcHRlQmFuY2FpcmVbXSA9IFtdO1xuXG4gIGFqb3V0ZXIoY29tcHRlOiBDb21wdGVCYW5jYWlyZSkge1xuICAgIHRoaXMuX2xpc3RDb21wdGVzLnB1c2goY29tcHRlKTtcbiAgfVxuXG4gIGdldENvbXB0ZXMoKTogQ29tcHRlQmFuY2FpcmVbXSB7XG4gICAgcmV0dXJuIHRoaXMuX2xpc3RDb21wdGVzO1xuICB9XG59XG4iLCIvKiogQGZvcm1hdCAqL1xuaW1wb3J0IENvbXB0ZUJhbmNhaXJlIGZyb20gJy4vY29tcHRlLWJhbmNhaXJlJztcbmltcG9ydCB7IEljcmVkaXRlckRlYml0ZXIgfSBmcm9tICcuL2ludGVyZmFjZXMnO1xuXG5jbGFzcyBBVE0gaW1wbGVtZW50cyBJY3JlZGl0ZXJEZWJpdGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21wdGU6IENvbXB0ZUJhbmNhaXJlKSB7fVxuXG4gIGNyZWRpdGVyKHNvbW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXB0ZS5jcmVkaXRlcihzb21tZSk7XG4gIH1cblxuICBkZWJpdGVyKHNvbW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNvbXB0ZS5kZWJpdGVyKHNvbW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBVE07XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgeyBJcGFyYW1ldHJlc0NvbXB0ZXMsIElDb21wdGVCYW5jYWlyZSB9IGZyb20gJy4vaW50ZXJmYWNlcyc7XG5pbXBvcnQgeyBUeXBlQ29tcHRlIH0gZnJvbSAnLi9lbXVucyc7XG5cbmFic3RyYWN0IGNsYXNzIENvbXB0ZUJhbmNhaXJlIGltcGxlbWVudHMgSUNvbXB0ZUJhbmNhaXJlIHtcbiAgLy8gcHJvcHJpZXRlc1xuICBwcml2YXRlIF9zb2xkZTogbnVtYmVyID0gMDtcbiAgcHVibGljIGlkOiBudW1iZXI7XG4gIHB1YmxpYyBub21DbGllbnQ6IHN0cmluZztcblxuICBhYnN0cmFjdCB0eXBlQ29tcHRlOiBzdHJpbmc7XG5cbiAgLy8gY29uc3RydWN0ZXVyIGF2ZWMgZGVzIHByb3ByaWV0c1xuICBjb25zdHJ1Y3RvcihwYXJhbWV0cmVzQ29tcHRlczogYW55KSB7XG4gICAgdGhpcy5pZCA9IHBhcmFtZXRyZXNDb21wdGVzLmlkO1xuICAgIHRoaXMuX3NvbGRlID0gcGFyYW1ldHJlc0NvbXB0ZXMuc29sZGU7XG4gICAgdGhpcy5ub21DbGllbnQgPSBwYXJhbWV0cmVzQ29tcHRlcy5ub21DbGllbnQ7XG4gIH1cbiAgLy8gZ2V0dGVycyBldCBzZXR0ZXJzXG4gIHB1YmxpYyBnZXQgc29sZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc29sZGU7XG4gIH1cblxuICBwdWJsaWMgc2V0IHNvbGRlKHZhbGV1cjogbnVtYmVyKSB7XG4gICAgdGhpcy5fc29sZGUgPSB2YWxldXI7XG4gIH1cbiAgLy8gbWV0aG9kZXNcbiAgYWJzdHJhY3QgaW5mb0NvbXB0ZSgpOiB2b2lkO1xuXG4gIGRlYml0ZXIoc29tbWU6IG51bWJlcikge1xuICAgIGlmIChzb21tZSA8IHRoaXMuX3NvbGRlKSB7XG4gICAgICB0aGlzLl9zb2xkZSAtPSBzb21tZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgRXJyb3IoJ2xhIHNvbGRlIGRlYml0ZXVyIGVzdCBpbmZlcmlldXInKTtcbiAgICB9XG4gIH1cbiAgY3JlZGl0ZXIoc29tbWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NvbGRlICs9IHNvbW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXB0ZUJhbmNhaXJlO1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IENvbXB0ZUJhbmNhaXJlIGZyb20gJy4vY29tcHRlLWJhbmNhaXJlJztcbmltcG9ydCB7IFR5cGVDb21wdGUgfSBmcm9tICcuL2VtdW5zJztcblxuY2xhc3MgQ29tcHRlQ291cmFudCBleHRlbmRzIENvbXB0ZUJhbmNhaXJlIHtcbiAgcHVibGljIHR5cGVDb21wdGU6IHN0cmluZyA9ICdjb3VyYW50JztcblxuICBpbmZvQ29tcHRlKCkge1xuICAgIHJldHVybiB7fTtcbiAgfVxuXG4gIHRyYW5zZmVyZXJBcmdlbnQoc29tbWU6IG51bWJlciwgY29tcHRlOiBDb21wdGVCYW5jYWlyZSkge1xuICAgIHRoaXMuZGViaXRlcihzb21tZSk7XG4gICAgY29tcHRlLmNyZWRpdGVyKHNvbW1lKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wdGVDb3VyYW50O1xuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IENvbXB0ZUJhbmNhaXJlIGZyb20gJy4vY29tcHRlLWJhbmNhaXJlJztcblxuY2xhc3MgQ29tcHRlRXBhcmduZSBleHRlbmRzIENvbXB0ZUJhbmNhaXJlIHtcbiAgcHVibGljIHRhdXhJbnRlcmV0OiBudW1iZXI7XG5cbiAgdHlwZUNvbXB0ZTogc3RyaW5nID0gJ2VwYXJnbmUnO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRyZXNDb21wdGVzOiBhbnkpIHtcbiAgICBzdXBlcihwYXJhbWV0cmVzQ29tcHRlcyk7XG4gICAgdGhpcy50YXV4SW50ZXJldCA9IHBhcmFtZXRyZXNDb21wdGVzLnRhdXhJbnRlcmV0O1xuICB9XG5cbiAgaW5mb0NvbXB0ZSgpOiB2b2lkIHt9XG5cbiAgY3JlZGl0ZXIoc29tbWU6IG51bWJlcik6IHZvaWQge1xuICAgIGxldCBtb250YW50ID0gc29tbWUgKyAoc29tbWUgKiB0aGlzLnRhdXhJbnRlcmV0KSAvIDEwMDtcbiAgICB0aGlzLnNvbGRlICs9IG1vbnRhbnQ7XG4gIH1cblxuICB0cmFuc2ZlcmVyQXJnZW50KHNvbW1lOiBudW1iZXIsIGNvbXB0ZTogQ29tcHRlQmFuY2FpcmUpIHtcbiAgICB0aGlzLmRlYml0ZXIoc29tbWUpO1xuICAgIGNvbXB0ZS5jcmVkaXRlcihzb21tZSk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHRlRXBhcmduZTtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9XG4gICAgICAnPGgyPkJpZW52ZW51IGEgVUJBITwvaDI+PGJyIC8+PGg1PlZvcyBDb21wdGVzOjwvaDU+PGJyIC8+JztcbiAgfVxuXG4gIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cblxuICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgTGlzdENvbXB0ZXMgfSBmcm9tICcuL3NjcmlwdHMvTGlzdENvbXB0ZXMnO1xuaW1wb3J0IENvbXB0ZUNvdXJhbnQgZnJvbSAnLi9zY3JpcHRzL2NvbXB0ZS1jb3VyYW50JztcbmltcG9ydCBDb21wdGVFcGFyZ25lIGZyb20gJy4vc2NyaXB0cy9jb21wdGUtZXBhcmduZSc7XG5pbXBvcnQgQ29tcHRlQmFuY2FpcmUgZnJvbSAnLi9zY3JpcHRzL2NvbXB0ZS1iYW5jYWlyZSc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9zY3JpcHRzL3JlbmRlcmVyJztcbmltcG9ydCBBVE0gZnJvbSAnLi9zY3JpcHRzL2F0bSc7XG5jbGFzcyBNYWluIHtcbiAgcHVibGljIGNvbXB0ZUNvdXJhbnQ6IENvbXB0ZUNvdXJhbnQ7XG4gIHB1YmxpYyBjb21wdGVFcGFyZ25lOiBDb21wdGVFcGFyZ25lO1xuICBwdWJsaWMgY29tcHRlVHJhbnNhY3Rpb246IENvbXB0ZUJhbmNhaXJlO1xuICBwdWJsaWMgYXRtOiBBVE07XG5cbiAgLy8gY3JlYXRpb24gY29tcHRlIGFjdHVlbC8gZW4gY291cnMgZGUgdHJhaXRlbWVudDtcblxuICAvLyAxIC0gY3JlYXRpb24gZGVzIGNvbXB0ZXMgYmFuY2FpcmVzXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyKSB7XG4gICAgdGhpcy5jb21wdGVDb3VyYW50ID0gbmV3IENvbXB0ZUNvdXJhbnQoe1xuICAgICAgaWQ6IDEsXG4gICAgICBub21DbGllbnQ6ICdKb3NlIEJhbGxhJyxcbiAgICAgIHNvbGRlOiAxMDAwMCxcbiAgICB9KTtcblxuICAgIHRoaXMuY29tcHRlRXBhcmduZSA9IG5ldyBDb21wdGVFcGFyZ25lKHtcbiAgICAgIGlkOiAxMDAsXG4gICAgICBub21DbGllbnQ6ICdKb3NlIEJhbGxhJyxcbiAgICAgIHNvbGRlOiAxNTAwMCxcbiAgICAgIHRhdXhJbnRlcmV0OiAyLjUsXG4gICAgfSk7XG5cbiAgICAvLyBBVE0gaW5zdGFuY2lhY3Rpb24gZGUgTCdBVE1cbiAgICB0aGlzLmF0bSA9IG5ldyBBVE0odGhpcy5jb21wdGVFcGFyZ25lKTtcblxuICAgIGxldCBodG1sID0gdGhpcy5hZmZpY2hlQ29tcHRlcygpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoXG4gICAgICAnPGgyPkJpZW52ZW51IGEgVUJBIEJBTkshPC9oMj48YnIgLz48aDU+Vm9zIENvbXB0ZXM6PC9oNT48YnIgLz4nICsgaHRtbFxuICAgICk7XG4gIH1cblxuICBhZmZpY2hlQ29tcHRlcygpIHtcbiAgICBsZXQgYWNjdHNIdG1sOiBzdHJpbmcgPSAnJztcbiAgICBjb25zdCBhY2NMaXN0ID0gbmV3IExpc3RDb21wdGVzKCk7XG4gICAgYWNjTGlzdC5ham91dGVyKHRoaXMuY29tcHRlQ291cmFudCk7XG4gICAgYWNjTGlzdC5ham91dGVyKHRoaXMuY29tcHRlRXBhcmduZSk7XG5cbiAgICBhY2NMaXN0LmdldENvbXB0ZXMoKS5mb3JFYWNoKChhY2N0LCBpbmRleCkgPT4ge1xuICAgICAgYWNjdHNIdG1sICs9IGFjY3Qubm9tQ2xpZW50ICsgJzxiciAvPic7XG4gICAgfSk7XG4gICAgcmV0dXJuIGFjY3RzSHRtbDtcbiAgfVxuXG4gIHRyYW5zZmVydCgpIHtcbiAgICBsZXQgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc29tbWVEZXBvdFJldHJhaXQnKTtcbiAgICBsZXQgc29tbWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSk7XG5cbiAgICB0aGlzLmNvbXB0ZUNvdXJhbnQudHJhbnNmZXJlckFyZ2VudChzb21tZSwgdGhpcy5jb21wdGVFcGFyZ25lKTtcblxuICAgIHRoaXMuYWZmaWNoZUNvbXB0ZSh0aGlzLmNvbXB0ZVRyYW5zYWN0aW9uKTtcbiAgfVxuXG4gIGFmZmljaGVDb21wdGUoY29tcHRlOiBDb21wdGVCYW5jYWlyZSkge1xuICAgIGNvbnN0IHR5cGVDb21wdGUgPSBjb21wdGUudHlwZUNvbXB0ZTtcbiAgICBjb25zdCBodG1sID0gYFxuICAgICAgPGgyPjwvaDI+XG4gICAgICA8aDM+Q29tcHRlICR7dHlwZUNvbXB0ZX08L2gzPlxuICAgICAgPGJyIC8+XG4gICAgICA8aW1hZ2Ugc3JjPVwic3JjL2ltYWdlcy8ke3R5cGVDb21wdGV9LmpwZ1wiIGhlaWd0PVwiMTUwXCI+XG4gICAgICA8ZGl2PlxuICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNsaWVudDo8L3NwYW4+ICR7Y29tcHRlLm5vbUNsaWVudH1cbiAgICAgIDxiciAvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlNvbGRlOjwvc3Bhbj4gJHtjb21wdGUuc29sZGUudG9GaXhlZCgyKX1cbiAgICAgIEZDRkEgXG4gICAgICA8L2Rpdj5cbiAgICAgIDxiciAvPjxiciAvPlxuICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzb21tZURlcG90UmV0cmFpdFwiIC8+Jm5ic3A7Jm5ic3A7XG4gICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmNyZWRpdGVyRXREZWJpdGVyKHRydWUpXCI+Q3JlZGl0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJFdERlYml0ZXIoZmFsc2UpXCI+RGViaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi50cmFuc2ZlcnQoKVwiPlRyYW5zZmVyZXIgYXJnZW50PC9idXR0b24+Jm5ic3A7XG4gICAgICBgO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG5cbiAgLy8gMyAtIENyZWRpdGVyIGV0IERlYml0ZXIgbGVzIGNvbXB0ZXMgYmFuY2FpcmVzXG4gIGNyZWRpdGVyRXREZWJpdGVyKGRlcG90OiBib29sZWFuLCBhdG0/OiBib29sZWFuKSB7XG4gICAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvbW1lRGVwb3RSZXRyYWl0Jyk7XG4gICAgbGV0IGlucHV0VmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSk7XG4gICAgbGV0IGVycm9yO1xuXG4gICAgdHJ5IHtcbiAgICAgIGlmIChkZXBvdCkge1xuICAgICAgICBpZiAoYXRtKSB7XG4gICAgICAgICAgdGhpcy5hdG0uY3JlZGl0ZXIoaW5wdXRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb21wdGVUcmFuc2FjdGlvbi5jcmVkaXRlcihpbnB1dFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKGF0bSkge1xuICAgICAgICAgIHRoaXMuYXRtLmRlYml0ZXIoaW5wdXRWYWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5jb21wdGVUcmFuc2FjdGlvbi5kZWJpdGVyKGlucHV0VmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgZXJyb3IgPSBlO1xuICAgIH1cblxuICAgIGF0bSA/IHRoaXMuYWZmaWNoZUFUTSgpIDogdGhpcy5hZmZpY2hlQ29tcHRlKHRoaXMuY29tcHRlVHJhbnNhY3Rpb24pO1xuXG4gICAgaWYgKGVycm9yKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnJlbmRlckVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIH1cbiAgfVxuXG4gIGFmZmljaGVBVE0oKSB7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgIDxoMz5BVE08L2gzPlxuICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvYXRtLmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICBWb3RyZSBjb21wdGUgQ291cmFudDogJHt0aGlzLmNvbXB0ZUVwYXJnbmUuc29sZGV9IEZDRkFcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzb21tZURlcG90UmV0cmFpdFwiIC8+IEZDRkEgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmNyZWRpdGVyRXREZWJpdGVyKHRydWUsIHRydWUpXCI+Q3JlZGl0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJFdERlYml0ZXIoZmFsc2UsIHRydWUpXCI+RGViaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgICBgO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG5cbiAgY2hhbmdlVmlldyh2aWV3Pzogc3RyaW5nKSB7XG4gICAgc3dpdGNoICh2aWV3KSB7XG4gICAgICBjYXNlICdjb3VyYW50JzpcbiAgICAgICAgdGhpcy5jb21wdGVUcmFuc2FjdGlvbiA9IHRoaXMuY29tcHRlQ291cmFudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlcGFyZ25lJzpcbiAgICAgICAgdGhpcy5jb21wdGVUcmFuc2FjdGlvbiA9IHRoaXMuY29tcHRlRXBhcmduZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdhdG0nOlxuICAgICAgICB0aGlzLmNvbXB0ZVRyYW5zYWN0aW9uID0gdGhpcy5jb21wdGVDb3VyYW50O1xuICAgICAgICB0aGlzLmFmZmljaGVBVE0oKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmFmZmljaGVDb21wdGUodGhpcy5jb21wdGVUcmFuc2FjdGlvbik7XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcFRlbXBsYXRlJykpO1xuY29uc3QgbWFpbiA9IG5ldyBNYWluKHJlbmRlcmVyKTtcblxuLy8gcmVuZGVyZXIgQVBJIG1haW4gZGlzcG9uaWJsZSBkYW5zIGwnYXBwXG4oPGFueT53aW5kb3cpLm1haW4gPSBtYWluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9