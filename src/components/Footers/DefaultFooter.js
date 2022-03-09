import React from 'react'
import { Col, Row } from 'antd'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { windowOpen } from '../../services/windowServices'
import { whitePaperLink } from './../../constants/linksConstranst'

const DefaultFooter = (props) => {
    return (
        <footer className="py-12 ">
            <div className="max-w-1280px px-6 mx-auto">
                <div className="flex flex-row justify-between border-b border-gray-300 pb-8">
                    <div className="flex flex-row justify-between max-h-full w-full lg:w-6/12  items-center">
                        {/* <div className="flex-1">
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
                        </div> */}
                    </div>
                </div>
                <div className="flex justify-end my-8">
                    <div className="space-x-4 flex flex-row text-2xl">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                windowOpen(
                                    'https://www.facebook.com/Destinareio-104317588754693'
                                )
                            }}
                        >
                            <span>
                                <FaFacebook />
                            </span>
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                windowOpen('https://twitter.com/Destinare_io')
                            }}
                        >
                            <span>
                                <FaTwitter />
                            </span>
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                windowOpen(
                                    'https://www.instagram.com/destinare.io/'
                                )
                            }}
                        >
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
                            <a onClick={() => windowOpen(whitePaperLink)}>
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
