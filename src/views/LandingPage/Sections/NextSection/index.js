import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const NextSection = (props) => {
    const collectionConfig = {
        threshold: 0.4,
    }

    const [refText1, showText1] = useInView(collectionConfig)
    const [refText2, showText2] = useInView(collectionConfig)
    const [refText3, showText3] = useInView(collectionConfig)

    const transitionConfig = {
        // duration: 0.5,
        // type: 'spring',
        // bounce: 0.2,
        // ease: 'circInOut',
        // stiffness: 50,
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.5,
    }
    return (
        <React.Fragment>
            <div className="flex flex-col md:flex-row h-auto ">
                <div
                    ref={refText1}
                    className="flex-1 text-center md:text-left  h-4.5 md:h-24 lg:h-32 xl:h-37 mb-6 md:mb-0 overflow-hidden "
                >
                    <AnimatePresence>
                        {showText1 && (
                            <motion.div
                                className="font-bebas-nue leading-none  text-black-3 text-7xl h-full md:text-6.5 lg:text-11xl  xl:text-11.5"
                                initial={{ opacity: 0, x: '200%' }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: '200%' }}
                                transition={transitionConfig}
                            >
                                YOUR NEXT
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div
                    ref={refText3}
                    className="flex-1 flex items-end mb-2 xl:mb-4   overflow-hidden"
                >
                    <AnimatePresence>
                        {showText3 && (
                            <motion.div
                                className="flex-1 "
                                initial={{ opacity: 0, y: '200%' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: '200%' }}
                                transition={transitionConfig}
                            >
                                <div className="flex flex-row flex-1 justify-between text-yellow-1 font-base font-bebas-nue text-3xl lg:text-2.5 xl:text-5xl leading-none">
                                    <div className="space-y-2">
                                        <div>ADVENTURE</div>
                                        <div className="">EXPERIENCE</div>
                                    </div>
                                    <div className=" space-y-2">
                                        <div>DESTINATION</div>
                                        <div>VACATION</div>
                                    </div>
                                    <div className="flex items-center justify-center">
                                        <div>DESTINARE</div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className="flex md:justify-end flex-1">
                <div className="w-full md:w-6/12 bg-black-1">
                    <div className="w-full bg-yellow-1 h-1  md:h-1.5 xl:h-2 "></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row h-auto ">
                <div
                    ref={refText2}
                    className="flex-1 w-full text-center mt-6 md:mt-8 mb-2 md:mb-10 lg:mt-16 lg:mb-20 h-4.5 md:h-24 lg:h-32 xl:h-37 overflow-hidden "
                >
                    <AnimatePresence>
                        {showText2 && (
                            <motion.div
                                className="font-bebas-nue leading-none text-black-3 text-7xl  md:text-6.5 lg:text-11xl h-full  xl:text-11.5"
                                initial={{ opacity: 0, y: '-200%' }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: '-200%' }}
                                transition={transitionConfig}
                            >
                                IS HERE
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </React.Fragment>
    )
}

export default NextSection
