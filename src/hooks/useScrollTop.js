import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { animateScroll as scroll } from 'react-scroll'

const useScrollTop = () => {
    const { pathname } = useLocation()

    window.history.scrollRestoration = 'manual'

    // useEffect(() => {
    //     // window.scrollTo(0, 0)
    //     scroll.scrollToTop({ duration: 1000 })
    // }, [])

    useEffect(() => {
        scroll.scrollToTop({ duration: 100 })
    }, [pathname])
}

export default useScrollTop
