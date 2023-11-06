
/**
 * Utiliser la fonction .map sur le tableau passé en paramètre
 * pour retourner un nouveau tableau avec les valeurs multipliées par 2
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable
 * 
  */

const multiplyByTwo = array => (array.map(item => item *2));


/**
 * Utiliser la fonction .filter sur le tableau passé en paramètre
 * retourne un nouveau tableau avec uniquement les nom qui commencent par la lettre "A"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const filterNameStartByA = array => (array.filter((value) => (value.charAt(0) === "A")));

/**
 * Utiliser la fonction .reduce sur le tableau passé en paramètre
 * retourne la somme des valeurs du tableau
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const sum = array => array.reduce((acc,value) => acc + value,0);

/**
 * Utiliser la fonction .find sur le tableau passé en paramètre
 * retourne l'utilisateur qui a l'id passé en 2e paramètre
 * 
 * exemple d'entrée:
 * [
 *  {id: 1, name: 'John'},
 *  {id: 2, name: 'Doe'},
 *  {id: 3, name: 'Foo'},
 *  {id: 4, name: 'Bar'},
 * ], 3
 * retour attendu: "Foo"
 * 
 * contraintes: 
 *   - Les mots clées for, while, do while sont interdits
 *   - les mots clées function et return sont interdits
 *   - Vous ne pouvez pas utiliser de variable (autre que l'argument de la fonction)
  */

const findUserById = (array, id) => array.find( item => item.id === id)?.name ?? null;

let result = multiplyByTwo([1,2,3,5]);
console.log(`multiplication du tableau par 2 : ${result}`)

let result2 = filterNameStartByA(['Aurelien',"Joe","Mick","Anthony"]);
console.log(result2);

let result3 = sum([12,8,8,20,2]);
console.log(result3);
console.log(sum([]));

const data = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Doe'},
    {id: 3, name: 'Foo'},
    {id: 4, name: 'Bar'},
];
let result4 = findUserById(data,3)
console.log(result4);
console.log(findUserById(data,6))

module.exports = {multiplyByTwo, filterNameStartByA, sum, findUserById};