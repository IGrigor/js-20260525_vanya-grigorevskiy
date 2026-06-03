/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size = string.length) {
    let res = ''
    let repeated = 0
    for (let i = 0; i < string.length; i++) {
        repeated++
        if (string[i] !== string[i - 1]) repeated = 1
        if ( size < repeated) continue
        res += string[i]
    }
    return res
}