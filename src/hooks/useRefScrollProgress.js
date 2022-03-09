import { useState, useRef, useLayoutEffect } from 'react'

export const useRefScrollProgress = (elemRef) => {
    const ref = elemRef || useRef()
    const [start, setStart] = useState(null)
    const [end, setEnd] = useState(null)

    useLayoutEffect(() => {
        if (!ref.current) {
            return
        }
        const rect = ref.current.getBoundingClientRect()
        const scrollTop =
            window.pageYOffset || document.documentElement.scrollTop
        const offsetTop = rect.top + scrollTop

        setStart(offsetTop)
        setEnd(offsetTop + rect.height)
    })

    return { ref, start, end }
}
