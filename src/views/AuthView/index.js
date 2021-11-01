import React from 'react'
import { Row, Col } from 'antd'

import { OnlyFansLogoSVG } from '../../assets/svg/brand/index'

import LoginContainer from './../../container/Auth/LoginContainer'
import SigninContainer from './../../container/Auth/SigninContainer'

const AuthView = ({ auth }) => {
    const FormAuth = auth === 'login' ? LoginContainer : SigninContainer

    return (
        <section className="login-content">
            <div className="absolute left-0 bottom-0 top-0 right-0 md:right-2/4 bg-sunset3 bg-cover bg-right md:bg-right hidden md:flex"></div>
            <div className="section relative lg:wrapper mx-auto lg:pl-4 lg:pr-4">
                <Row className="justify-center " style={{ flex: '1' }}>
                    <Col sm={12} className=" flex justify-center ">
                        <div className="col-inner">
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
                        </div>
                    </Col>
                    <Col sm={12} className="flex  justify-center">
                        <div className="col-inner">
                            <h1 className="mb-2 flex justify-center ">
                                <a>
                                    <OnlyFansLogoSVG width={245} height={64} />
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
