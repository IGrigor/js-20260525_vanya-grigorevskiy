/**
 * invertObj - should swap object keys and values
 * @param {object} obj - the initial object
 * @returns {object | undefined} - returns the new object or undefined if nothing did't pass
 */
export function invertObj(obj) {
    if (!obj) {
        return undefined
    }
    const targetObj = {}
    for (let key in obj) {
        targetObj[obj[key]] = key
    }
    return targetObj
}
