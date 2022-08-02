/* eslint-disable no-unused-vars */
import React from 'react'
import { Layout, Row, Col, Input } from 'antd'
// import { useHistory } from 'react-router'

import Paragraph from '../../components/DisplayText/Paragraph'
import PromotionsSection from './Sections/PromotionSections'
// import { FaCheck } from 'react-icons/fa'
import Logo from '../../assets/svg/brand/Logo'
import {
    AdventureSVG,
    LeftLogoSVG,
    MembersSVG,
} from '../../assets/svg/utilities'
import banner from '../../assets/images/banners/banner-nomadz.gif'

import LogoText from '../../assets/svg/brand/LogoText'
// import useWindowSize from './../../hooks/useWindowSize'
// import { returnValueByScreenWidth } from '../../services/stylesServices'
import NextSection from './Sections/NextSection/index'
import DefaultNavbar from '../../components/Navbar/DefaultNavbar'
import DefaultFooter from '../../components/Footers/DefaultFooter'
import useResponsive from './../../hooks/useResponsive'
import { Element } from 'react-scroll'
import utilitiesImages from '../../assets/images/utilities'
import VideosSection from './Sections/VideosSection'
import useScrollTop from './../../hooks/useScrollTop'
import { Link } from 'react-router-dom'
import { SignInPath, tripvixiaURL } from '../../constants/routerConstants'
import { windowLocationPush, windowOpen } from './../../services/windowServices'
import { nomadzLink } from '../../constants/linksConstranst'

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

const BannerNFts = () => {
    return (
        <div
            className="w-full cursor-pointer"
            onClick={() => windowLocationPush(nomadzLink)}
        >
            <img className="w-full h-auto" src={banner} alt={banner} />
        </div>
    )
}

const LandingPage = ({ authenticated, userData, logout }) => {
    // const { width } = useWindowSize()
    useScrollTop()
    const [inputSize] = useResponsive({
        base: 'middle',
        lg: 'large',
    })

    return (
        <Layout className="landing-page min-w-minMobileWidth bg-gray-50">
            <DefaultNavbar
                userData={userData}
                logout={logout}
                authenticated={authenticated}
                className="bg-white"
                logoColor="#f9a24f"
            />
            <Content>
                <section className="bg-lobby relative bg-cover bg-center bg-no-repeat -mt-16 md:-mt-20 ">
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 "
                        style={{ backgroundColor: '#211915', opacity: 0.15 }}
                    ></div>
                    <div
                        className="flex flex-col h-screen max-w-1280px px-0 justify-center mx-auto relative "
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
                                    Bridging crypto and real world utility on
                                    one platform. <br /> Buy, stake, earn and
                                    travel the world with us.
                                </Paragraph>
                            </div>
                            <div>
                                {!authenticated ? (
                                    <Link
                                        to={SignInPath}
                                        type="link"
                                        className="border border-yellow-2 text-yellow-2 text-2xl py-2 px-3 md:px-8 leading-none tracking-wide rounded-sm hover:text-yellow-2 "
                                    >
                                        Sign up for Free
                                    </Link>
                                ) : (
                                    <button
                                        onClick={() => windowOpen(tripvixiaURL)}
                                        type="link"
                                        className="border border-yellow-2 text-yellow-2 text-2xl py-2 px-3 md:px-8 leading-none tracking-wide rounded-sm"
                                    >
                                        Travel Platform
                                    </button>
                                )}
                            </div>

                            {/* <button
                                // type="link"
                                className="border border-yellow-2 text-yellow-2 text-xs h-10 w-32 leading-none px-4 tracking-wide rounded-sm"
                            >
                                SEE MORE
                            </button> */}
                        </div>
                    </div>
                </section>
                <section className="relative">
                    <div className="absolute bottom-0 right-0 top-0 md:w-5/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12 lg:pt-2 xl:pt-10 hidden md:flex justify-end items-start  overflow-hidden">
                        <div className="h-auto" style={{ width: '80%' }}>
                            <LeftLogoSVG />
                        </div>
                    </div>
                </section>
                <section className="relative border border-b py-12">
                    <div className="max-w-1280px mx-auto relative px-3 xl:px-0">
                        <PromotionsSection />
                        <BannerNFts />
                    </div>
                </section>
                <section className="relative">
                    <NextSection />
                    <VideosSection />
                </section>
                <section className=" md:bg-dock md:bg-cover md:bg-center relative ">
                    <div
                        className="hidden md:flex absolute top-0 left-0 right-0 bottom-0"
                        style={{ backgroundColor: '#000', opacity: 0.3 }}
                    ></div>
                    <div className="max-w-1280px mx-auto md:20 lg:pt-36 lg:pb-12 relative  px-0 lg:px-8 xl:px-0">
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
                                        Here is where adventure and technology
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
                                        The opportunity to travel the world. We
                                        do not have membership fees.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <Element name="tokenomics" className="bg-white">
                    <div className="max-w-1280px mx-auto relative px-0 lg:px-8 xl:px-0 pt-8 pb-12">
                        <section id="about" className="bg-gray-12">
                            <Row
                                className="section my-16 lg:my-24"
                                justify="center"
                                align="middle"
                            >
                                <Col
                                    xs={24}
                                    sm={12}
                                    className="mb-10 md:mb-0 px-0 lg:px-5 xl:pr-16 xl:px-0"
                                >
                                    <div className="mb-12">
                                        <p className="text-3xl lg:text-5xl blue-gradient leading-none font-extrabold mb-4">
                                            Travel made simple
                                        </p>
                                        <p className="text-3xl lg:text-5xl text-black-6 leading-none font-extrabold">
                                            Discover the world and pay with
                                            crypto
                                        </p>
                                    </div>
                                    <p className="text-xl text-black-6 mb-10">
                                        We have successfully created a
                                        frictionless travel booking experience
                                        that incorporates next-generation
                                        blockchain technology and tokenized
                                        incentives.
                                    </p>
                                    <p className="text-xl text-black-6">
                                        By introducing a cutting edge user
                                        experience and multiple cryptocurrencies
                                        and traditional payment options
                                        alongside benefits tied to our
                                        proprietary cryptocurrency DDOT, , our
                                        customers know they are booking with a
                                        platform of the future with transparent
                                        pricing and backed up by our Best Price
                                        Guarantee.
                                    </p>
                                </Col>
                                <Col
                                    xs={24}
                                    sm={12}
                                    className="px-0 lg:px-5 xl:px-0"
                                >
                                    <img
                                        className="m-auto w-full"
                                        src={utilitiesImages.wallet}
                                    />
                                </Col>
                            </Row>
                        </section>
                    </div>
                </Element>
                <section className="relative bg-cliffBeach bg-cover bg-top">
                    <div className="max-w-1280px px-6 mx-auto flex flex-col items-center justify-center py-40 lg:py-72">
                        <div className="relative flex-1 text-center text-3xl md:text-4xl lg:text-5xl">
                            <div className="font-montserrat text-center break-words leading-none text-white font-medium flex flex-col  items-center tracking-wider shadow-c ">
                                <div className="flex flex-row mb-16">
                                    <span>
                                        <strong>
                                            Travel made simple <br /> Discover
                                            the world with destinare
                                        </strong>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div>
                            <button className="bg-primary text-white py-3 text-lg lg:text-2xl leading-none px-6 lg:px-10 tracking-wide border-none rounded-sm">
                                Travel platform coming soon!
                            </button>
                        </div>
                    </div>
                </section>
                <section>
                    <div className="max-w-1280px px-0 lg:px-25px flex mx-auto py-10 lg:pt-16 lg:pb-20">
                        <div className="flex-1 bg-gray-200 py-10 px-6 md:px-12 lg:px-20 xl:px-24">
                            <div className="font-bebas-nue text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-black-1">
                                STAY WITH US, GET OUR NEWSLETTER
                            </div>
                            <div className="mb-10">
                                <div className="w-full md:w-6/12 break-words text-xs lg:text-sm xl:text-base">
                                    Become part of our traveling community, be
                                    the first one to know about our launches or
                                    promotions.
                                </div>
                            </div>
                            <Row>
                                <Col xs={14} className="">
                                    <Input.Search
                                        size={inputSize}
                                        className="h-auto custom-button-addon-black font-roboto fotn"
                                        placeholder="Email address"
                                        enterButton="Sign up"
                                    />
                                </Col>
                                <Col
                                    xs={10}
                                    className="flex justify-end md:justify-center "
                                >
                                    <div className="text-black-1 h-8 lg:h-50px pt-1">
                                        <Logo
                                            color="black"
                                            height="100%"
                                            width="100%"
                                        />
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </section>
            </Content>
            <DefaultFooter />
        </Layout>
    )
}

export default LandingPage
