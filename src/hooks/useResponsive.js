import { useState } from 'react'
import useWindowSize from './useWindowSize'
import useDeepCompareEffect from './useDeepCompareEffect'

const temp = (values) => {
    for (let index = 0; index < values.length; index++) {
        if (typeof values[index] !== 'undefined') {
            return values[index]
        }
    }
}

const useResponsive = ({ xxl, xl, lg, md, sm, base }) => {
    const [value, setValue] = useState('')

    const { width } = useWindowSize()
    useDeepCompareEffect(() => {
        if (width >= 1536) {
            setValue(temp([xxl, xl, lg, md, sm, base]))
        } else if (width >= 1280) {
            setValue(temp([xl, lg, md, sm, base]))
        } else if (width >= 1024) {
            setValue(temp([lg, md, sm, base]))
        } else if (width >= 768) {
            setValue(temp([md, sm, base]))
        } else if (width >= 640) {
            setValue(temp([sm, base]))
        } else {
            setValue(base)
        }
    }, [width])
    return [value]
}

export default useResponsive
