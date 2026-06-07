/**
 * createGetter - creates function getter which allows select value from object
 * @param {string} path - the strings path separated by dot
 * @returns {function} - function-getter which allow get value from object by set path
 */
export function createGetter(path) {
    const arrPath = path.split('.')
    return function (obj) {
        let result = obj
        for (let i = 0; i < arrPath.length; i++) {
            if (result.hasOwnProperty(arrPath[i])) result = result[arrPath[i]]
            else return undefined
        }
        return result
    }
}