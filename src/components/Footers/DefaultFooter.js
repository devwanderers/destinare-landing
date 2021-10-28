import React from 'react'
import { Layout } from 'antd'

const { Footer } = Layout

const DefaultFooter = (props) => {
    return (
        <Footer className=" bg-white text-gray-1 footer-l">
            <div className="lg:wrapper mx-auto px-4">
                <div className="flex flex-col">
                    <div className="row-1">
                        <div className="flex flex-row flex-wrap justify-around">
                            <div className="columns">
                                <ul className="list-none footer-links">
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="https://whitepaper.swapp.ee/"
                                        >
                                            Whitepaper
                                        </a>
                                    </li>
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="https://app.uniswap.org/#/swap?"
                                        >
                                            Get token
                                        </a>
                                    </li>
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="https://dapp.swapp.ee"
                                            target="_self"
                                        >
                                            Staking
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="columns">
                                <ul className="list-none footer-links">
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="https://forum.swapp.ee"
                                        >
                                            Forum
                                        </a>
                                    </li>
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="https://blog.swapp.ee"
                                        >
                                            Blog
                                        </a>
                                    </li>
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="/team"
                                        >
                                            Team
                                        </a>
                                    </li>
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="/privacy-policy"
                                        >
                                            Privacy &amp; Terms
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="columns">
                                <ul className="list-none footer-links">
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="https://swapp.ee"
                                        >
                                            swapp.ee
                                        </a>
                                    </li>
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="mailto:support@swapp.ee"
                                        >
                                            support@swapp.ee
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="columns">
                                <ul className="list-none footer-links">
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="https://swapp.ee"
                                        >
                                            swapp.ee
                                        </a>
                                    </li>
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="mailto:support@swapp.ee"
                                        >
                                            support@swapp.ee
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="columns">
                                <ul className="list-none footer-links">
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="https://swapp.ee"
                                        >
                                            swapp.ee
                                        </a>
                                    </li>
                                    <li className=" mb-18px">
                                        <a
                                            className=" hover:text-gray-400"
                                            href="mailto:support@swapp.ee"
                                        >
                                            support@swapp.ee
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Footer>
    )
}

export default DefaultFooter
