/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 tableaux passés en paramètres
 * 
 * ex: [1, 2, 3], [4, 5, 6] => [1, 2, 3, 4, 5, 6]
 * 
 * contrainte: 
 *  - ne pas utiliser la méthode concat, map, merge, push
 *  - for, foreach, while, do while sont interdits
 */

const concat = (arr1, arr2) => {
    return [...arr1,...arr2];
}

/**
 * utiliser l'opérateur de composition ... afin d'ajouter un élément à un tableau
 * 
 * ex: [1, 2, 3], 4 => [1, 2, 3, 4]
 * 
 * contrainte:
 * - ne pas utiliser la méthode push
 */

const push = (arr, item) => {
    return [...arr,item]
}

/**
 * utiliser l'opérateur de composition ... afin de fusionner 2 objets passés en paramètres
 * 
 * ex: {a: 1, b: 2}, {c: 3, d: 4} => {a: 1, b: 2, c: 3, d: 4}
 */

const merge = (obj1, obj2) => {
    return {...obj1,...obj2}
}

/**
 * utiliser l'opérateur de composition ... afin de modifier la propriété name de l'objet
 * 
 * ex: {name: 'toto'}, 'titi' => {name: 'titi'}
 * 
 * contrainte:
 *  - interdiction d'utiliser l'opérateur d'affectation "="
 */

const setName = (obj, name) => {
    return {...obj,name};
}


/* 1 */
let result = concat([1,2,3],[5,6,7])
console.log(result);
console.log(concat([],[]));

/* 2 */
console.log(push([1,2,3],4));
console.log(push([],4));

/* 3 */
console.log(merge({a: 1, b: 2}, {c: 3, d: 4}));

/* 4 */
console.log(setName({name: 'aurelien', msg:"hello"},'thomas'))

// astuce: {...obj} crée une copie de l'objet, c'est un des principes de l'immutabilité et évite les problèmes de référence
module.exports = {concat, push, merge, setName}