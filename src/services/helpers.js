export const cls = (input) => {
    return input
        .replace(/\s+/gm, ' ')
        .split(' ')
        .filter((cond) => typeof cond === 'string' && cond !== 'undefined')
        .join(' ')
        .trim()
}

export const escapeRegExp = (string) => {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
}
