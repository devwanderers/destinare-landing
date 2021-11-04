const returnPromise = (callback) => {
    return new Promise((resolve, reject) => callback(resolve, reject))
}

const timeout = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

const sleep = async (fn, delay = 300) => {
    await timeout(delay)
    return fn()
}

export { returnPromise, timeout, sleep }
