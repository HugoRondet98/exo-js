
/**
 * utilisez la décomposition pour extraire la premiere et la 2e case du tableau
 * retournez les dans un nouveau tableau
 * 
 * exemple: [1, 2, 3] => [1, 2]
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte: 
 *  - interdiction d'utiliser [0] et [1]
 *  - interdiction d'utiliser slice ou splice
 */

const tab1 = [1, 2, 3];
const extractFirstTwo = (tab) => {
    const [first, second] = tab; 
    const newTab1 = [first, second];
    return newTab1;
};
console.log(extractFirstTwo(tab1));


/**
 * utilisez la décomposition pour extraire la premiere case du tableau et le reste du tableau
 * retournez uniquement le reste du tableau
 * 
 * exemple: [1, 2, 3] => [2, 3]
 */

const tab2 = [1, 2, 3];
const extractRest = (tab) => {
    const [first, ...rest] = tab;
    return rest;
}
console.log(extractRest(tab2));

/**
 * utilisez la décomposition pour extraire le champ "name" de l'objet passé en paramètre
 * retournez le champ "name"
 * 
 * exemple: {name: "toto", age: 42} => "toto"
 * 
 * astuce: vous pouvez utiliser la décomposition directement dans les arguments de la fonction
 * 
 * contrainte:
 * - interdiction d'utiliser l'opérateur "." pour accéder au champ "name"
 */

const obj1 = {name: "toto", age: 42};
const extractName = (obj) => {
    const {name} = obj;
    return name;
}
console.log(extractName(obj1));

/**
 * utilisez la décomposition pour retourner l'objet utilisateur sans le champ "password"
 * 
 * exemple: {name: "toto", password: "1234"}
 * 
 * contrainte: 
 *    - interdiction d'utiliser "delete"
 *    - interdiction d'utiliser l'opérateur "." pour accéder au champ "password"
 * 
 */

const obj2 = {firstname: "toto", lastname: "titi", age: 42, password: "1234"};
const removePassword = ({password, ...restObj}) => restObj;
console.log(removePassword(obj2));

// module.exports = {extractFirstTwo, extractRest, extractName, removePassword}
