import { useState, useEffect } from 'react'

const getWindowOffsetY = () => {
    return window.pageYOffset
}
const useScrollOffsetY = () => {
    const [offsetY, setScrollOffsetY] = useState(getWindowOffsetY())

    useEffect(() => {
        function handleOffSetY() {
            setScrollOffsetY(getWindowOffsetY())
        }

        window.addEventListener('scroll', handleOffSetY)
        return () => window.removeEventListener('scroll', handleOffSetY)
    }, [])

    return { offsetY }
}
export default useScrollOffsetY
