import { useState, useEffect } from 'react'

const getWindowDimensions = () => {
    const { innerWidth, innerHeight, screen } = window
    return {
        innerWidth,
        innerHeight,
        width: screen?.width,
        height: screen?.height,
    }
}
const useWindowDimensions = () => {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    )

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions())
        }

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return windowDimensions
}
export default useWindowDimensions
