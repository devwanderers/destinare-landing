import React, { useState } from 'react'
import { Row, Col, Form, Input, Button } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
// import { OnlyFansLogoSVG } from './../assets/svg/brand/index'

const SigninView = (props) => {
    const [form] = Form.useForm()
    const [requiredMark, setRequiredMarkType] = useState('optional')

    const onRequiredTypeChange = ({ requiredMarkValue }) => {
        setRequiredMarkType(requiredMarkValue)
    }

    return (
        <section className="login-content">
            <div className="lg:wrapper mx-auto lg:pl-4 lg:pr-4">
                <Row className="justify-center" style={{ flex: '1' }}>
                    <Col sm={12} className=" flex justify-center ">
                        <div className="col-inner">
                            <h1 className="mb-2">
                                <a>
                                    {/* <OnlyFansLogoSVG width={245} height={64} /> */}
                                </a>
                            </h1>
                            <h2 className="">
                                Regístrate para apoyar a tus creadores favoritos
                            </h2>
                        </div>
                    </Col>
                    <Col sm={12} className="flex justify-center">
                        <div className="col-inner">
                            <Form
                                className="mb-4"
                                form={form}
                                layout="vertical"
                                initialValues={{
                                    requiredMarkValue: requiredMark,
                                }}
                                onValuesChange={onRequiredTypeChange}
                                requiredMark={requiredMark}
                            >
                                <Form.Item
                                    label="Login"
                                    required
                                    // tooltip="This is a required field"
                                >
                                    <Input
                                        className="h-12 rounded-lg"
                                        placeholder="Email or Username"
                                    />
                                </Form.Item>
                                <Form.Item
                                    required
                                    tooltip="This is a required field"
                                >
                                    <Input.Password
                                        className="h-12 rounded-lg"
                                        placeholder="Password"
                                        iconRender={(visible) =>
                                            visible ? (
                                                <EyeTwoTone />
                                            ) : (
                                                <EyeInvisibleOutlined />
                                            )
                                        }
                                    />
                                </Form.Item>
                                <Form.Item className="mb-0">
                                    <Button
                                        type="primary"
                                        block
                                        className="text-sm px-4 py-2 py h-12 rounded-full font-medium"
                                        style={{
                                            paddingTop: '9px',
                                            paddingBottom: '9px',
                                        }}
                                    >
                                        LOGIN
                                    </Button>
                                </Form.Item>
                            </Form>
                            <div className="login-links">
                                <Button
                                    type="link"
                                    block
                                    className="text-sm h-auto py-0"
                                >
                                    ¿Has olvidado tu contraseña?
                                </Button>
                                <Button
                                    type="link"
                                    block
                                    className="text-sm h-auto py-0 relative"
                                    style={{ top: '-7px' }}
                                >
                                    Registrate para Only Fans
                                </Button>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

SigninView.propTypes = {}

export default SigninView
