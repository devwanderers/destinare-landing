const windowOpen = (link) => {
    const a = document.createElement('a')
    a.target = '_blank'
    a.href = link
    a.click()
}

export default windowOpen
