import React, { useState } from 'react'
import { Layout, Button, Row, Col, Input, Drawer } from 'antd'

import Paragraph from '../../components/DisplayText/Paragraph'
import PromotionsSection from './Sections/PromotionSections'
import { FaCheck } from 'react-icons/fa'
import Logo from '../../assets/svg/brand/Logo'
import LogoIconSVG from './../../assets/svg/brand/LogoIconSVG'
import {
    AdventureSVG,
    LeftLogoSVG,
    MembersSVG,
} from '../../assets/svg/utilities'
// // import { LogoTextSVG } from '../../assets/svg/brand'
import LogoText from '../../assets/svg/brand/LogoText'
import useWindowSize from './../../hooks/useWindowSize'
import { returnValueByScreenWidth } from '../../services/stylesServices'
import NextSection from './Sections/NextSection/index'
import DefaultNavbar from '../../components/Navbar/DefaultNavbar'
import DefaultFooter from '../../components/Footers/DefaultFooter'

const { Content } = Layout

const Card = ({ className, main }) => {
    const { width } = useWindowSize()
    return (
        <div
            className={`px-10 md:px-5 lg:px-10 py-10 lg:py-10 xl:py-12 bg-white shadow-xl  ${
                !main ? 'bg-white' : 'gradient-g'
            } ${className}`}
            style={{
                height: returnValueByScreenWidth(width, {
                    base: 'auto',
                    md: '400px',
                    lg: '500px',
                    xl: '535px',
                }),
            }}
        >
            <div
                className={`flex flex-col h-full justify-between ${
                    main ? 'text-white' : ''
                }`}
            >
                <div className="w-full">
                    <div className="italic font-extrabold  leading-none text-center text-4xl md:text-4xl xl:text-2.7">
                        TRAVELER
                    </div>
                    <div className=" font-semibold text-xl md:text-base lg:text-lg xl:text-xl text-center">
                        20$ / Month
                    </div>
                    <div className="w-full pb-12 md:pb-0 pt-8 lg:pt-10 xl:pt-12 text-xs lg:text-sm xl:text-base">
                        <div className="flex flex-row mb-3 break-words">
                            <span
                                className="relative mr-2"
                                style={{ top: '3px' }}
                            >
                                <FaCheck />
                            </span>
                            <span>Lorem ipsum dolor sit amet. </span>
                        </div>
                        <div className="flex flex-row mb-3 break-words">
                            <span
                                className="relative mr-2"
                                style={{ top: '3px' }}
                            >
                                <FaCheck />
                            </span>
                            <span>Lorem ipsum dolor sit amet. </span>
                        </div>
                        <div className="flex flex-row mb-3 break-words">
                            <span
                                className="relative mr-2"
                                style={{ top: '3px' }}
                            >
                                <FaCheck />
                            </span>
                            <span>Lorem ipsum dolor sit amet. </span>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center">
                    <Button
                        shape="round"
                        className={`  h-auto md:text-base lg:text-lg px-10  ${
                            !main ? 'text-white bg-yellow-1' : ''
                        }`}
                        style={{
                            paddingTop: '0.6rem',
                            paddingBottom: '0.6rem',
                        }}
                    >
                        Get Started
                    </Button>
                </div>
            </div>
        </div>
    )
}

const LandingPage = (props) => {
    const [isOpen, setOpenDrawer] = useState(false)
    const { width } = useWindowSize()

    return (
        <Layout className="landing-page min-w-minMobileWidth bg-gray-50">
            <Drawer
                title="Basic Drawer"
                placement="left"
                closable={false}
                onClose={() => setOpenDrawer(!isOpen)}
                visible={isOpen}
                key="left"
            >
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Drawer>
            <DefaultNavbar
                className="bg-transparent"
                onClickBurguer={() => setOpenDrawer(!isOpen)}
            />
            <Content>
                <section className="bg-travellerbg relative bg-cover bg-center bg-no-repeat -mt-16 md:-mt-20 ">
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 "
                        style={{ backgroundColor: '#211915', opacity: 0.15 }}
                    ></div>
                    <div
                        className="flex flex-col h-screen section px-0 justify-center mx-auto relative "
                        style={{ minHeight: '640px' }}
                    >
                        <div className="flex flex-col w-full items-center">
                            <div className="w-full lg:w-10/12 px-5 md:px-8 lg:px-10 mb-2 md:mb-1 lg:mb-0">
                                <Logo />
                            </div>
                            <div>
                                <Paragraph
                                    className="text-center text-white mb-4"
                                    base="base"
                                    md="xl"
                                    lg="2xl"
                                >
                                    Find your next destination. <br /> Explore
                                    the deals we have for you
                                </Paragraph>
                            </div>
                            <Button
                                type="primary"
                                className="gradient-g text-xs h-10 w-32 leading-none px-4 tracking-wide rounded-none border-none"
                            >
                                SEE MORE
                            </Button>
                        </div>
                    </div>
                </section>
                <section className=" relative">
                    <div className="absolute bottom-0 right-0 top-0 md:w-5/12 lg:w-6/12 xl:w-4/12 2xl:w-3/12 pt-20 hidden md:flex justify-end items-end  overflow-hidden">
                        <div className="h-auto" style={{ width: '80%' }}>
                            <LeftLogoSVG />
                        </div>
                    </div>
                    <div className="section3 mx-auto relative">
                        <PromotionsSection />
                    </div>
                    <div className="flex w-full flex-col section py-20 md:pt-16 lg:pt-28 lg:pb-48 xl:pt-32 xl:pb-64 px-4 lg:px-8 xl:px-0 mx-auto relative">
                        <NextSection />
                    </div>
                </section>
                <section
                    className="bg-clouds bg-cover bg-center bg-red-50 md:-mt-20 lg:-mt-60 xl:-mt-72 relative"
                    style={{
                        clipPath: returnValueByScreenWidth(width, {
                            md: 'polygon(0 0, 100% 30%, 100% 100%, 0 100%)',
                            lg: 'polygon(0 0, 100% 40%, 100% 100%, 0 100%)',
                            xl: 'polygon(0 0, 100% 45%, 100% 100%, 0 100%)',
                        }),
                    }}
                >
                    <div
                        className="absolute top-0 left-0 right-0 bottom-0 "
                        style={{ backgroundColor: '#211915', opacity: 0.15 }}
                    ></div>
                    <div className="relative flex w-full flex-col section px-4 lg:px-8 xl:px-0 mx-auto pt-32 pb-28 md:pt-44 md:pb-24 xl:pt-64 xl:pb-40">
                        <div className="flex-1 text-center lg:mt-40 text-3xl md:text-4xl lg:text-3.5">
                            <div className="leading-none text-white">
                                <div className="font-montserrat text-center break-words font-medium flex flex-col  items-center tracking-wider shadow-c">
                                    <div className="flex flex-row mb-4 lg:mb-8">
                                        <strong className="mr-2 lg:mr-5">
                                            Join
                                        </strong>
                                        <div className="mr-2 lg:mr-5 h-1.875 md:h-2.25 lg:h-3.5 pb-1">
                                            <LogoText
                                                color="#f9a24f"
                                                width="100%"
                                                height="100%"
                                            />
                                        </div>
                                        <strong>and</strong>
                                    </div>{' '}
                                    <strong>
                                        experience the smart way to travel.
                                    </strong>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section>
                    <Row>
                        <Col
                            xs={24}
                            sm={12}
                            className="bg-yellow-1 pt-20 pb-32"
                        >
                            <div
                                className=" ml-auto px-8 md:px-12 lg:px-20 xl:px-24"
                                style={{ maxWidth: '625px' }}
                            >
                                <div className="mx-auto md:ml-auto w-4/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mb-4">
                                    <AdventureSVG />
                                </div>
                                <div className="text-white text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">
                                    Here is where aventure and technology take
                                    place.
                                </div>
                            </div>
                        </Col>
                        <Col xs={24} sm={12} className="bg-white pt-20 pb-32">
                            <div
                                className="px-8 md:px-12 lg:px-20 xl:px-24"
                                style={{ maxWidth: '625px' }}
                            >
                                <div className="mx-auto md:ml-auto w-4/12 md:w-6/12 lg:w-4/12 xl:w-3/12 mb-4">
                                    <MembersSVG />
                                </div>
                                <div className="text-2xl lg:text-3xl xl:text-4xl font-semibold text-center md:text-left">
                                    A membership with the opportunity to travel
                                    around the world.
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section className="bg-sunset bg-cover bg-center relative">
                    <div className="absolute top-0 left-0 right-0 bottom-0 gradient-y-down opacity-30"></div>
                    <div className="section relative flex flex-col justify-center mx-auto py-16 md:py-32">
                        <div
                            className="absolute opacity-20 hidden md:block "
                            style={{
                                top: '5%',
                                bottom: '5%',
                                left: 0,
                                right: 0,
                            }}
                        >
                            <LogoIconSVG />
                        </div>
                        <div
                            className="relative text-center text-5xl lg:text-8xl xl:text-10xl font-bebas-nue text-white lg:mb-16 xl:mb-20 pb-8 md:pb-0"
                            style={{ textShadow: '#5b5b5f 2px 3px 10px' }}
                        >
                            <div>PLANS AND MEMBERSHIPS</div>
                        </div>
                        <Row className="relative lg:px-12">
                            <Col xs={24} md={8}>
                                <div
                                    className="mb-4 mx-auto md:mx-0 md:pr-3 lg:pr-4 xl:pr-0"
                                    style={{ maxWidth: '350px' }}
                                >
                                    <Card />
                                </div>
                            </Col>
                            <Col xs={24} md={8}>
                                <div
                                    className="mb-4 mx-auto"
                                    style={{ maxWidth: '350px' }}
                                >
                                    <Card main />
                                </div>
                            </Col>
                            <Col xs={24} md={8}>
                                <div
                                    className="mx-auto md:ml-auto md:mr-0 md:pl-3 lg:pl-4 xl:pl-0"
                                    style={{ maxWidth: '350px' }}
                                >
                                    <Card />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </section>
                <section>
                    <div className="section px-0 lg:px-25px flex mx-auto py-10 lg:pt-16 lg:pb-20">
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
                                        size={returnValueByScreenWidth(width, {
                                            base: 'middle',
                                            lg: 'large',
                                        })}
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
