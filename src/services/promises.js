const returnPromise = (callback) => {
    return new Promise((resolve, reject) => callback(resolve, reject))
}

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const sleep = async (fn, ...args) => {
    await timeout(3000)
    return fn(...args)
}

export { returnPromise, timeout, sleep }
