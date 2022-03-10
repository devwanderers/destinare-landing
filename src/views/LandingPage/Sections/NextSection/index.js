/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { AnimatePresence, motion, useViewportScroll } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import backgroundImages from './../../../../assets/images/backgrounds/index'
import useResponsive from './../../../../hooks/useResponsive'
import useWindowSize from '../../../../hooks/useWindowSize'
import { useRefScrollProgress } from '../../../../hooks/useRefScrollProgress'
import OverlayGallery from './../../../../components/Modals/OverlayGallery'
import { GoPlay } from 'react-icons/go'
import useTimeout from './../../../../hooks/useTimeout'

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
        ease: [0.455, 0.03, 0.515, 0.955],
        duration: 0.5,
    }

    return (
        <div className="section3 w-full flex flex-row py-16 md:py-20 md:pt-16 px-4 lg:px-8 xl:px-0 mx-auto relative">
            <div hidden={hideBg} className="flex-1 ">
                <div ref={refBg} className="relative w-full h-full">
                    <div></div>
                    <AnimatePresence>
                        {showBg && (
                            <motion.div
                                initial={{ opacity: 0, x: -250 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{
                                    opacity: 0,
                                    x: -250,
                                }}
                                transition={transitionConfig}
                                className="w-full h-full relative"
                            >
                                <img
                                    className="w-full h-auto"
                                    src={backgroundImages.paradisebg}
                                    alt={backgroundImages.paradisebg}
                                />
                            </motion.div>
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
            </div>
        </div>
    )
}

export default NextSection
