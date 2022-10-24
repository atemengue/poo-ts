/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/scripts/compte-courant.ts":
/*!***************************************!*\
  !*** ./src/scripts/compte-courant.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @format */
var CompteCourant = /** @class */ (function () {
    // constructeur avec des propriets
    function CompteCourant(nomClient) {
        // proprietes
        this._solde = 0;
        this.nomClient = nomClient;
    }
    Object.defineProperty(CompteCourant.prototype, "solde", {
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
    // methodes
    CompteCourant.prototype.debiter = function (somme) {
        if (somme < this._solde) {
            this._solde -= somme;
        }
        else {
            throw Error('la solde debiteur est inferieur');
        }
    };
    CompteCourant.prototype.crediter = function (somme) {
        this._solde += somme;
    };
    return CompteCourant;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CompteCourant);


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
/* harmony import */ var _scripts_compte_courant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/compte-courant */ "./src/scripts/compte-courant.ts");
/* harmony import */ var _scripts_renderer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/renderer */ "./src/scripts/renderer.ts");
/** @format */


// creation d'une instance d' un compte
var Main = /** @class */ (function () {
    // constructeur
    function Main() {
        this.compteCourant = new _scripts_compte_courant__WEBPACK_IMPORTED_MODULE_0__["default"]('Antoine Junoir');
        this.afficheCompte();
    }
    // Affiche les comptes
    Main.prototype.afficheCompte = function () {
        var html = (document.querySelector('#appTemplate').innerHTML = "\n    <h2> Bienvenu UBA Bank!</h2><br /><h5>Le solde de votre compte:</h5><br />\n      Nom du client 1: ".concat(this.compteCourant.nomClient, "\n      <br />\n      Solde du client: ").concat(this.compteCourant.solde.toFixed(2), "\n\n      <br /><br />\n      \n      <input type=\"text\" id=\"creditEtDebit\" />&nbsp;&nbsp;\n      <button onclick=\"main.crediterDebiter(true)\">Crediter</button>&nbsp;\n      <button onclick=\"main.crediterDebiter(false)\">Debiter</button>&nbsp;\n      \n\n    "));
        _scripts_renderer__WEBPACK_IMPORTED_MODULE_1__["default"].render(html);
    };
    // debiter et crediter des comptes
    Main.prototype.crediterDebiter = function (credit) {
        var input = document.querySelector('#creditEtDebit');
        var valeurInput = parseInt(input.value);
        if (credit) {
            this.compteCourant.crediter(valeurInput);
        }
        else {
            this.compteCourant.debiter(valeurInput);
        }
        this.afficheCompte();
    };
    return Main;
}());
_scripts_renderer__WEBPACK_IMPORTED_MODULE_1__["default"].appTemplate = document.querySelector('#appTemplate');
var main = new Main();
// exposer l'API du main dans la page web
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUVkO0lBTUUsa0NBQWtDO0lBQ2xDLHVCQUFZLFNBQWlCO1FBTjdCLGFBQWE7UUFDTCxXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBTXpCLElBQUksQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzdCLENBQUM7SUFHRCxzQkFBVyxnQ0FBSztRQURoQixxQkFBcUI7YUFDckI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQWlCLE1BQWM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BSkE7SUFLRCxXQUFXO0lBRVgsK0JBQU8sR0FBUCxVQUFRLEtBQWE7UUFDbkIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN2QixJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztTQUN0QjthQUFNO1lBQ0wsTUFBTSxLQUFLLENBQUMsaUNBQWlDLENBQUMsQ0FBQztTQUNoRDtJQUNILENBQUM7SUFDRCxnQ0FBUSxHQUFSLFVBQVMsS0FBYTtRQUNwQixJQUFJLENBQUMsTUFBTSxJQUFJLEtBQUssQ0FBQztJQUN2QixDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDO0FBRUQsaUVBQWUsYUFBYSxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7QUNuQzdCLGNBQWM7QUFFZDtJQUFBO0lBb0JBLENBQUM7SUFMUSxlQUFNLEdBQWIsVUFBYyxJQUFZO1FBQ3hCLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBR0gsZUFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUN4QnhCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTkEsY0FBYztBQUN1QztBQUNYO0FBRTFDLHVDQUF1QztBQUV2QztJQUlFLGVBQWU7SUFDZjtRQUNFLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSwrREFBYSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsNEJBQWEsR0FBYjtRQUNFLElBQU0sSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEdBQUcsbUhBRTVDLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxvREFFNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQywrUUFTdkQsQ0FBQyxDQUFDO1FBRUgsZ0VBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0Qsa0NBQWtDO0lBRWxDLDhCQUFlLEdBQWYsVUFBZ0IsTUFBZTtRQUM3QixJQUFNLEtBQUssR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3pFLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUMsSUFBSSxNQUFNLEVBQUU7WUFDVixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUMxQzthQUFNO1lBQ0wsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDO0FBRUQscUVBQW9CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM5RCxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBRXhCLHlDQUF5QztBQUNuQyxNQUFPLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL3NjcmlwdHMvY29tcHRlLWNvdXJhbnQudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuY2xhc3MgQ29tcHRlQ291cmFudCB7XG4gIC8vIHByb3ByaWV0ZXNcbiAgcHJpdmF0ZSBfc29sZGU6IG51bWJlciA9IDA7XG5cbiAgcHVibGljIG5vbUNsaWVudDogc3RyaW5nO1xuXG4gIC8vIGNvbnN0cnVjdGV1ciBhdmVjIGRlcyBwcm9wcmlldHNcbiAgY29uc3RydWN0b3Iobm9tQ2xpZW50OiBzdHJpbmcpIHtcbiAgICB0aGlzLm5vbUNsaWVudCA9IG5vbUNsaWVudDtcbiAgfVxuXG4gIC8vIGdldHRlcnMgZXQgc2V0dGVyc1xuICBwdWJsaWMgZ2V0IHNvbGRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvbGRlO1xuICB9XG5cbiAgcHVibGljIHNldCBzb2xkZSh2YWxldXI6IG51bWJlcikge1xuICAgIHRoaXMuX3NvbGRlID0gdmFsZXVyO1xuICB9XG4gIC8vIG1ldGhvZGVzXG5cbiAgZGViaXRlcihzb21tZTogbnVtYmVyKSB7XG4gICAgaWYgKHNvbW1lIDwgdGhpcy5fc29sZGUpIHtcbiAgICAgIHRoaXMuX3NvbGRlIC09IHNvbW1lO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBFcnJvcignbGEgc29sZGUgZGViaXRldXIgZXN0IGluZmVyaWV1cicpO1xuICAgIH1cbiAgfVxuICBjcmVkaXRlcihzb21tZTogbnVtYmVyKSB7XG4gICAgdGhpcy5fc29sZGUgKz0gc29tbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHRlQ291cmFudDtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgLy8gY29uc3RydWN0b3IocHJpdmF0ZSBhcHBUZW1wbGF0ZTogSFRNTERpdkVsZW1lbnQpIHtcbiAgLy8gICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9XG4gIC8vICAgICAnPGgyPkJpZW52ZW51IGEgVUJBITwvaDI+PGJyIC8+PGg1PlZvcyBDb21wdGVzOjwvaDU+PGJyIC8+JztcbiAgLy8gfVxuXG4gIC8vIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgLy8gICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gIC8vIH1cblxuICAvLyByZW5kZXJFcnJvcihtZXNzYWdlOiBzdHJpbmcpIHtcbiAgLy8gICB0aGlzLmFwcFRlbXBsYXRlLmlubmVySFRNTCArPSBgPGJyIC8+PGJyIC8+PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhbmdlclwiPiR7bWVzc2FnZX08L2Rpdj5gO1xuXG4gIHN0YXRpYyBhcHBUZW1wbGF0ZTogSFRNTEVsZW1lbnQ7XG5cbiAgc3RhdGljIHJlbmRlcihodG1sOiBzdHJpbmcpIHtcbiAgICBSZW5kZXJlci5hcHBUZW1wbGF0ZS5pbm5lckhUTUwgPSBodG1sO1xuICB9XG5cbiAgLy8gfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZW5kZXJlcjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqIEBmb3JtYXQgKi9cbmltcG9ydCBDb21wdGVDb3VyYW50IGZyb20gJy4vc2NyaXB0cy9jb21wdGUtY291cmFudCc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9zY3JpcHRzL3JlbmRlcmVyJztcblxuLy8gY3JlYXRpb24gZCd1bmUgaW5zdGFuY2UgZCcgdW4gY29tcHRlXG5cbmNsYXNzIE1haW4ge1xuICAvLyBwcm9wcmlldGVzIGRlIGxhIGNsYXNzZVxuICBwdWJsaWMgY29tcHRlQ291cmFudDogQ29tcHRlQ291cmFudDtcblxuICAvLyBjb25zdHJ1Y3RldXJcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb21wdGVDb3VyYW50ID0gbmV3IENvbXB0ZUNvdXJhbnQoJ0FudG9pbmUgSnVub2lyJyk7XG4gICAgdGhpcy5hZmZpY2hlQ29tcHRlKCk7XG4gIH1cblxuICAvLyBBZmZpY2hlIGxlcyBjb21wdGVzXG4gIGFmZmljaGVDb21wdGUoKSB7XG4gICAgY29uc3QgaHRtbCA9IChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwVGVtcGxhdGUnKS5pbm5lckhUTUwgPSBgXG4gICAgPGgyPiBCaWVudmVudSBVQkEgQmFuayE8L2gyPjxiciAvPjxoNT5MZSBzb2xkZSBkZSB2b3RyZSBjb21wdGU6PC9oNT48YnIgLz5cbiAgICAgIE5vbSBkdSBjbGllbnQgMTogJHt0aGlzLmNvbXB0ZUNvdXJhbnQubm9tQ2xpZW50fVxuICAgICAgPGJyIC8+XG4gICAgICBTb2xkZSBkdSBjbGllbnQ6ICR7dGhpcy5jb21wdGVDb3VyYW50LnNvbGRlLnRvRml4ZWQoMil9XG5cbiAgICAgIDxiciAvPjxiciAvPlxuICAgICAgXG4gICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cImNyZWRpdEV0RGViaXRcIiAvPiZuYnNwOyZuYnNwO1xuICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckRlYml0ZXIodHJ1ZSlcIj5DcmVkaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckRlYml0ZXIoZmFsc2UpXCI+RGViaXRlcjwvYnV0dG9uPiZuYnNwO1xuICAgICAgXG5cbiAgICBgKTtcblxuICAgIFJlbmRlcmVyLnJlbmRlcihodG1sKTtcbiAgfVxuICAvLyBkZWJpdGVyIGV0IGNyZWRpdGVyIGRlcyBjb21wdGVzXG5cbiAgY3JlZGl0ZXJEZWJpdGVyKGNyZWRpdDogYm9vbGVhbikge1xuICAgIGNvbnN0IGlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NyZWRpdEV0RGViaXQnKTtcbiAgICBjb25zdCB2YWxldXJJbnB1dCA9IHBhcnNlSW50KGlucHV0LnZhbHVlKTtcblxuICAgIGlmIChjcmVkaXQpIHtcbiAgICAgIHRoaXMuY29tcHRlQ291cmFudC5jcmVkaXRlcih2YWxldXJJbnB1dCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcHRlQ291cmFudC5kZWJpdGVyKHZhbGV1cklucHV0KTtcbiAgICB9XG5cbiAgICB0aGlzLmFmZmljaGVDb21wdGUoKTtcbiAgfVxufVxuXG5SZW5kZXJlci5hcHBUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBUZW1wbGF0ZScpO1xuY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XG5cbi8vIGV4cG9zZXIgbCdBUEkgZHUgbWFpbiBkYW5zIGxhIHBhZ2Ugd2ViXG4oPGFueT53aW5kb3cpLm1haW4gPSBtYWluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9