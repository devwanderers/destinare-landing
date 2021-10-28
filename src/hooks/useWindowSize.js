import { useState } from 'react'
import useEventListener from './useEventListener'

export default function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    })

    useEventListener('resize', () => {
        const { innerWidth, innerHeight, screen } = window

        setWindowSize({
            innerWidth,
            innerHeight,
            width: screen?.width,
            height: screen?.height,
        })
    })

    return windowSize
}
