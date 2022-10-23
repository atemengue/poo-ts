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
    function CompteCourant(client, solde) {
        this.client = client;
        this._solde = solde;
    }
    Object.defineProperty(CompteCourant.prototype, "solde", {
        get: function () {
            return this._solde;
        },
        set: function (valeur) {
            this._solde = valeur;
        },
        enumerable: false,
        configurable: true
    });
    CompteCourant.prototype.crediter = function (somme) {
        this.solde += somme;
    };
    CompteCourant.prototype.debiter = function (somme) {
        this.solde -= somme;
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


var Main = /** @class */ (function () {
    // 1 - creation des comptes bancaires
    function Main() {
        this.compteCourant = new _scripts_compte_courant__WEBPACK_IMPORTED_MODULE_0__["default"]('Jose Balla', 1000);
        this.afficheCompte();
    }
    // 2 - Affichages des comptes bancaires;
    Main.prototype.afficheCompte = function () {
        var html = "\n      <h2>Bienvenu UBA Bank!</h2>\n      <h3>Compte Courant</h3>\n      <br />\n      <span class=\"label\">Client:</span> ".concat(this.compteCourant.client, "\n      <br />\n      <span class=\"label\">Solde:</span> ").concat(this.compteCourant.solde.toFixed(2), "\n      FCFA <br /><br />\n      <input type=\"text\" id=\"sommeDepotRetrait\" />&nbsp;&nbsp;\n      <button onclick=\"main.crediterEtDebiter(true)\">Crediter</button>&nbsp;\n      <button onclick=\"main.crediterEtDebiter(false)\">Debiter</button>&nbsp;\n      ");
        _scripts_renderer__WEBPACK_IMPORTED_MODULE_1__["default"].render(html);
    };
    // 3 - Crediter et Debiter les comptes bancaires
    Main.prototype.crediterEtDebiter = function (depot) {
        var input = document.querySelector('#sommeDepotRetrait');
        var inputValue = parseInt(input.value);
        if (depot) {
            this.compteCourant.crediter(inputValue);
        }
        else {
            this.compteCourant.debiter(inputValue);
        }
        this.afficheCompte();
    };
    return Main;
}());
_scripts_renderer__WEBPACK_IMPORTED_MODULE_1__["default"].appTemplate = document.querySelector('#appTemplate');
var main = new Main();
window.main = main;

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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aXB0Ly4vc3JjL3NjcmlwdHMvY29tcHRlLWNvdXJhbnQudHMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc2NyaXB0cy9yZW5kZXJlci50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuY2xhc3MgQ29tcHRlQ291cmFudCB7XG4gIHByaXZhdGUgX3NvbGRlOiBudW1iZXI7XG4gIHB1YmxpYyBjbGllbnQ6IHN0cmluZztcblxuICBjb25zdHJ1Y3RvcihjbGllbnQ6IHN0cmluZywgc29sZGU6IG51bWJlcikge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuX3NvbGRlID0gc29sZGU7XG4gIH1cblxuICBnZXQgc29sZGUoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gdGhpcy5fc29sZGU7XG4gIH1cblxuICBzZXQgc29sZGUodmFsZXVyKSB7XG4gICAgdGhpcy5fc29sZGUgPSB2YWxldXI7XG4gIH1cblxuICBjcmVkaXRlcihzb21tZTogbnVtYmVyKSB7XG4gICAgdGhpcy5zb2xkZSArPSBzb21tZTtcbiAgfVxuXG4gIGRlYml0ZXIoc29tbWU6IG51bWJlcikge1xuICAgIHRoaXMuc29sZGUgLT0gc29tbWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ29tcHRlQ291cmFudDtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhdGljIGFwcFRlbXBsYXRlOiBIVE1MRGl2RWxlbWVudDtcblxuICBzdGF0aWMgcmVuZGVyKGh0bWw6IHN0cmluZykge1xuICAgIFJlbmRlcmVyLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBDb21wdGVDb3VyYW50IGZyb20gJy4vc2NyaXB0cy9jb21wdGUtY291cmFudCc7XG5pbXBvcnQgUmVuZGVyZXIgZnJvbSAnLi9zY3JpcHRzL3JlbmRlcmVyJztcblxuY2xhc3MgTWFpbiB7XG4gIHB1YmxpYyBjb21wdGVDb3VyYW50OiBDb21wdGVDb3VyYW50O1xuXG4gIC8vIDEgLSBjcmVhdGlvbiBkZXMgY29tcHRlcyBiYW5jYWlyZXNcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5jb21wdGVDb3VyYW50ID0gbmV3IENvbXB0ZUNvdXJhbnQoJ0pvc2UgQmFsbGEnLCAxMDAwKTtcbiAgICB0aGlzLmFmZmljaGVDb21wdGUoKTtcbiAgfVxuXG4gIC8vIDIgLSBBZmZpY2hhZ2VzIGRlcyBjb21wdGVzIGJhbmNhaXJlcztcbiAgYWZmaWNoZUNvbXB0ZSgpIHtcbiAgICBjb25zdCBodG1sID0gYFxuICAgICAgPGgyPkJpZW52ZW51IFVCQSBCYW5rITwvaDI+XG4gICAgICA8aDM+Q29tcHRlIENvdXJhbnQ8L2gzPlxuICAgICAgPGJyIC8+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Q2xpZW50Ojwvc3Bhbj4gJHt0aGlzLmNvbXB0ZUNvdXJhbnQuY2xpZW50fVxuICAgICAgPGJyIC8+XG4gICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+U29sZGU6PC9zcGFuPiAke3RoaXMuY29tcHRlQ291cmFudC5zb2xkZS50b0ZpeGVkKDIpfVxuICAgICAgRkNGQSA8YnIgLz48YnIgLz5cbiAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic29tbWVEZXBvdFJldHJhaXRcIiAvPiZuYnNwOyZuYnNwO1xuICAgICAgPGJ1dHRvbiBvbmNsaWNrPVwibWFpbi5jcmVkaXRlckV0RGViaXRlcih0cnVlKVwiPkNyZWRpdGVyPC9idXR0b24+Jm5ic3A7XG4gICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmNyZWRpdGVyRXREZWJpdGVyKGZhbHNlKVwiPkRlYml0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgIGA7XG4gICAgUmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG4gIC8vIDMgLSBDcmVkaXRlciBldCBEZWJpdGVyIGxlcyBjb21wdGVzIGJhbmNhaXJlc1xuICBjcmVkaXRlckV0RGViaXRlcihkZXBvdDogYm9vbGVhbikge1xuICAgIGxldCBpbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzb21tZURlcG90UmV0cmFpdCcpO1xuICAgIGxldCBpbnB1dFZhbHVlID0gcGFyc2VJbnQoaW5wdXQudmFsdWUpO1xuXG4gICAgaWYgKGRlcG90KSB7XG4gICAgICB0aGlzLmNvbXB0ZUNvdXJhbnQuY3JlZGl0ZXIoaW5wdXRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY29tcHRlQ291cmFudC5kZWJpdGVyKGlucHV0VmFsdWUpO1xuICAgIH1cblxuICAgIHRoaXMuYWZmaWNoZUNvbXB0ZSgpO1xuICB9XG59XG5cblJlbmRlcmVyLmFwcFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FwcFRlbXBsYXRlJyk7XG5cbmNvbnN0IG1haW4gPSBuZXcgTWFpbigpO1xuXG4oPGFueT53aW5kb3cpLm1haW4gPSBtYWluO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9