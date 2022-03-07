import React from 'react'
import { Row, Col } from 'antd'

import { DestinareLogoColorSVG } from '../../assets/svg/brand/index'

import LoginContainer from './../../container/Auth/LoginContainer'
import SignUpContainer from './../../container/Auth/SignUpContainer'
import { useHistory } from 'react-router'
import { HomePath } from '../../constants/routerConstants'

const AuthView = ({ auth }) => {
    const FormAuth = auth === 'login' ? LoginContainer : SignUpContainer
    const history = useHistory()
    return (
        <section className="login-content">
            <div className="absolute left-0 bottom-0 top-0 right-0 md:right-2/4 bg-womanBeach bg-cover bg-center md:bg-right md:flex hidden"></div>
            <div className="section relative lg:wrapper mx-auto lg:pl-4 lg:pr-4">
                <Row className="justify-center " style={{ flex: '1' }}>
                    <Col sm={12} className=" flex justify-center ">
                        {/* <div className="col-inner">
                            {auth === 'login' ? (
                                <h2 className="">
                                    Regístrate para apoyar a tus creadores
                                    favoritos
                                </h2>
                            ) : (
                                <h2 className="">
                                    Regístrate para apoyar a tus creadores
                                    favoritos 2
                                </h2>
                            )}
                        </div> */}
                    </Col>
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
                            <FormAuth />
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

AuthView.propTypes = {}

export default AuthView
