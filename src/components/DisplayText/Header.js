import React from 'react'
import PropTypes from 'prop-types'
import { TextSizes } from './../../constants/textConstants'
import { returnTextSizeByScreenWidth } from './../../services/stylesServices'

const Header = ({ children, style, className, ...restProps }) => {
    const { base, sm, md, lg, xl, xxl } = returnTextSizeByScreenWidth({
        ...restProps,
    })
    return (
        <div
            className={`font-russo-one  ${className} ${base} ${sm} ${md} ${lg} ${xl}  ${xxl}`}
            style={style}
        >
            {children}
        </div>
    )
}

Header.propTypes = {
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

Header.defaultProps = {
    className: '',
    base: '4xl',
}

export default Header
