import React from 'react'
import { Layout, Button } from 'antd'
import { useHistory } from 'react-router'

import Paragraph from '../../components/DisplayText/Paragraph'
import PromotionsSection from './Sections/PromotionSections'
// import { FaCheck } from 'react-icons/fa'
import Logo from '../../assets/svg/brand/Logo'
import {
    AdventureSVG,
    LeftLogoSVG,
    MembersSVG,
} from '../../assets/svg/utilities'

import LogoText from '../../assets/svg/brand/LogoText'
// import useWindowSize from './../../hooks/useWindowSize'
// import { returnValueByScreenWidth } from '../../services/stylesServices'
import NextSection from './Sections/NextSection/index'
import DefaultNavbar from '../../components/Navbar/DefaultNavbar'
import DefaultFooter from '../../components/Footers/DefaultFooter'
import { LoginInPath } from './../../constants/routerConstants'

const { Content } = Layout

// const Card = ({ className, main }) => {
//     const { width } = useWindowSize()
//     return (
//         <div
//             className={`px-10 md:px-5 lg:px-10 py-10 lg:py-10 xl:py-12 bg-white shadow-xl  ${
//                 !main ? 'bg-white' : 'gradient-g'
//             } ${className}`}
//             style={{
//                 height: returnValueByScreenWidth(width, {
//                     base: 'auto',
//                     md: '400px',
//                     lg: '500px',
//                     xl: '535px',
//                 }),
//             }}
//         >
//             <div
//                 className={`flex flex-col h-full justify-between ${
//                     main ? 'text-white' : ''
//                 }`}
//             >
//                 <div className="w-full">
//                     <div className="italic font-extrabold  leading-none text-center text-4xl md:text-4xl xl:text-2.7">
//                         TRAVELER
//                     </div>
//                     <div className=" font-semibold text-xl md:text-base lg:text-lg xl:text-xl text-center">
//                         20$ / Month
//                     </div>
//                     <div className="w-full pb-12 md:pb-0 pt-8 lg:pt-10 xl:pt-12 text-xs lg:text-sm xl:text-base">
//                         <div className="flex flex-row mb-3 break-words">
//                             <span
//                                 className="relative mr-2"
//                                 style={{ top: '3px' }}
//                             >
//                                 <FaCheck />
//                             </span>
//                             <span>Lorem ipsum dolor sit amet. </span>
//                         </div>
//                         <div className="flex flex-row mb-3 break-words">
//                             <span
//                                 className="relative mr-2"
//                                 style={{ top: '3px' }}
//                             >
//                                 <FaCheck />
//                             </span>
//                             <span>Lorem ipsum dolor sit amet. </span>
//                         </div>
//                         <div className="flex flex-row mb-3 break-words">
//                             <span
//                                 className="relative mr-2"
//                                 style={{ top: '3px' }}
//                             >
//                                 <FaCheck />
//                             </span>
//                             <span>Lorem ipsum dolor sit amet. </span>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full flex justify-center">
//                     <Button
//                         shape="round"
//                         className={`  h-auto md:text-base lg:text-lg px-10  ${
//                             !main ? 'text-white bg-yellow-1' : ''
//                         }`}
//                         style={{
//                             paddingTop: '0.6rem',
//                             paddingBottom: '0.6rem',
//                         }}
//                     >
//                         Get Started
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     )
// }

const LandingPage = ({ authenticated, userData, logout }) => {
    // const { width } = useWindowSize()
    const history = useHistory()
    return (
        <Layout className="landing-page min-w-minMobileWidth bg-gray-50">
            <DefaultNavbar
                userData={userData}
                logout={logout}
                authenticated={authenticated}
                className="bg-transparent"
            />
            <Content>
                <section className="bg-lobby relative bg-cover bg-center bg-no-repeat -mt-16 md:-mt-20 ">
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 "
                        style={{ backgroundColor: '#211915', opacity: 0.15 }}
                    ></div>
                    <div
                        className="flex flex-col h-screen section px-0 justify-center mx-auto relative "
                        style={{ minHeight: '640px' }}
                    >
                        <div className="flex flex-col w-full items-center">
                            <div className="w-full lg:w-10/12 px-5 md:px-8 lg:px-10 mb-2 md:mb-1 lg:mb-12">
                                <Logo />
                            </div>
                            <div>
                                <Paragraph
                                    className="text-center text-white mb-6"
                                    base="base"
                                    md="xl"
                                    lg="2xl"
                                >
                                    Find your next destination. <br /> Explore
                                    the deals we have for you
                                </Paragraph>
                            </div>
                            <button
                                // type="link"
                                className="border border-yellow-2 text-yellow-2 text-xs h-10 w-32 leading-none px-4 tracking-wide rounded-sm"
                            >
                                SEE MORE
                            </button>
                        </div>
                    </div>
                </section>
                <section className="relative">
                    <div className="absolute bottom-0 right-0 top-0 md:w-5/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 lg:pt-2 xl:pt-10 hidden md:flex justify-end items-start  overflow-hidden">
                        <div className="h-auto" style={{ width: '80%' }}>
                            <LeftLogoSVG />
                        </div>
                    </div>
                    <div className="section mx-auto relative px-3 xl:px-0 lg:pb-3.5 xl:pb-20 pt-4 lg:pt-2">
                        <PromotionsSection />
                    </div>
                    <div className="section3 w-full flex flex-row py-16 md:py-20 md:pt-16 px-4 lg:px-8 xl:px-0 mx-auto relative">
                        <NextSection />
                    </div>
                </section>
                <section className="bg-white md:bg-dock md:bg-cover md:bg-center relative ">
                    <div
                        className="hidden md:flex absolute top-0 left-0 right-0 bottom-0"
                        style={{ backgroundColor: '#000', opacity: 0.3 }}
                    ></div>
                    <div className="section md:20 lg:pt-36 pb-12 relative  px-0 lg:px-8 xl:px-0">
                        <div className="relative bg-dock bg-cover bg-center md:bg-none flex w-full flex-col section px-4 lg:px-8 xl:px-0 mx-auto pt-36  pb-32 lg:pt-0 md:pb-20">
                            <div
                                className="md:hidden absolute top-0 left-0 right-0 bottom-0"
                                style={{
                                    backgroundColor: '#000',
                                    opacity: 0.3,
                                }}
                            ></div>
                            <div className="relative flex-1 text-center text-3xl md:text-4xl lg:text-3.5">
                                <div className="font-montserrat text-center break-words leading-none text-white font-medium flex flex-col  items-center tracking-wider shadow-c ">
                                    <div className="flex flex-row mb-4 lg:mb-8">
                                        <strong className="mr-2 lg:mr-5">
                                            Join
                                        </strong>
                                        <div className="mr-2 lg:mr-5 h-1.875 md:h-2.25 lg:h-3.5 pb-1">
                                            <LogoText
                                                color="#fff"
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <strong>and</strong>
                                    </div>
                                    <strong>
                                        experience the smart way to travel.
                                    </strong>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-2">
                            <div className="flex-1 bg-primary md:bg-opacity-50 pt-20 pb-12 md:pt-12 md:pb-8 md:mb-0">
                                <div className="ml-auto px-10 lg:px-12">
                                    <div className="w-4/12 md:w-3/12 lg:w-2/12 mb-5 mx-auto md:mx-0">
                                        <AdventureSVG />
                                    </div>
                                    <div className="text-white text-2xl md:text-xl lg:text-3xl xl:text-3xl font-normal text-center md:text-left">
                                        Here is where aventure and technology
                                        take place.
                                    </div>
                                </div>
                            </div>
                            <div className="flex-1 bg-blue-7 md:bg-primary md:bg-opacity-50 pt-20 pb-12 md:pt-12 md:pb-8">
                                <div className="px-10 lg:px-12">
                                    <div className="w-4/12 md:w-3/12 lg:w-2/12 mb-5 mx-auto md:mx-0">
                                        <MembersSVG />
                                    </div>
                                    <div className="text-white text-2xl md:text-xl lg:text-3xl xl:text-3xl font-normal text-center md:text-left">
                                        A membership with the opportunity to
                                        travel around the world.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bg-dock bg-cover bg-center relative">
                    <div className="section flex justify-center py-32">
                        <Button
                            type="primary"
                            size="large"
                            className="focus:bg-red-300 focus:ring-2 ring-red-300 text-base lg:text-lg leading-none px-6 lg:px-8 tracking-wide border-none rounded-sm"
                            onClick={() => history.push(LoginInPath)}
                        >
                            Get Started
                        </Button>
                    </div>
                </section>
            </Content>
            <DefaultFooter />
        </Layout>
    )
}

export default LandingPage
