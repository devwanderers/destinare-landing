import React from 'react'
import PropTypes from 'prop-types'
import { TextSizes } from './../../constants/textConstants'
import { returnTextSizeByScreenWidth } from './../../services/stylesServices'

const Paragraph = ({ children, className, ...restProps }) => {
    const { base, sm, md, lg, xl, xxl } = returnTextSizeByScreenWidth({
        ...restProps,
    })

    return (
        <p className={`${className} ${base} ${sm} ${md} ${lg} ${xl} ${xxl}`}>
            {children}
        </p>
    )
}

Paragraph.defaultProps = {
    className: 'text-blue-4',
    base: 'xl',
}

Paragraph.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    className: PropTypes.string,
    base: PropTypes.oneOf(TextSizes),
    sm: PropTypes.oneOf(TextSizes),
    md: PropTypes.oneOf(TextSizes),
    lg: PropTypes.oneOf(TextSizes),
    xl: PropTypes.oneOf(TextSizes),
    xxl: PropTypes.oneOf(TextSizes),
}

export default Paragraph
