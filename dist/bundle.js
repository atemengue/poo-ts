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
        _this.typeCompte = 'Epargne';
        return _this;
    }
    CompteCourant.prototype.infoCompte = function () {
        return {};
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
        _this.typeCompte = 'Epargne';
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

/***/ "./src/scripts/emuns.ts":
/*!******************************!*\
  !*** ./src/scripts/emuns.ts ***!
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
})(TypeCompte || (TypeCompte = {}));


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
/* harmony import */ var _scripts_emuns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/emuns */ "./src/scripts/emuns.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/** @format */





var Main = /** @class */ (function () {
    // creation compte actuel/ en cours de traitement;
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
        // ATM instanciaction de L'ATM
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
        var typeCompte = _scripts_emuns__WEBPACK_IMPORTED_MODULE_3__.TypeCompte[compte.typeCompte];
        var html = "\n      <h2></h2>\n      <h3>Compte ".concat(typeCompte, "</h3>\n      <br />\n      <image src=\"src/images/").concat(typeCompte, ".jpg\" heigt=\"150\">\n      <div>\n      <span class=\"label\">Client:</span> ").concat(compte.nomClient, "\n      <br />\n      <span class=\"label\">Solde:</span> ").concat(compte.solde.toFixed(2), "\n      FCFA \n      </div>\n      <br /><br />\n      <input type=\"text\" id=\"sommeDepotRetrait\" />&nbsp;&nbsp;\n      <button onclick=\"main.crediterEtDebiter(true)\">Crediter</button>&nbsp;\n      <button onclick=\"main.crediterEtDebiter(false)\">Debiter</button>&nbsp;\n      ");
        this.renderer.render(html);
    };
    // 3 - Crediter et Debiter les comptes bancaires
    Main.prototype.crediterEtDebiter = function (depot, atm) {
        var input = document.querySelector('#sommeDepotRetrait');
        var inputValue = parseInt(input.value);
        var error;
        // try {
        //   if (depot) {
        //     if (atm) {
        //       this.atm.crediter(inputValue);
        //     } else {
        //       this.compteActuel.crediter(inputValue);
        //     }
        //   } else {
        //     if (atm) {
        //       this.atm.debiter(inputValue);
        //     } else {
        //       this.compteActuel.debiter(inputValue);
        //     }
        //   }
        // } catch (e) {
        //   error = e;
        // }
        // atm ? this.afficheATM() : this.afficheCompte(this.compteActuel);
        // if (error) {
        //   this.renderer.renderError(error.message);
        // }
    };
    Main.prototype.afficheATM = function () {
        var html = "\n            <h3>ATM</h3>\n            <image src=\"src/images/atm.jpg\" height=\"150\">\n            <br /><br />\n            Votre compte Courant: ".concat(this.compteCourant.solde, " FCFA\n            <br /><br />\n            <input type=\"text\" id=\"sommeDepotRetrait\" /> FCFA &nbsp;&nbsp;\n            <button onclick=\"main.crediterEtDebiter(true, true)\">Crediter</button>&nbsp;\n            <button onclick=\"main.crediterEtDebiter(false, true)\">Debiter</button>&nbsp;\n        ");
        this.renderer.render(html);
    };
    return Main;
}());
var renderer = new _scripts_renderer__WEBPACK_IMPORTED_MODULE_4__["default"](document.querySelector('#appTemplate'));
var main = new Main(renderer);
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUssR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQzNFLElBQUksVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxLQUFLLENBQUM7UUFFVixRQUFRO1FBQ1IsaUJBQWlCO1FBQ2pCLGlCQUFpQjtRQUNqQix1Q0FBdUM7UUFDdkMsZUFBZTtRQUNmLGdEQUFnRDtRQUNoRCxRQUFRO1FBQ1IsYUFBYTtRQUNiLGlCQUFpQjtRQUNqQixzQ0FBc0M7UUFDdEMsZUFBZTtRQUNmLCtDQUErQztRQUMvQyxRQUFRO1FBQ1IsTUFBTTtRQUNOLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsSUFBSTtRQUVKLG1FQUFtRTtRQUVuRSxlQUFlO1FBQ2YsOENBQThDO1FBQzlDLElBQUk7SUFDTixDQUFDO0lBRUQseUJBQVUsR0FBVjtRQUNFLElBQU0sSUFBSSxHQUFHLGlLQUltQixJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssc1RBS25ELENBQUM7UUFDTixJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM3QixDQUFDO0lBaUJILFdBQUM7QUFBRCxDQUFDO0FBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSx5REFBUSxDQUFDLFFBQVEsQ0FBQyxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztBQUN0RSxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUUxQixNQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvTGlzdENvbXB0ZXMudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9jb21wdGUtYmFuY2FpcmUudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9jb21wdGUtY291cmFudC50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zY3JpcHRzL2NvbXB0ZS1lcGFyZ25lLnRzIiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvZW11bnMudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IENvbXB0ZUJhbmNhaXJlIGZyb20gJy4vY29tcHRlLWJhbmNhaXJlJztcblxuZXhwb3J0IGNsYXNzIExpc3RDb21wdGVzIHtcbiAgX2xpc3RDb21wdGVzOiBDb21wdGVCYW5jYWlyZVtdID0gW107XG5cbiAgYWpvdXRlcihjb21wdGU6IENvbXB0ZUJhbmNhaXJlKSB7XG4gICAgdGhpcy5fbGlzdENvbXB0ZXMucHVzaChjb21wdGUpO1xuICB9XG5cbiAgZ2V0Q29tcHRlcygpOiBDb21wdGVCYW5jYWlyZVtdIHtcbiAgICByZXR1cm4gdGhpcy5fbGlzdENvbXB0ZXM7XG4gIH1cbn1cbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCB7IFR5cGVDb21wdGUgfSBmcm9tICcuL2VtdW5zJztcblxuYWJzdHJhY3QgY2xhc3MgQ29tcHRlQmFuY2FpcmUge1xuICAvLyBwcm9wcmlldGVzXG4gIHByaXZhdGUgX3NvbGRlOiBudW1iZXIgPSAwO1xuICBwdWJsaWMgaWQ6IG51bWJlcjtcbiAgcHVibGljIG5vbUNsaWVudDogc3RyaW5nO1xuXG4gIGFic3RyYWN0IHR5cGVDb21wdGU6IHN0cmluZztcblxuICBwdWJsaWMgdGF1eEludGVyZXQ/OiBudW1iZXI7XG5cbiAgLy8gY29uc3RydWN0ZXVyIGF2ZWMgZGVzIHByb3ByaWV0c1xuICBjb25zdHJ1Y3RvcihwYXJhbWV0cmVzQ29tcHRlczogYW55KSB7XG4gICAgdGhpcy5pZCA9IHBhcmFtZXRyZXNDb21wdGVzLmlkO1xuICAgIHRoaXMuX3NvbGRlID0gcGFyYW1ldHJlc0NvbXB0ZXMuc29sZGU7XG4gICAgdGhpcy5ub21DbGllbnQgPSBwYXJhbWV0cmVzQ29tcHRlcy5ub21DbGllbnQ7XG4gICAgdGhpcy50YXV4SW50ZXJldCA9IHBhcmFtZXRyZXNDb21wdGVzLnRhdXhJbnRlcmV0O1xuICB9XG4gIC8vIGdldHRlcnMgZXQgc2V0dGVyc1xuICBwdWJsaWMgZ2V0IHNvbGRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvbGRlO1xuICB9XG5cbiAgcHVibGljIHNldCBzb2xkZSh2YWxldXI6IG51bWJlcikge1xuICAgIHRoaXMuX3NvbGRlID0gdmFsZXVyO1xuICB9XG4gIC8vIG1ldGhvZGVzXG4gIGFic3RyYWN0IGluZm9Db21wdGUoKTogdm9pZDtcblxuICBkZWJpdGVyKHNvbW1lOiBudW1iZXIpIHtcbiAgICBpZiAoc29tbWUgPCB0aGlzLl9zb2xkZSkge1xuICAgICAgdGhpcy5fc29sZGUgLT0gc29tbWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IEVycm9yKCdsYSBzb2xkZSBkZWJpdGV1ciBlc3QgaW5mZXJpZXVyJyk7XG4gICAgfVxuICB9XG4gIGNyZWRpdGVyKHNvbW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zb2xkZSArPSBzb21tZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb21wdGVCYW5jYWlyZTtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBDb21wdGVCYW5jYWlyZSBmcm9tICcuL2NvbXB0ZS1iYW5jYWlyZSc7XG5pbXBvcnQgeyBUeXBlQ29tcHRlIH0gZnJvbSAnLi9lbXVucyc7XG5cbmNsYXNzIENvbXB0ZUNvdXJhbnQgZXh0ZW5kcyBDb21wdGVCYW5jYWlyZSB7XG4gIHB1YmxpYyB0eXBlQ29tcHRlOiBzdHJpbmcgPSAnRXBhcmduZSc7XG5cbiAgaW5mb0NvbXB0ZSgpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHRlQ291cmFudDtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBDb21wdGVCYW5jYWlyZSBmcm9tICcuL2NvbXB0ZS1iYW5jYWlyZSc7XG5cbmNsYXNzIENvbXB0ZUVwYXJnbmUgZXh0ZW5kcyBDb21wdGVCYW5jYWlyZSB7XG4gIHB1YmxpYyB0YXV4SW50ZXJldDogbnVtYmVyO1xuXG4gIHR5cGVDb21wdGU6IHN0cmluZyA9ICdFcGFyZ25lJztcblxuICBjb25zdHJ1Y3RvcihwYXJhbWV0cmVzQ29tcHRlczogYW55KSB7XG4gICAgc3VwZXIocGFyYW1ldHJlc0NvbXB0ZXMpO1xuICAgIHRoaXMudGF1eEludGVyZXQgPSBwYXJhbWV0cmVzQ29tcHRlcy50YXV4SW50ZXJldDtcbiAgfVxuXG4gIGluZm9Db21wdGUoKTogdm9pZCB7fVxuXG4gIGNyZWRpdGVyKHNvbW1lOiBudW1iZXIpOiB2b2lkIHtcbiAgICBsZXQgbW9udGFudCA9IHNvbW1lICsgKHNvbW1lICogdGhpcy50YXV4SW50ZXJldCkgLyAxMDA7XG4gICAgdGhpcy5zb2xkZSArPSBtb250YW50O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbXB0ZUVwYXJnbmU7XG4iLCIvKiogQGZvcm1hdCAqL1xuXG5leHBvcnQgZW51bSBUeXBlQ29tcHRlIHtcbiAgQ291cmFudCxcbiAgRXBhcmduZSxcbn1cbiIsIi8qKiBAZm9ybWF0ICovXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBhcHBUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9XG4gICAgICAnPGgyPkJpZW52ZW51IGEgVUJBITwvaDI+PGJyIC8+PGg1PlZvcyBDb21wdGVzOjwvaDU+PGJyIC8+JztcbiAgfVxuXG4gIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cblxuICByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEBmb3JtYXQgKi9cblxuaW1wb3J0IHsgTGlzdENvbXB0ZXMgfSBmcm9tICcuL3NjcmlwdHMvTGlzdENvbXB0ZXMnO1xuaW1wb3J0IENvbXB0ZUNvdXJhbnQgZnJvbSAnLi9zY3JpcHRzL2NvbXB0ZS1jb3VyYW50JztcbmltcG9ydCBDb21wdGVFcGFyZ25lIGZyb20gJy4vc2NyaXB0cy9jb21wdGUtZXBhcmduZSc7XG5pbXBvcnQgQ29tcHRlQmFuY2FpcmUgZnJvbSAnLi9zY3JpcHRzL2NvbXB0ZS1iYW5jYWlyZSc7XG5pbXBvcnQgeyBUeXBlQ29tcHRlIH0gZnJvbSAnLi9zY3JpcHRzL2VtdW5zJztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3NjcmlwdHMvcmVuZGVyZXInO1xuY2xhc3MgTWFpbiB7XG4gIHB1YmxpYyBjb21wdGVDb3VyYW50OiBDb21wdGVDb3VyYW50O1xuICBwdWJsaWMgY29tcHRlRXBhcmduZTogQ29tcHRlRXBhcmduZTtcblxuICAvLyBjcmVhdGlvbiBjb21wdGUgYWN0dWVsLyBlbiBjb3VycyBkZSB0cmFpdGVtZW50O1xuXG4gIC8vIDEgLSBjcmVhdGlvbiBkZXMgY29tcHRlcyBiYW5jYWlyZXNcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIpIHtcbiAgICB0aGlzLmNvbXB0ZUNvdXJhbnQgPSBuZXcgQ29tcHRlQ291cmFudCh7XG4gICAgICBpZDogMSxcbiAgICAgIGNsaWVudDogJ0pvc2UgQmFsbGEnLFxuICAgICAgc29sZGU6IDEwMDAwLFxuICAgIH0pO1xuXG4gICAgdGhpcy5jb21wdGVFcGFyZ25lID0gbmV3IENvbXB0ZUVwYXJnbmUoe1xuICAgICAgaWQ6IDEwMCxcbiAgICAgIGNsaWVudDogJ0pvc2UgQmFsbGEnLFxuICAgICAgc29sZGU6IDE1MDAwLFxuICAgICAgdGF1eEludGVyZXQ6IDIuNSxcbiAgICB9KTtcblxuICAgIC8vIEFUTSBpbnN0YW5jaWFjdGlvbiBkZSBMJ0FUTVxuXG4gICAgbGV0IGh0bWwgPSB0aGlzLmFmZmljaGVDb21wdGVzKCk7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnJlbmRlcihcbiAgICAgICc8aDI+QmllbnZlbnUgYSBVQkEgQkFOSyE8L2gyPjxiciAvPjxoNT5Wb3MgQ29tcHRlczo8L2g1PjxiciAvPicgKyBodG1sXG4gICAgKTtcbiAgfVxuXG4gIGFmZmljaGVDb21wdGVzKCkge1xuICAgIGxldCBhY2N0c0h0bWw6IHN0cmluZyA9ICcnO1xuICAgIGNvbnN0IGFjY0xpc3QgPSBuZXcgTGlzdENvbXB0ZXMoKTtcbiAgICBhY2NMaXN0LmFqb3V0ZXIodGhpcy5jb21wdGVDb3VyYW50KTtcbiAgICBhY2NMaXN0LmFqb3V0ZXIodGhpcy5jb21wdGVFcGFyZ25lKTtcblxuICAgIGFjY0xpc3QuZ2V0Q29tcHRlcygpLmZvckVhY2goKGFjY3QsIGluZGV4KSA9PiB7XG4gICAgICBhY2N0c0h0bWwgKz0gYWNjdC5ub21DbGllbnQgKyAnPGJyIC8+JztcbiAgICB9KTtcbiAgICByZXR1cm4gYWNjdHNIdG1sO1xuICB9XG5cbiAgYWZmaWNoZUNvbXB0ZShjb21wdGU6IENvbXB0ZUJhbmNhaXJlKSB7XG4gICAgY29uc3QgdHlwZUNvbXB0ZSA9IFR5cGVDb21wdGVbY29tcHRlLnR5cGVDb21wdGVdO1xuICAgIGNvbnN0IGh0bWwgPSBgXG4gICAgICA8aDI+PC9oMj5cbiAgICAgIDxoMz5Db21wdGUgJHt0eXBlQ29tcHRlfTwvaDM+XG4gICAgICA8YnIgLz5cbiAgICAgIDxpbWFnZSBzcmM9XCJzcmMvaW1hZ2VzLyR7dHlwZUNvbXB0ZX0uanBnXCIgaGVpZ3Q9XCIxNTBcIj5cbiAgICAgIDxkaXY+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Q2xpZW50Ojwvc3Bhbj4gJHtjb21wdGUubm9tQ2xpZW50fVxuICAgICAgPGJyIC8+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+U29sZGU6PC9zcGFuPiAke2NvbXB0ZS5zb2xkZS50b0ZpeGVkKDIpfVxuICAgICAgRkNGQSBcbiAgICAgIDwvZGl2PlxuICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInNvbW1lRGVwb3RSZXRyYWl0XCIgLz4mbmJzcDsmbmJzcDtcbiAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJFdERlYml0ZXIodHJ1ZSlcIj5DcmVkaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckV0RGViaXRlcihmYWxzZSlcIj5EZWJpdGVyPC9idXR0b24+Jm5ic3A7XG4gICAgICBgO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG5cbiAgLy8gMyAtIENyZWRpdGVyIGV0IERlYml0ZXIgbGVzIGNvbXB0ZXMgYmFuY2FpcmVzXG4gIGNyZWRpdGVyRXREZWJpdGVyKGRlcG90OiBib29sZWFuLCBhdG0/OiBib29sZWFuKSB7XG4gICAgbGV0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NvbW1lRGVwb3RSZXRyYWl0Jyk7XG4gICAgbGV0IGlucHV0VmFsdWUgPSBwYXJzZUludChpbnB1dC52YWx1ZSk7XG4gICAgbGV0IGVycm9yO1xuXG4gICAgLy8gdHJ5IHtcbiAgICAvLyAgIGlmIChkZXBvdCkge1xuICAgIC8vICAgICBpZiAoYXRtKSB7XG4gICAgLy8gICAgICAgdGhpcy5hdG0uY3JlZGl0ZXIoaW5wdXRWYWx1ZSk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgdGhpcy5jb21wdGVBY3R1ZWwuY3JlZGl0ZXIoaW5wdXRWYWx1ZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH0gZWxzZSB7XG4gICAgLy8gICAgIGlmIChhdG0pIHtcbiAgICAvLyAgICAgICB0aGlzLmF0bS5kZWJpdGVyKGlucHV0VmFsdWUpO1xuICAgIC8vICAgICB9IGVsc2Uge1xuICAgIC8vICAgICAgIHRoaXMuY29tcHRlQWN0dWVsLmRlYml0ZXIoaW5wdXRWYWx1ZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9IGNhdGNoIChlKSB7XG4gICAgLy8gICBlcnJvciA9IGU7XG4gICAgLy8gfVxuXG4gICAgLy8gYXRtID8gdGhpcy5hZmZpY2hlQVRNKCkgOiB0aGlzLmFmZmljaGVDb21wdGUodGhpcy5jb21wdGVBY3R1ZWwpO1xuXG4gICAgLy8gaWYgKGVycm9yKSB7XG4gICAgLy8gICB0aGlzLnJlbmRlcmVyLnJlbmRlckVycm9yKGVycm9yLm1lc3NhZ2UpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGFmZmljaGVBVE0oKSB7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgICAgIDxoMz5BVE08L2gzPlxuICAgICAgICAgICAgPGltYWdlIHNyYz1cInNyYy9pbWFnZXMvYXRtLmpwZ1wiIGhlaWdodD1cIjE1MFwiPlxuICAgICAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgICAgICBWb3RyZSBjb21wdGUgQ291cmFudDogJHt0aGlzLmNvbXB0ZUNvdXJhbnQuc29sZGV9IEZDRkFcbiAgICAgICAgICAgIDxiciAvPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJzb21tZURlcG90UmV0cmFpdFwiIC8+IEZDRkEgJm5ic3A7Jm5ic3A7XG4gICAgICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmNyZWRpdGVyRXREZWJpdGVyKHRydWUsIHRydWUpXCI+Q3JlZGl0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJFdERlYml0ZXIoZmFsc2UsIHRydWUpXCI+RGViaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgICBgO1xuICAgIHRoaXMucmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG5cbiAgLy8gY2hhbmdlVmlldyh2aWV3Pzogc3RyaW5nKSB7XG4gIC8vICAgc3dpdGNoICh2aWV3KSB7XG4gIC8vICAgICBjYXNlICdjb3VyYW50JzpcbiAgLy8gICAgICAgdGhpcy5jb21wdGVBY3R1ZWwgPSB0aGlzLmNvbXB0ZUNvdXJhbnQ7XG4gIC8vICAgICAgIGJyZWFrO1xuICAvLyAgICAgY2FzZSAnZXBhcmduZSc6XG4gIC8vICAgICAgIHRoaXMuY29tcHRlQWN0dWVsID0gdGhpcy5jb21wdGVFcGFyZ25lO1xuICAvLyAgICAgICBicmVhaztcbiAgLy8gICAgIGNhc2UgJ2F0bSc6XG4gIC8vICAgICAgIHRoaXMuY29tcHRlQWN0dWVsID0gdGhpcy5jb21wdGVDb3VyYW50O1xuICAvLyAgICAgICB0aGlzLmFmZmljaGVBVE0oKTtcbiAgLy8gICAgICAgcmV0dXJuO1xuICAvLyAgIH1cbiAgLy8gICB0aGlzLmFmZmljaGVDb21wdGUodGhpcy5jb21wdGVBY3R1ZWwpO1xuICAvLyB9XG59XG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IFJlbmRlcmVyKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBUZW1wbGF0ZScpKTtcbmNvbnN0IG1haW4gPSBuZXcgTWFpbihyZW5kZXJlcik7XG5cbig8YW55PndpbmRvdykubWFpbiA9IG1haW47XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=