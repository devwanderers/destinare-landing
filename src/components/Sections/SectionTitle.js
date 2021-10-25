import React from 'react'
import PropTypes from 'prop-types'
import Header from '../DisplayText/Header'

const SectionTitle = ({ children, className = '' }) => {
    return (
        <div
            className={`css-generic pb-5 lg:pb-10 items-end justify-end flex-grow relative ${className}`}
        >
            <div className="css-generic w-100px ">
                <div className="css-generic mr-8">
                    <Header
                        lg="89px"
                        className="text-primary transform rotate-180 leading-tight tracking-widest"
                        style={{
                            textOrientation: 'sideways-right',
                            writingMode: 'vertical-rl',
                        }}
                    >
                        {children}
                    </Header>
                </div>
            </div>
            <div className="section-title-line border-blue-4 border-b border-r border-solid flex">
                <div className="relative flex-grow ">
                    <div className="absolute right-0 bottom-0 h-2/6 border-r-4 -mb-1px border-solid border-primary -mr-1"></div>
                </div>
            </div>
        </div>
    )
}

SectionTitle.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

export default SectionTitle
