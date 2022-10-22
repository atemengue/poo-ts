/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles/scripts/checking-account.ts":
/*!************************************************!*\
  !*** ./src/styles/scripts/checking-account.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/** @format */
var CheckingAccount = /** @class */ (function () {
    function CheckingAccount(title) {
        this._solde = 0; //
        this.title = title;
    }
    Object.defineProperty(CheckingAccount.prototype, "solde", {
        get: function () {
            return this._solde;
        },
        set: function (somme) {
            this._solde = somme;
        },
        enumerable: false,
        configurable: true
    });
    CheckingAccount.prototype.crediter = function (somme) {
        this._solde += somme;
    };
    CheckingAccount.prototype.debiter = function (somme) {
        this._solde -= somme;
    };
    return CheckingAccount;
}());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsY0FBYztBQUVkO0lBSUUseUJBQVksS0FBYTtRQUhqQixXQUFNLEdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUk1QixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQVcsa0NBQUs7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzthQUVELFVBQVUsS0FBSztZQUNiLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLENBQUM7OztPQUpBO0lBTUQsa0NBQVEsR0FBUixVQUFTLEtBQWE7UUFDcEIsSUFBSSxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUM7SUFDdkIsQ0FBQztJQUVELGlDQUFPLEdBQVAsVUFBUSxLQUFhO1FBQ25CLElBQUksQ0FBQyxNQUFNLElBQUksS0FBSyxDQUFDO0lBQ3ZCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxlQUFlLEVBQUM7Ozs7Ozs7Ozs7Ozs7OztBQzNCL0IsY0FBYztBQUVkO0lBQ0U7SUFBdUIsQ0FBQztJQUlqQixlQUFNLEdBQWIsVUFBYyxJQUFZO1FBQ3hCLFFBQVEsQ0FBQyxXQUFXLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBQ0gsZUFBQztBQUFELENBQUM7QUFFRCxpRUFBZSxRQUFRLEVBQUM7Ozs7Ozs7VUNaeEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQSxjQUFjO0FBRWtEO0FBQ2Y7QUFFakQsT0FBTztBQUNQLDBCQUEwQjtBQUMxQiw2QkFBNkI7QUFFN0I7SUFFRSx1QkFBdUI7SUFDdkI7UUFDRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksd0VBQWUsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN2QixDQUFDO0lBRUQsd0NBQXdDO0lBQ3hDLDRCQUFhLEdBQWI7UUFDRSxJQUFNLElBQUksR0FBRywrSUFJNEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLDJFQUUzQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQ3BFLENBQUMsQ0FDRixvUkFLRixDQUFDO1FBQ0osdUVBQWUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBRUQsOEJBQWUsR0FBZixVQUFnQixPQUFnQjtRQUM5QixJQUFJLFdBQVcsR0FBcUIsUUFBUSxDQUFDLGFBQWEsQ0FDeEQsMEJBQTBCLENBQzNCLENBQUM7UUFDRixJQUFJLFdBQVcsR0FBRyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUM7UUFFckMsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztTQUM1QzthQUFNO1lBQ0wsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDLENBQUM7U0FDM0M7UUFDRCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUNILFdBQUM7QUFBRCxDQUFDO0FBRUQsNEVBQW9CLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQztBQUM5RCxJQUFNLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBRWxCLE1BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvLi9zcmMvc3R5bGVzL3NjcmlwdHMvY2hlY2tpbmctYWNjb3VudC50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9zdHlsZXMvc2NyaXB0cy9yZW5yZWRlci50cyIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vaW50cm8tcG9vLXR5cGVzY3JpcHQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2ludHJvLXBvby10eXBlc2NyaXB0Ly4vc3JjL21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBmb3JtYXQgKi9cblxuY2xhc3MgQ2hlY2tpbmdBY2NvdW50IHtcbiAgcHJpdmF0ZSBfc29sZGU6IG51bWJlciA9IDA7IC8vXG4gIHB1YmxpYyB0aXRsZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHRpdGxlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHNvbGRlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NvbGRlO1xuICB9XG5cbiAgc2V0IHNvbGRlKHNvbW1lKSB7XG4gICAgdGhpcy5fc29sZGUgPSBzb21tZTtcbiAgfVxuXG4gIGNyZWRpdGVyKHNvbW1lOiBudW1iZXIpIHtcbiAgICB0aGlzLl9zb2xkZSArPSBzb21tZTtcbiAgfVxuXG4gIGRlYml0ZXIoc29tbWU6IG51bWJlcikge1xuICAgIHRoaXMuX3NvbGRlIC09IHNvbW1lO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENoZWNraW5nQWNjb3VudDtcbiIsIi8qKiBAZm9ybWF0ICovXG5cbmNsYXNzIFJlbmRlcmVyIHtcbiAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XG5cbiAgc3RhdGljIGFwcFRlbXBsYXRlOiBIVE1MRGl2RWxlbWVudDtcblxuICBzdGF0aWMgcmVuZGVyKGh0bWw6IHN0cmluZykge1xuICAgIFJlbmRlcmVyLmFwcFRlbXBsYXRlLmlubmVySFRNTCA9IGh0bWw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUmVuZGVyZXI7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKiBAZm9ybWF0ICovXG5cbmltcG9ydCBDaGVja2luZ0FjY291bnQgZnJvbSAnLi9zdHlsZXMvc2NyaXB0cy9jaGVja2luZy1hY2NvdW50JztcbmltcG9ydCBSZW5kZXJlciBmcm9tICcuL3N0eWxlcy9zY3JpcHRzL3JlbnJlZGVyJztcblxuLy8gTWFpblxuLy8gMSAtIENyZWF0aW9uIGRlcyBjb21wdGVcbi8vIDIgLSBBZmZpY2hhZ2VzIGRlcyBjb21wdGVzXG5cbmNsYXNzIE1haW4ge1xuICBwdWJsaWMgY2hlY2tpbmdBY2NvdW50OiBDaGVja2luZ0FjY291bnQ7XG4gIC8vIGNyZWF0aW9uIGRlcyBjb21wdGVzXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50ID0gbmV3IENoZWNraW5nQWNjb3VudCgnSGVybWluZSBDbGF1ZGlhJyk7XG4gICAgdGhpcy5yZW5kZXJBY2NvdW50KCk7XG4gIH1cblxuICAvLyBhZmZpY2hhZ2VzIGRlcyBpbmZvcm1hdGlvbnMgZHUgY29tcHRlXG4gIHJlbmRlckFjY291bnQoKSB7XG4gICAgY29uc3QgaHRtbCA9IGBcbiAgICAgICAgPGgyPkJpZW52ZW51IFVCQSBCYW5rITwvaDI+XG4gICAgICAgIDxoMz5Db21wdGUgQ291cmFudDwvaDM+XG4gICAgICAgIDxiciAvPlxuICAgICAgICA8c3BhbiBjbGFzcz1cImxhYmVsXCI+Q2xpZW50Ojwvc3Bhbj4gJHt0aGlzLmNoZWNraW5nQWNjb3VudC50aXRsZX1cbiAgICAgICAgPGJyIC8+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj5Tb2xkZTo8L3NwYW4+ICR7dGhpcy5jaGVja2luZ0FjY291bnQuc29sZGUudG9GaXhlZChcbiAgICAgICAgICAyXG4gICAgICAgICl9IEZDRkFcbiAgICAgICAgPGJyIC8+PGJyIC8+XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwiZGVwb3NpdFdpdGhkcmF3YWxBbW91bnRcIiAvPiZuYnNwOyZuYnNwO1xuICAgICAgICA8YnV0dG9uIG9uY2xpY2s9XCJtYWluLmNyZWRpdGVyRGViaXRlcih0cnVlKVwiPkNyZWRpdGVyPC9idXR0b24+Jm5ic3A7XG4gICAgICAgIDxidXR0b24gb25jbGljaz1cIm1haW4uY3JlZGl0ZXJEZWJpdGVyKGZhbHNlKVwiPkRlYml0ZXI8L2J1dHRvbj4mbmJzcDtcbiAgICAgIGA7XG4gICAgUmVuZGVyZXIucmVuZGVyKGh0bWwpO1xuICB9XG5cbiAgY3JlZGl0ZXJEZWJpdGVyKGRlcG9zaXQ6IGJvb2xlYW4pIHtcbiAgICBsZXQgYW1vdW50SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgJyNkZXBvc2l0V2l0aGRyYXdhbEFtb3VudCdcbiAgICApO1xuICAgIGxldCBhbW91bnRWYWx1ZSA9ICthbW91bnRJbnB1dC52YWx1ZTtcblxuICAgIGlmIChkZXBvc2l0KSB7XG4gICAgICB0aGlzLmNoZWNraW5nQWNjb3VudC5jcmVkaXRlcihhbW91bnRWYWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2hlY2tpbmdBY2NvdW50LmRlYml0ZXIoYW1vdW50VmFsdWUpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlckFjY291bnQoKTtcbiAgfVxufVxuXG5SZW5kZXJlci5hcHBUZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhcHBUZW1wbGF0ZScpO1xuY29uc3QgbWFpbiA9IG5ldyBNYWluKCk7XG5cbig8YW55PndpbmRvdykubWFpbiA9IG1haW47XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=