import React from 'react'
import { Layout, Button } from 'antd'
import HeaderText from './../components/DisplayText/Header'
import { GiHamburgerMenu } from 'react-icons/gi'
import Paragraph from './../components/DisplayText/Paragraph'

const { Header, Content } = Layout

const LandingPage = () => {
    return (
        <Layout className="landing-page min-w-minMobileWidth">
            <Header className="bg-transparent h-20 flex justify-between py-3">
                <span className="css-generic items-center justify-center text-2xl h-full px-4 cursor-pointer">
                    <GiHamburgerMenu />
                </span>
                <div className="space-x-5 hidden md:block">
                    <Button
                        type="link"
                        className="h-full tracking-wide text-lg leading-none text-white font-light"
                    >
                        ABOUT US
                    </Button>
                    <Button
                        type="primary"
                        className="gradient-g text-xl leading-none h-full py-3 px-10 tracking-wide rounded-none border-none"
                    >
                        LOGIN
                    </Button>
                </div>
            </Header>
            <Content>
                <section className="bg-travellerbg bg-cover bg-center -mt-20">
                    <div
                        className="css-generic h-screen section justify-center mx-auto"
                        style={{ minHeight: '640px' }}
                    >
                        <div className=" bg-blue-6 css-generic items-center">
                            <div>s</div>
                            <div>
                                <Paragraph className="text-center text-2xl text-white mb-4">
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
                <section className="bg-white bg-cover bg-center">
                    <div
                        className="css-generic section mx-auto"
                        style={{ minHeight: '640px' }}
                    >
                        <div className=" css-generic flex-row flex-grow flex-shrink">
                            <div className="css-generic flex-grow h-14 bg-blue-6">
                                s
                            </div>
                            <div className="css-generic flex-grow h-14 bg-blue-2">
                                s
                            </div>
                            <div className="css-generic flex-grow h-14 bg-blue-6">
                                s
                            </div>
                            <div className="css-generic flex-grow h-14 bg-blue-2">
                                s
                            </div>
                        </div>
                    </div>
                </section>
            </Content>
            <footer className="bg-blue-5 py-12 border-blue-4 border-solid border-t hidden lg:block">
                <div className="section">
                    <div className="css-generic flex-row justify-between">
                        <div className="css-generic flex-grow max-h-full w-6/12 ">
                            <div className="css-generic items-center w-64">
                                <div className="css-generic w-full mb-3 px-8"></div>
                                <HeaderText
                                    base="2xl"
                                    className="text-blue-4 font-semibold font-saira-condensed"
                                >
                                    8,782 unique Wanderers
                                </HeaderText>
                            </div>
                        </div>
                        <div className="css-generic flex-grow max-h-full w-6/12  items-center">
                            <div className="css-generic">
                                <h5 className="text-capitalize text-xl text-blue-4 tracking-wide font-bold mb-2">
                                    Home
                                </h5>
                                <ul className="list-none font-saira-condensed font-semibold">
                                    <li className="mb-2">
                                        <a
                                            className="text-blue-4 hover:text-gray-400"
                                            href="https://whitepaper.swapp.ee/"
                                        >
                                            Terms of service
                                        </a>
                                    </li>
                                    <li className=" mb-2">
                                        <a
                                            className="text-blue-4 hover:text-gray-400"
                                            href="https://app.uniswap.org/#/swap?"
                                        >
                                            Smart Contract
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Layout>
    )
}

export default LandingPage
