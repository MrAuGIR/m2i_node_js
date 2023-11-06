const {sleep} = require("./10_promise.js");

/**
 * Créez une fonction synchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser .then
 * 
 * contrainte:
 *    - votre fonction doit être synchrone et ne pas retourner de Promise
 *    - ne pas utiliser async await
 * 
 */
const usingThen = (cb) => {
    sleep().then(res => {
        cb()
    });
}

/**
 * Créez une fonction asynchrone qui attend 2 seconde puis execute le callback passé en paramètre
 * vous pouvez utiliser la fonction sleep créé précedement: const {sleep} = require("../exercices/10_promise");
 * 
 * Vous devez utiliser await
 * 
 * contrainte:
 *   - votre fonction doit être asynchrone et retourner une Promise
 *   - ne pas utiliser .then
 */

const usingAwait = async (cb) => {
    await sleep()
    cb();
}

/**
 * Créez une fonction asynchrone qui effectue un appel api vers l'url passé en paramètre
 * retourne le résultat de la requête (body)
 * 
 * Vous pouvez utiliser axios, mais n'oubliez pas d'installer le package et de l'importer
 * npm install axios
 * 
 * votre réponse doit être un objet json
 * 
 * url de test: https://jsonplaceholder.typicode.com/todos/1
 */

//décommentez la ligne suivante une fois le package installé
//const axios = require("axios");

const apiResponse = async (url) => {
    const result = await fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json"
        }
    });
    if (result.ok === true) {
        const json =  await result.json();
        return json;
    }
    return null;
}


/* 1 */
usingThen(() => console.log("hello aurelien"))

/* 2 */
usingAwait(()=> console.log("hello aurelien 'avec await'"))

/* 3 */
apiResponse("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
    console.log(res);
    });

module.exports = {usingThen, usingAwait, apiResponse};

