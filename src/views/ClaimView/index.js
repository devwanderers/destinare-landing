import React from 'react'
import { Row, Col } from 'antd'

import { DestinareLogoColorSVG } from '../../assets/svg/brand/index'

import { useHistory } from 'react-router'
import { HomePath } from '../../constants/routerConstants'
import Claim from './Forms/Claim'

const ClaimView = ({ auth }) => {
    const history = useHistory()
    return (
        <section className="login-content">
            {/* <div className="absolute left-0 bottom-0 top-0 right-0 md:right-2/4 bg-womanSwingClaim bg-cover bg-center md:bg-right md:flex hidden"></div> */}
            <div className="absolute left-0 bottom-0 top-0 right-0  sm:right-2/4 md:right-2/4 md:bg-womanSwingClaim md:bg-cover md:bg-center sm:bg-none">
                <div className="mt-12 md:flex md:flex-col justify-center items-center align-middle hidden ">
                    <div className="px-11 inline-block font-bold font-montserrat text-transparent opacity-90 sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl  tracking-widest  bg-clip-text bg-gradient-to-tr from-blue-10 via-blue-12 to-blue-11 ">
                        <label>CLAIM YOUR</label>
                    </div>
                    <div className="bg-blue-9 bg-opacity-75 p-0 sm:px-5 md:px-4 px-10 inline-block  font-thin font-bebas-nue text-white sm:text-xl  md:text-2xl lg:text-4xl xl:text-5xl  tracking-widest">
                        <label className="">COMPLIMENTARY TRIP </label>
                    </div>
                </div>
            </div>
            <div className="max-w-1280px px-5 relative lg:wrapper mx-auto sm:pl-12 lg:pl-4 lg:pr-4">
                <Row className="justify-center " style={{ flex: '1' }}>
                    <Col
                        sm={12}
                        className=" md:flex justify-center hidden  "
                    ></Col>
                    <Col sm={12} className="flex  justify-center">
                        <div className="col-inner">
                            <h1 className="mb-10 flex justify-center ">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()
                                        history.push(HomePath)
                                    }}
                                >
                                    <DestinareLogoColorSVG
                                        width={245}
                                        height={64}
                                    />
                                </a>
                            </h1>
                            <div className="mt-12 mb-8 flex flex-col justify-center items-center align-middle md:hidden ">
                                <div className="px-11 inline-block font-bold font-montserrat text-transparent opacity-90 text-lg  tracking-widest  bg-clip-text bg-gradient-to-tr from-blue-10 via-blue-12 to-blue-11 ">
                                    <label>CLAIMING YOUR</label>
                                </div>
                                <div className="bg-blue-9 bg-opacity-75 p-0 px-3 inline-block  font-thin font-bebas-nue text-white text-lg  tracking-widest ">
                                    <label className="">
                                        COMPLIMENTARY TRIP{' '}
                                    </label>
                                </div>
                            </div>
                            <Claim />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

ClaimView.propTypes = {}

export default ClaimView
