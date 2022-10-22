/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/** @format */
// object literal
var objLiteral = {
    solde: 40000,
};
// creation d'un objet avec une classe
var ClassObject = /** @class */ (function () {
    function ClassObject() {
        this.solde = 1000;
    }
    return ClassObject;
}());
var newObjet = new ClassObject();
function functionObject() {
    this.solde = 100000;
}
var functionObjt = new functionObject();
var a = Object.create(objLiteral);
var render = (function () {
    var total = objLiteral.solde + newObjet.solde + functionObjt.solde;
    document.querySelector('#appTemplate').innerHTML = "\n  \n  <h2> Bienvenu UBA Bank!</h2><br /><h5>Le solde de votre compte:</h5><br />\n    Object Literal Object Solde: ".concat(objLiteral.solde, " FCFA\n    <br />\n    Class Object solde: ").concat(newObjet.solde, " FCFA\n    <br />\n    Function Constructor Object Solde: ").concat(functionObjt.solde, " FCFA\n    <br />\n    Object.create() Object solde: $").concat(a.solde, " FCFA\n    <br /><br />\n    <strong>Total:</strong> ").concat(total, " FCFA\n  \n  \n  ");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsY0FBYztBQUVkLGlCQUFpQjtBQUNqQixJQUFNLFVBQVUsR0FBRztJQUNqQixLQUFLLEVBQUUsS0FBSztDQUNiLENBQUM7QUFFRixzQ0FBc0M7QUFDdEM7SUFBQTtRQUNFLFVBQUssR0FBRyxJQUFJLENBQUM7SUFDZixDQUFDO0lBQUQsa0JBQUM7QUFBRCxDQUFDO0FBRUQsSUFBTSxRQUFRLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztBQUVuQyxTQUFTLGNBQWM7SUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxNQUFNLENBQUM7QUFDdEIsQ0FBQztBQUVELElBQU0sWUFBWSxHQUFHLElBQUksY0FBYyxFQUFFLENBQUM7QUFFMUMsSUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUVwQyxJQUFNLE1BQU0sR0FBRyxDQUFDO0lBQ2QsSUFBTSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxHQUFHLFlBQVksQ0FBQyxLQUFLLENBQUM7SUFDckUsUUFBUSxDQUFDLGFBQWEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLEdBQUcsK0hBR2xCLFVBQVUsQ0FBQyxLQUFLLHdEQUV6QixRQUFRLENBQUMsS0FBSyx1RUFFQyxZQUFZLENBQUMsS0FBSyxtRUFFdEIsQ0FBQyxDQUFDLEtBQUssa0VBRWQsS0FBSyxzQkFHaEMsQ0FBQztBQUNKLENBQUMsQ0FBQyxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9pbnRyby1wb28tdHlwZXNjcmlwdC8uL3NyYy9tYWluLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAZm9ybWF0ICovXG5cbi8vIG9iamVjdCBsaXRlcmFsXG5jb25zdCBvYmpMaXRlcmFsID0ge1xuICBzb2xkZTogNDAwMDAsXG59O1xuXG4vLyBjcmVhdGlvbiBkJ3VuIG9iamV0IGF2ZWMgdW5lIGNsYXNzZVxuY2xhc3MgQ2xhc3NPYmplY3Qge1xuICBzb2xkZSA9IDEwMDA7XG59XG5cbmNvbnN0IG5ld09iamV0ID0gbmV3IENsYXNzT2JqZWN0KCk7XG5cbmZ1bmN0aW9uIGZ1bmN0aW9uT2JqZWN0KCkge1xuICB0aGlzLnNvbGRlID0gMTAwMDAwO1xufVxuXG5jb25zdCBmdW5jdGlvbk9ianQgPSBuZXcgZnVuY3Rpb25PYmplY3QoKTtcblxuY29uc3QgYSA9IE9iamVjdC5jcmVhdGUob2JqTGl0ZXJhbCk7XG5cbmNvbnN0IHJlbmRlciA9IChmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IHRvdGFsID0gb2JqTGl0ZXJhbC5zb2xkZSArIG5ld09iamV0LnNvbGRlICsgZnVuY3Rpb25PYmp0LnNvbGRlO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYXBwVGVtcGxhdGUnKS5pbm5lckhUTUwgPSBgXG4gIFxuICA8aDI+IEJpZW52ZW51IFVCQSBCYW5rITwvaDI+PGJyIC8+PGg1PkxlIHNvbGRlIGRlIHZvdHJlIGNvbXB0ZTo8L2g1PjxiciAvPlxuICAgIE9iamVjdCBMaXRlcmFsIE9iamVjdCBTb2xkZTogJHtvYmpMaXRlcmFsLnNvbGRlfSBGQ0ZBXG4gICAgPGJyIC8+XG4gICAgQ2xhc3MgT2JqZWN0IHNvbGRlOiAke25ld09iamV0LnNvbGRlfSBGQ0ZBXG4gICAgPGJyIC8+XG4gICAgRnVuY3Rpb24gQ29uc3RydWN0b3IgT2JqZWN0IFNvbGRlOiAke2Z1bmN0aW9uT2JqdC5zb2xkZX0gRkNGQVxuICAgIDxiciAvPlxuICAgIE9iamVjdC5jcmVhdGUoKSBPYmplY3Qgc29sZGU6ICQke2Euc29sZGV9IEZDRkFcbiAgICA8YnIgLz48YnIgLz5cbiAgICA8c3Ryb25nPlRvdGFsOjwvc3Ryb25nPiAke3RvdGFsfSBGQ0ZBXG4gIFxuICBcbiAgYDtcbn0pKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=