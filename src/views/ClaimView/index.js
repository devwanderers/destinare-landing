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
            <div className="absolute left-0 bottom-0 top-0 right-0 md:right-2/4 bg-womanSwingClaim bg-cover bg-center md:bg-right md:flex hidden"></div>
            <div className="max-w-1280px px-6 relative lg:wrapper mx-auto lg:pl-4 lg:pr-4">
                <Row className="justify-center " style={{ flex: '1' }}>
                    <Col sm={12} className=" flex justify-center "></Col>
                    <Col sm={12} className="flex  justify-center">
                        <div className="col-inner">
                            <h1 className="mb-2 flex justify-center ">
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
