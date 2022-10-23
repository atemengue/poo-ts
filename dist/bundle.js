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
        _this.tauxInterest = parametresCompte.tauxInterest;
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
            tauxInterest: 2.5,
        });
        var html = this.afficheComptes();
        this.renderer.render('<h2>Bienvenu a la banque!</h2><br /><h5>Votre Compte:</h5><br />' + html);
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
        console.log(compte);
        var typeCompte = _scripts_enums__WEBPACK_IMPORTED_MODULE_3__.TypeCompte[compte.typeCompte];
        var html = "\n      <h2></h2>\n      <h3>Compte ".concat(typeCompte, "</h3>\n      <br />\n      <span class=\"label\">Client:</span> ").concat(compte.client, "\n      <br />\n      <span class=\"label\">Solde:</span> ").concat(compte.solde.toFixed(2), "\n      FCFA <br /><br />\n      <input type=\"text\" id=\"sommeDepotRetrait\" />&nbsp;&nbsp;\n      <button onclick=\"main.crediterEtDebiter(true)\">Crediter</button>&nbsp;\n      <button onclick=\"main.crediterEtDebiter(false)\">Debiter</button>&nbsp;\n      ");
        this.renderer.render(html);
    };
    // 3 - Crediter et Debiter les comptes bancaires
    Main.prototype.crediterEtDebiter = function (depot) {
        var input = document.querySelector('#sommeDepotRetrait');
        var inputValue = parseInt(input.value);
        var error;
        try {
            if (depot) {
                this.compteActuel.crediter(inputValue);
            }
            else {
                this.compteActuel.debiter(inputValue);
            }
        }
        catch (e) {
            error = e;
        }
        this.afficheCompte(this.compteActuel);
        if (error) {
            this.renderer.renderError(error.message);
        }
    };
    Main.prototype.changeView = function (view) {
        switch (view) {
            case 'courant':
                this.compteActuel = this.compteCourant;
                break;
            case 'epargne':
                this.compteActuel = this.compteEpargne;
                break;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSyxDQUFDO1FBRVYsSUFBSTtZQUNGLElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3hDO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ3ZDO1NBQ0Y7UUFBQyxPQUFPLENBQUMsRUFBRTtZQUNWLEtBQUssR0FBRyxDQUFDLENBQUM7U0FDWDtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBRXRDLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1NBQzFDO0lBQ0gsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxJQUFhO1FBQ3RCLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxTQUFTO2dCQUNaLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztnQkFDdkMsTUFBTTtZQUNSLEtBQUssU0FBUztnQkFDWixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ3ZDLE1BQU07U0FDVDtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0FBQztBQUVELElBQU0sUUFBUSxHQUFHLElBQUksdURBQVEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7QUFDdEUsSUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7QUFFMUIsTUFBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL0FjY291bnRMaXN0cy50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2NvbXB0ZS1iYW5jYWlyZS50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2NvbXB0ZS1jb3VyYW50LnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvY29tcHRlLWVwYXJnbmUudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9lbnVtcy50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL3JlbmRlcmVyLnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgQ29tcHRlQmFuY2FpcmUgZnJvbSAnLi9jb21wdGUtYmFuY2FpcmUnO1xuXG5leHBvcnQgY2xhc3MgTGlzdENvbXB0ZXMge1xuICBfbGlzdENvbXB0ZXM6IENvbXB0ZUJhbmNhaXJlW10gPSBbXTtcblxuICBham91dGVyKGNvbXB0ZTogQ29tcHRlQmFuY2FpcmUpIHtcbiAgICB0aGlzLl9saXN0Q29tcHRlcy5wdXNoKGNvbXB0ZSk7XG4gIH1cblxuICBnZXRDb21wdGVzKCk6IENvbXB0ZUJhbmNhaXJlW10ge1xuICAgIHJldHVybiB0aGlzLl9saXN0Q29tcHRlcztcbiAgfVxufVxuIiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgVHlwZUNvbXB0ZSB9IGZyb20gJy4vZW51bXMnO1xuXG5hYnN0cmFjdCBjbGFzcyBDb21wdGVCYW5jYWlyZSB7XG4gIHByaXZhdGUgX3NvbGRlOiBudW1iZXI7XG4gIGlkOiBudW1iZXI7XG4gIHB1YmxpYyBjbGllbnQ6IHN0cmluZztcblxuICBhYnN0cmFjdCB0eXBlQ29tcHRlOiBUeXBlQ29tcHRlO1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRyZXNDb21wdGU6IGFueSkge1xuICAgIHRoaXMuaWQgPSBwYXJhbWV0cmVzQ29tcHRlLmlkO1xuICAgIHRoaXMuY2xpZW50ID0gcGFyYW1ldHJlc0NvbXB0ZS5jbGllbnQ7XG4gICAgdGhpcy5fc29sZGUgPSBwYXJhbWV0cmVzQ29tcHRlLnNvbGRlO1xuICB9XG5cbiAgZ2V0IHNvbGRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvbGRlO1xuICB9XG5cbiAgc2V0IHNvbGRlKHZhbGV1cikge1xuICAgIGlmICh2YWxldXIgPj0gMCkge1xuICAgICAgdGhpcy5fc29sZGUgPSB2YWxldXI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKCdTb2xkZSBuZSBwYXMgZXRyZSBuZWdhdGlmJyk7XG4gICAgfVxuICB9XG5cbiAgY3JlZGl0ZXIoc29tbWU6IG51bWJlcikge1xuICAgIHRoaXMuc29sZGUgKz0gc29tbWU7XG4gIH1cblxuICBkZWJpdGVyKHNvbW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLnNvbGRlIC09IHNvbW1lO1xuICB9XG5cbiAgaW5mb0NvbXB0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHRlQmFuY2FpcmU7XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgQ29tcHRlQmFuY2FpcmUgZnJvbSAnLi9jb21wdGUtYmFuY2FpcmUnO1xuaW1wb3J0IHsgVHlwZUNvbXB0ZSB9IGZyb20gJy4vZW51bXMnO1xuXG5jbGFzcyBDb21wdGVDb3VyYW50IGV4dGVuZHMgQ29tcHRlQmFuY2FpcmUge1xuICB0eXBlQ29tcHRlID0gVHlwZUNvbXB0ZS5Db3VyYW50O1xuXG4gIGNvbnN0cnVjdG9yKHBhcmFtZXRyZXNDb21wdGU6IGFueSkge1xuICAgIHN1cGVyKHBhcmFtZXRyZXNDb21wdGUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXB0ZUNvdXJhbnQ7XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5pbXBvcnQgQ29tcHRlQmFuY2FpcmUgZnJvbSAnLi9jb21wdGUtYmFuY2FpcmUnO1xuaW1wb3J0IHsgVHlwZUNvbXB0ZSB9IGZyb20gJy4vZW51bXMnO1xuXG5jbGFzcyBDb21wdGVFcGFyZ25lIGV4dGVuZHMgQ29tcHRlQmFuY2FpcmUge1xuICBwdWJsaWMgdGF1eEludGVyZXN0OiBudW1iZXI7XG4gIHR5cGVDb21wdGUgPSBUeXBlQ29tcHRlLkVwYXJnbmU7XG5cbiAgY29uc3RydWN0b3IocGFyYW1ldHJlc0NvbXB0ZTogYW55KSB7XG4gICAgc3VwZXIocGFyYW1ldHJlc0NvbXB0ZSk7XG4gICAgdGhpcy50YXV4SW50ZXJlc3QgPSBwYXJhbWV0cmVzQ29tcHRlLnRhdXhJbnRlcmVzdDtcbiAgfVxuXG4gIGNyZWRpdGVyKHNvbW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgbnZNb250YW50ID0gc29tbWUgKyBzb21tZSAqICh0aGlzLnRhdXhJbnRlcmVzdCAvIDEwMCk7XG4gICAgdGhpcy5zb2xkZSArPSBudk1vbnRhbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHRlRXBhcmduZTtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmV4cG9ydCBlbnVtIFR5cGVDb21wdGUge1xuICBDb3VyYW50LFxuICBFcGFyZ25lLFxuICBBc3N1cmFuY2VzLFxufVxuIiwiLyoqIEBmb3JtYXQgKi9cblxuZXhwb3J0IGNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9XG4gICAgICAnPGgyPkJpZW52ZW51IGEgVUJBIEJBTkshPC9oMj48YnIgLz48aDU+Vm90cmUgQ29tcHRlOjwvaDU+PGJyIC8+JztcbiAgfVxuXG4gIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cblxuICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gO1xuICB9XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCB7IExpc3RDb21wdGVzIH0gZnJvbSAnLi9zY3JpcHRzL0FjY291bnRMaXN0cyc7XG5pbXBvcnQgQ29tcHRlQ291cmFudCBmcm9tICcuL3NjcmlwdHMvY29tcHRlLWNvdXJhbnQnO1xuaW1wb3J0IENvbXB0ZUVwYXJnbmUgZnJvbSAnLi9zY3JpcHRzL2NvbXB0ZS1lcGFyZ25lJztcbmltcG9ydCBDb21wdGVCYW5jYWlyZSBmcm9tICcuL3NjcmlwdHMvY29tcHRlLWJhbmNhaXJlJztcbmltcG9ydCB7IFR5cGVDb21wdGUgfSBmcm9tICcuL3NjcmlwdHMvZW51bXMnO1xuaW1wb3J0IHsgUmVuZGVyZXIgfSBmcm9tICcuL3NjcmlwdHMvcmVuZGVyZXInO1xuY2xhc3MgTWFpbiB7XG4gIHB1YmxpYyBjb21wdGVDb3VyYW50OiBDb21wdGVDb3VyYW50O1xuICBwdWJsaWMgY29tcHRlRXBhcmduZTogQ29tcHRlRXBhcmduZTtcbiAgcHVibGljIGNvbXB0ZUFjdHVlbDogQ29tcHRlQmFuY2FpcmU7XG5cbiAgLy8gMSAtIGNyZWF0aW9uIGRlcyBjb21wdGVzIGJhbmNhaXJlc1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcikge1xuICAgIHRoaXMuY29tcHRlQ291cmFudCA9IG5ldyBDb21wdGVDb3VyYW50KHtcbiAgICAgIGlkOiAxLFxuICAgICAgY2xpZW50OiAnSm9zZSBCYWxsYScsXG4gICAgICBzb2xkZTogMTAwMDAsXG4gICAgfSk7XG5cbiAgICB0aGlzLmNvbXB0ZUVwYXJnbmUgPSBuZXcgQ29tcHRlRXBhcmduZSh7XG4gICAgICBpZDogMTAwLFxuICAgICAgY2xpZW50OiAnSm9zZSBCYWxsYScsXG4gICAgICBzb2xkZTogMTUwMDAsXG4gICAgICB0YXV4SW50ZXJlc3Q6IDIuNSxcbiAgICB9KTtcblxuICAgIGxldCBodG1sID0gdGhpcy5hZmZpY2hlQ29tcHRlcygpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5yZW5kZXIoXG4gICAgICAnPGgyPkJpZW52ZW51IGEgbGEgYmFucXVlITwvaDI+PGJyIC8+PGg1PlZvdHJlIENvbXB0ZTo8L2g1PjxiciAvPicgKyBodG1sXG4gICAgKTtcbiAgfVxuXG4gIGFmZmljaGVDb21wdGVzKCkge1xuICAgIGxldCBhY2N0c0h0bWw6IHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGFjY0xpc3QgPSBuZXcgTGlzdENvbXB0ZXMoKTtcbiAgICBhY2NMaXN0LmFqb3V0ZXIodGhpcy5jb21wdGVDb3VyYW50KTtcbiAgICBhY2NMaXN0LmFqb3V0ZXIodGhpcy5jb21wdGVFcGFyZ25lKTtcblxuICAgIGFjY0xpc3QuZ2V0Q29tcHRlcygpLmZvckVhY2goKGFjY3QsIGluZGV4KSA9PiB7XG4gICAgICBhY2N0c0h0bWwgKz0gYWNjdC5jbGllbnQgKyAnPGJyIC8+JztcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjdHNIdG1sO1xuICB9XG5cbiAgYWZmaWNoZUNvbXB0ZShjb21wdGU6IENvbXB0ZUJhbmNhaXJlKSB7XG4gICAgY29uc29sZS5sb2coY29tcHRlKTtcbiAgICBjb25zdCB0eXBlQ29tcHRlID0gVHlwZUNvbXB0ZVtjb21wdGUudHlwZUNvbXB0ZV07XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgIDxoMj48L2gyPlxuICAgICAgPGgzPkNvbXB0ZSAke3R5cGVDb21wdGV9PC9oMz5cbiAgICAgIDxiciAvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPkNsaWVudDo8L3NwYW4+ICR7Y29tcHRlLmNsaWVudH1cbiAgICAgIDxiciAvPlxuICAgICAgPHNwYW4gY2xhc3M9XCJsYWJlbFwiPlNvbGRlOjwvc3Bhbj4gJHtjb21wdGUuc29sZGUudG9GaXhlZCgyKX1cbiAgICAgIEZDRkEgPGJyIC8+PGJyIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNvbW1lRGVwb3RSZXRyYWl0XCIgLz4mbmJzcDsmbmJzcDtcbiAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJFdERlYml0ZXIodHJ1ZSlcIj5DcmVkaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckV0RGViaXRlcihmYWxzZSlcIj5EZWJpdGVyPC9idXR0b24+Jm5ic3A7XG4gICAgICBgO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG4gIC8vIDMgLSBDcmVkaXRlciBldCBEZWJpdGVyIGxlcyBjb21wdGVzIGJhbmNhaXJlc1xuICBjcmVkaXRlckV0RGViaXRlcihkZXBvdDogYm9vbGVhbikge1xuICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb21tZURlcG90UmV0cmFpdCcpO1xuICAgIGxldCBpbnB1dFZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUpO1xuICAgIGxldCBlcnJvcjtcblxuICAgIHRyeSB7XG4gICAgICBpZiAoZGVwb3QpIHtcbiAgICAgICAgdGhpcy5jb21wdGVBY3R1ZWwuY3JlZGl0ZXIoaW5wdXRWYWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXB0ZUFjdHVlbC5kZWJpdGVyKGlucHV0VmFsdWUpO1xuICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG4gICAgdGhpcy5hZmZpY2hlQ29tcHRlKHRoaXMuY29tcHRlQWN0dWVsKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgdGhpcy5yZW5kZXJlci5yZW5kZXJFcnJvcihlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VWaWV3KHZpZXc/OiBzdHJpbmcpIHtcbiAgICBzd2l0Y2ggKHZpZXcpIHtcbiAgICAgIGNhc2UgJ2NvdXJhbnQnOlxuICAgICAgICB0aGlzLmNvbXB0ZUFjdHVlbCA9IHRoaXMuY29tcHRlQ291cmFudDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlcGFyZ25lJzpcbiAgICAgICAgdGhpcy5jb21wdGVBY3R1ZWwgPSB0aGlzLmNvbXB0ZUVwYXJnbmU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICB0aGlzLmFmZmljaGVDb21wdGUodGhpcy5jb21wdGVBY3R1ZWwpO1xuICB9XG59XG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBUZW1wbGF0ZScpKTtcbmNvbnN0IG1haW4gPSBuZXcgTWFpbihyZW5kZXJlcik7XG5cbig8YW55PndpbmRvdykubWFpbiA9IG1haW47XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=