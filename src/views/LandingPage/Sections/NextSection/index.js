import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import backgroundImages from './../../../../assets/images/backgrounds/index'
import useResponsive from './../../../../hooks/useResponsive'

const NextSection = (props) => {
    const [hideBg] = useResponsive({ base: true, md: false })
    const collectionConfig = {
        threshold: 0.4,
        triggerOnce: true,
    }

    const [refBg, showBg] = useInView(collectionConfig)
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
    // console.log(hideBg)
    return (
        <React.Fragment>
            <div hidden={hideBg} className="flex-1 ">
                <div ref={refBg} className="w-full h-full">
                    <AnimatePresence>
                        {showBg && (
                            <motion.img
                                initial={{ opacity: 0, x: -250 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{
                                    opacity: 0,
                                    x: -250,
                                }}
                                className="w-full h-auto"
                                transition={transitionConfig}
                                src={backgroundImages.paradisebg}
                                alt={backgroundImages.paradisebg}
                            />
                        )}
                    </AnimatePresence>
                </div>
            </div>
            <div className="w-full md:w-7/12 xl:pr-10">
                <div
                    ref={refText1}
                    className="w-full text-center md:text-left overflow-hidden mb-4"
                >
                    <AnimatePresence>
                        {showText1 && (
                            <motion.div
                                initial={{ opacity: 0, x: 250 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{
                                    opacity: 0,
                                    x: 250,
                                }}
                                className="font-bebas-nue leading-none text-black-3 text-6xl xl:text-9xl"
                                transition={transitionConfig}
                            >
                                YOUR NEXT
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                <div
                    ref={refText2}
                    className="w-full items-center flex flex-col overflow-hidden mb-6"
                >
                    <AnimatePresence>
                        {showText2 && (
                            <motion.div
                                initial={{ opacity: 0, y: 250 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{
                                    opacity: 0,
                                    y: 250,
                                }}
                                className="justify-between text-primary font-base font-bebas-nue tracking-wide text-7xl xl:text-10xl leading-none px-5"
                                transition={transitionConfig}
                            >
                                ADVENTURE
                            </motion.div>
                        )}
                    </AnimatePresence>
                    <div className="w-8/12 lg:w-9/12 border-b-4 xl:border-b-8 border-primary"></div>
                </div>
                <div
                    ref={refText3}
                    className="w-full justify-center md:justify-end flex overflow-hidden"
                >
                    {' '}
                    <AnimatePresence>
                        {showText3 && (
                            <motion.div
                                initial={{ opacity: 0, x: -250 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{
                                    opacity: 0,
                                    x: -250,
                                }}
                                className="font-bebas-nue leading-none text-black-3 text-6xl xl:text-9xl h-full"
                                transition={transitionConfig}
                            >
                                IS HERE
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
                {/* <div className="flex flex-col md:flex-row h-auto ">
                <div className="flex-1 text-center md:text-left h-4.5 md:h-24 lg:h-32 xl:h-37 mb-6 md:mb-0 overflow-hidden ">
                    <div className="font-bebas-nue leading-none  text-black-3 text-7xl lg:text-11xl xl:text-11.5 h-full md:text-6.5 ">
                        YOUR NEXT
                    </div>
                </div>
                <div className="flex-1 flex items-end mb-2 xl:mb-4 overflow-hidden">
                    <div className="flex-1">
                        <div className="flex flex-row flex-1 justify-between text-primary font-base font-bebas-nue text-7xl lg:text-11xl xl:text-11.5 leading-none">
                            ADVENTURE
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex md:justify-end flex-1">
                <div className="w-full md:w-6/12 bg-black-1">
                    <div className="w-full bg-primary h-1  md:h-1.5 xl:h-2 "></div>
                </div>
            </div>

            <div className="flex flex-col md:flex-row h-auto ">
                <div className="flex-1 w-full text-center mt-6 md:mt-8 mb-2 md:mb-10 lg:mt-16 lg:mb-20 h-4.5 md:h-24 lg:h-32 xl:h-37 overflow-hidden">
                    <div className="font-bebas-nue leading-none text-black-3 text-7xl  md:text-6.5 lg:text-11xl h-full  xl:text-11.5">
                        IS HERE
                    </div>
                </div>
            </div> */}
            </div>
        </React.Fragment>
    )
}

export default NextSection
