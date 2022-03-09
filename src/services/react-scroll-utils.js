import { scroller } from 'react-scroll'

export const scrollTo = (name) => {
    scroller.scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
    })
}
