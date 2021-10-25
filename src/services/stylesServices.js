export const returnTextSizeByScreenWidth = ({ base, sm, md, lg, xl, xxl }) => {
    const _base = base ? `text-${base}` : ''
    const _sm = sm ? `sm:text-${sm}` : ''
    const _md = md ? `md:text-${md}` : ''
    const _lg = lg ? `lg:text-${lg}` : ''
    const _xl = xl ? `xl:text-${xl}` : ''
    const _xxl = xxl ? `2xl:text-${xxl}` : ''

    return { base: _base, sm: _sm, md: _md, lg: _lg, xl: _xl, xxl: _xxl }
}

const temp = (values) => {
    for (let index = 0; index < values.length; index++) {
        if (values[index]) {
            return values[index]
        }
    }
}

export const returnValueByScreenWidth = (
    screenSizeWidth,
    { base, sm, md, lg, xl, xxl }
) => {
    if (screenSizeWidth >= 1536) {
        return temp([xxl, xl, lg, md, sm, base])
    } else if (screenSizeWidth >= 1280) {
        return temp([xl, lg, md, sm, base])
    } else if (screenSizeWidth >= 1024) {
        return temp([lg, md, sm, base])
    } else if (screenSizeWidth >= 768) {
        return temp([md, sm, base])
    } else if (screenSizeWidth >= 640) {
        return temp([sm, base])
    } else {
        return base
    }
}
