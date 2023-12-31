
/**
 * utilisez l'opérateur de chaine ?. pour accéder au nom du groupe auquel appartient l'utilisateur
 * Attention, l'utilisateur peut ne pas avoir de groupe (null)
 * renvoi undefined si l'utilisateur n'a pas de groupe
 * 
 * exemple : 
 * {
 *  name: "John",
 *    group: {
 *      name: "admin"
 *    }
 *  }
 * 
 * doit renvoyer "admin"
 * 
 */

const getGroupName = (obj) => (obj?.group?.name)

let data = {
    name: "John",
    group: {
        name: "admin"
    }
}

let dataNoGroup = {
    name: "eric"
}

console.log(getGroupName(data));
console.log(getGroupName(dataNoGroup))

module.exports = {getGroupName};