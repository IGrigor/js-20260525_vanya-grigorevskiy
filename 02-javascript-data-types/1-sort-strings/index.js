/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */

const collator = new Intl.Collator(['RU', 'EN'], {
    sensitivity: 'variant',
    caseFirst: 'upper'
});

const SORT_DIRECTIONS = {
    asc: 1,
    desc: -1
};

export function sortStrings(arr, param = 'asc') {
    const multiplier = SORT_DIRECTIONS[param] || 0;
    return [...arr].sort((a, b) => collator.compare(a, b) * multiplier);
}