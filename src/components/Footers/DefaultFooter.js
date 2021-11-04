import React from 'react'
import { Col, Row } from 'antd'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const DefaultFooter = (props) => {
    return (
        <footer className="py-12 ">
            <div className="section ">
                <div className="flex flex-row justify-between border-b border-gray-300 pb-8">
                    <div className="flex flex-row justify-between max-h-full w-full lg:w-6/12  items-center">
                        <div className="flex-1">
                            <h5 className="text-capitalize text-xl  tracking-wide font-bold mb-5">
                                Home
                            </h5>
                            <ul className="list-none font-saira-condensed font-semibold">
                                <li className="mb-2">
                                    <a
                                        className=" hover:text-gray-400"
                                        href="https://whitepaper.swapp.ee/"
                                    >
                                        Terms of service
                                    </a>
                                </li>
                                <li className=" mb-2">
                                    <a
                                        className=" hover:text-gray-400"
                                        href="https://app.uniswap.org/#/swap?"
                                    >
                                        Smart Contract
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h5 className="text-capitalize text-xl  tracking-wide font-bold mb-5">
                                Home
                            </h5>
                            <ul className="list-none font-saira-condensed font-semibold">
                                <li className="mb-2">
                                    <a
                                        className=" hover:text-gray-400"
                                        href="https://whitepaper.swapp.ee/"
                                    >
                                        Terms of service
                                    </a>
                                </li>
                                <li className=" mb-2">
                                    <a
                                        className=" hover:text-gray-400"
                                        href="https://app.uniswap.org/#/swap?"
                                    >
                                        Smart Contract
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1">
                            <h5 className="text-capitalize text-xl  tracking-wide font-bold mb-5">
                                Home
                            </h5>
                            <ul className="list-none font-saira-condensed font-semibold">
                                <li className="mb-2">
                                    <a
                                        className=" hover:text-gray-400"
                                        href="https://whitepaper.swapp.ee/"
                                    >
                                        Terms of service
                                    </a>
                                </li>
                                <li className=" mb-2">
                                    <a
                                        className=" hover:text-gray-400"
                                        href="https://app.uniswap.org/#/swap?"
                                    >
                                        Smart Contract
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end my-8">
                    <div className="space-x-4 flex flex-row text-2xl">
                        <a>
                            <span>
                                <FaFacebook />
                            </span>
                        </a>
                        <a>
                            <span>
                                <FaTwitter />
                            </span>
                        </a>
                        <a>
                            <span>
                                <FaInstagram />
                            </span>
                        </a>
                    </div>
                </div>
                <Row>
                    <Col xs={12}>
                        <div></div>
                        <div>
                            We are a business located in different parts of the
                            world. Our team is working remotely
                        </div>
                    </Col>
                    <Col xs={12} className="flex justify-end">
                        <div></div>
                        <div className="space-x-2">
                            <a>
                                <span>Offices</span>
                            </a>
                            <a>
                                <span>WHITE PAPER</span>
                            </a>
                            <a>
                                <span>Marketing & Campaigns </span>
                            </a>
                            <a>
                                <span>Help Center</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default DefaultFooter
