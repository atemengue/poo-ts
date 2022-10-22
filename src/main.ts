/** @format */

// object literal
const objLiteral = {
  solde: 40000,
};

// creation d'un objet avec une classe
class ClassObject {
  solde = 1000;
}

const newObjet = new ClassObject();

function functionObject() {
  this.solde = 100000;
}

const functionObjt = new functionObject();

const a = Object.create(objLiteral);

const render = (function () {
  const total = objLiteral.solde + newObjet.solde + functionObjt.solde;
  document.querySelector('#appTemplate').innerHTML = `
  
  <h2> Bienvenu UBA Bank!</h2><br /><h5>Le solde de votre compte:</h5><br />
    Object Literal Object Solde: ${objLiteral.solde} FCFA
    <br />
    Class Object solde: ${newObjet.solde} FCFA
    <br />
    Function Constructor Object Solde: ${functionObjt.solde} FCFA
    <br />
    Object.create() Object solde: $${a.solde} FCFA
    <br /><br />
    <strong>Total:</strong> ${total} FCFA
  
  
  `;
})();
