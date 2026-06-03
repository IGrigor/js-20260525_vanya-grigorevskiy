/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const arrPath = path.split('.')
    return function (obj) {
        let newObj = {...obj}
        for (let i = 0; i < arrPath.length; i++) {
            if (typeof newObj[arrPath[i]] === 'object' && newObj[arrPath[i]] !== null) newObj = newObj[arrPath[i]]
            else if (!newObj.hasOwnProperty(arrPath[i])) return undefined
            else return newObj[arrPath[i]]
        }
        return undefined
    }
}