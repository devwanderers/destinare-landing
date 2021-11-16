import React from 'react'
// import { AnimatePresence, motion } from 'framer-motion'
// import { useInView } from 'react-intersection-observer'

const NextSection = (props) => {
    // const collectionConfig = {
    //     threshold: 0.4,
    // }

    // const [refText1, showText1] = useInView(collectionConfig)
    // const [refText2, showText2] = useInView(collectionConfig)
    // const [refText3, showText3] = useInView(collectionConfig)

    // const transitionConfig = {
    //     // duration: 0.5,
    //     // type: 'spring',
    //     // bounce: 0.2,
    //     // ease: 'circInOut',
    //     // stiffness: 50,
    //     ease: [0.455, 0.03, 0.515, 0.955],
    //     duration: 0.5,
    // }
    return (
        <React.Fragment>
            <div className="w-full md:text-left overflow-hidden pl-10 lg:mb-3">
                <div className="font-bebas-nue leading-none text-black-3 text-7xl md:text-6.5 lg:text-4.725 xl:text-12xl">
                    YOUR NEXT
                </div>
            </div>
            <div className="w-full flex overflow-hidden mb-6 lg:pl-16">
                <div className="justify-between text-primary font-base font-bebas-nue tracking-wide text-7xl lg:text-7xl xl:text-11.5 leading-none lg:border-b-4 xl:border-b-8 border-primary px-5">
                    ADVENTURE
                </div>
            </div>
            <div className="w-full flex justify-center overflow-hidden lg:pl-36">
                <div className="font-bebas-nue leading-none text-black-3 text-7xl md:text-7xl lg:text-4.725 xl:text-12xl h-full  ">
                    IS HERE
                </div>
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
        </React.Fragment>
    )
}

export default NextSection
