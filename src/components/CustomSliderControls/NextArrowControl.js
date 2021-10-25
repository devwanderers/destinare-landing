import React from 'react'
import { RightArrowSVG } from '../../assets/svg/icons'

const NextArrowControl = ({ onClick }) => {
    return (
        <div className="arrow next" onClick={onClick}>
            <div className="svg-container">
                <RightArrowSVG />
            </div>
        </div>
    )
}

export default NextArrowControl
