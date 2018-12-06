/**
 *
 *
 * @param {string} str
 * @param {string} target
 * @returns {string}
 */
export const getStringAfter = (str, target) => {
    if (!str.includes(target)) {
        return null
    }
    return str.slice(str.indexOf(target) + target.length)
}
