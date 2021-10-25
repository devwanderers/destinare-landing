import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const DefaultFooter = (props) => {
    return (
        <Footer
            className=" bg-primary-600  text-gray-200 footer-1 py-8 sm:py-12 "
            // className="bg-primary-600 text-gray-200 footer-1 bg-gray-100 py-8 sm:py-12"
        >
            <div className="container mx-auto px-4">
                <div className="flex flex-col">
                    <div className="row-1">
                        <div className="flex flex-row flex-wrap justify-around">
                            <div className="columns">
                                <h5 className="text-capitalize text-xl text-white tracking-wide font-bold my-6">
                                    Resources
                                </h5>
                                <ul className="list-none footer-links">
                                    <li className=" mb-2">
                                        <a
                                            className="text-gray-300 hover:text-gray-400"
                                            href="https://whitepaper.swapp.ee/"
                                        >
                                            Whitepaper
                                        </a>
                                    </li>
                                    <li className=" mb-2">
                                        <a
                                            className="text-gray-300 hover:text-gray-400"
                                            href="https://app.uniswap.org/#/swap?"
                                        >
                                            Get token
                                        </a>
                                    </li>
                                    <li className=" mb-2">
                                        <a
                                            className="text-gray-300 hover:text-gray-400"
                                            href="https://dapp.swapp.ee"
                                            target="_self"
                                        >
                                            Staking
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="columns">
                                <h5 className="text-capitalize text-xl text-white tracking-wide font-bold my-6">
                                    Useful Links
                                </h5>
                                <ul className="list-none footer-links">
                                    <li className=" mb-2">
                                        <a
                                            className="text-gray-300 hover:text-gray-400"
                                            href="https://forum.swapp.ee"
                                        >
                                            Forum
                                        </a>
                                    </li>
                                    <li className=" mb-2">
                                        <a
                                            className="text-gray-300 hover:text-gray-400"
                                            href="https://blog.swapp.ee"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li className=" mb-2">
                                        <a
                                            className="text-gray-300 hover:text-gray-400"
                                            href="/team"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li className=" mb-2">
                                        <a
                                            className="text-gray-300 hover:text-gray-400"
                                            href="/privacy-policy"
                                        >
                                            Privacy &amp; Terms
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="columns">
                                <h5 className="text-capitalize text-xl text-white tracking-wide font-bold my-6">
                                    Company
                                </h5>
                                <ul className="list-none footer-links">
                                    <li className=" mb-2">
                                        <a
                                            className="text-gray-300 hover:text-gray-400"
                                            href="https://swapp.ee"
                                        >
                                            swapp.ee
                                        </a>
                                    </li>
                                    <li className=" mb-2">
                                        <a
                                            className="text-gray-300 hover:text-gray-400"
                                            href="mailto:support@swapp.ee"
                                        >
                                            support@swapp.ee
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="shrink w-40 ">
                                <div className="my-6 w-full">
                                    <div
                                        // data-gatsby-image-wrapper=""
                                        className="w-20 lg:w-auto logo w-full m-0"
                                    >
                                        <div
                                            style={{
                                                maxWidth: '6476px',
                                                display: 'block',
                                            }}
                                        ></div>
                                    </div>
                                    <p className="slogan text-white">
                                        Start getting paid for the data you are
                                        giving away.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row-2 border-t border-gray-200 border-opacity-50 sm:mx-6 sm:px-20 pt-5">
                        <div className="flex flex-row flex-wrap justify-center">
                            <div className="copyright xs:mx-auto sm:mx-0">
                                <span>COPYRIGHT © 2021 SWAPP.</span>
                            </div>
                            {/* <div className="social xs:mx-auto xs:mt-4 sm:mx-0 sm:mt-0"></div> */}
                        </div>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default DefaultFooter
