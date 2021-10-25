import React from 'react'
import { LeftArrowSVG } from '../../assets/svg/icons'

const PrevArrowControl = ({ onClick }) => {
    return (
        <div className="arrow prev" onClick={onClick}>
            <div className="svg-container">
                <LeftArrowSVG />
            </div>
        </div>
    )
}

export default PrevArrowControl
