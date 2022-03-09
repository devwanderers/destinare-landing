export const windowOpen = (link) => {
    const a = document.createElement('a')
    a.target = '_blank'
    a.href = link
    a.click()
}

export const windowLocationPush = (link) => {
    const a = document.createElement('a')
    a.href = link
    a.click()
}

export const windowLocationReplace = (link) => {
    window.location.replace(link)
}
