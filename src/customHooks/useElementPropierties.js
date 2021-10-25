import { useState, useEffect } from 'react'

const getElementProperties = (elementID) => {
    return document.getElementById(elementID)
        ? document.getElementById(elementID).getBoundingClientRect()
        : null
}

const useElementProperties = (elementID) => {
    const [elementProperties, setElementProperties] = useState(undefined)
    useEffect(() => {
        const handleResize = () => {
            setElementProperties(getElementProperties(elementID))
        }

        window.addEventListener('scroll', handleResize)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => {
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', handleResize)
        }
    }, [])

    return elementProperties
}

export default useElementProperties
