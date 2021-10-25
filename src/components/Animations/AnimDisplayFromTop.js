import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import PropTypes from 'prop-types'

const AnimDisplayFromTop = ({ visible, children, className }) => {
    return (
        <AnimatePresence>
            {visible && (
                <motion.div
                    className={className}
                    initial={{ opacity: 1, height: 0, originY: 0 }}
                    animate={{ opacity: 1, height: 'auto', originY: 0 }}
                    exit={{
                        opacity: 1,
                        height: 0,
                        originY: 0,
                        // display: 'none',
                    }}
                    transition={{
                        delay: 0,
                    }}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    )
}
AnimDisplayFromTop.defaultProps = {}

AnimDisplayFromTop.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
}

export default AnimDisplayFromTop
