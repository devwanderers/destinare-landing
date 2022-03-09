import { useState } from 'react'
import useEventListener from './useEventListener'

export default function useWindowSize() {
    const { innerWidth, innerHeight } = window
    const [windowSize, setWindowSize] = useState({
        width: innerWidth,
        height: innerHeight,
    })

    useEventListener('resize', () => {
        const { innerWidth, innerHeight } = window

        setWindowSize({
            width: innerWidth,
            height: innerHeight,
        })
    })

    return windowSize
}
