import React from 'react'
import { useTransition, animated, config } from 'react-spring'

const AnimateCover = ({ visible }) => {
    const transitions = useTransition(!!visible, {
        from: { opacity: 0 },
        enter: { opacity: 0.3 },
        leave: { opacity: 0 },
        delay: 500,
        config: config.stiff,
    })

    return transitions(
        (props, item) =>
            item && (
                <animated.div
                    className="css-generic max-w-full z-0"
                    style={{
                        ...props,
                        position: 'absolute',
                        bottom: 0,
                        right: 0,
                        left: 0,
                        top: 0,
                        background: '#324850',
                    }}
                ></animated.div>
            )
    )
}

export default AnimateCover
