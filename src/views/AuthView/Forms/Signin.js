import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, Form as FormAnt } from 'antd'
import * as Yup from 'yup'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { validations } from './../../../services/yupValidations'
import { useHistory } from 'react-router'

import { LoginInPath } from './../../../constants/routerConstants'
import {
    AntInput,
    AntInputPassword,
} from './../../../components/CreateAntField/index'

const schema = Yup.object({
    firstName: validations.name,
    lastName: validations.name,
    email: validations.mail,
    userName: validations.userName,
    password: validations.password,
    confirmPassword: validations.passwordConfirmation,
})

const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    password: '',
}

const Sigin = ({ onSubmit }) => {
    const history = useHistory()
    console.log({ onSubmit })
    return (
        <React.Fragment>
            <div className="font-medium mb-2">Sign up</div>
            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ values, isSubmitting }) => (
                    <Form className="mb-4">
                        <div className="flex flex-row space-x-2">
                            <Field
                                component={AntInput}
                                type="text"
                                name="firstName"
                                placeholder="* First Name"
                                className="h-12 rounded-lg"
                                hasFeedback
                                value={values?.firstName}
                            />
                            <Field
                                component={AntInput}
                                type="text"
                                name="lastName"
                                placeholder="* Last Name"
                                className="h-12 rounded-lg"
                                hasFeedback
                                value={values?.lastName}
                            />
                        </div>
                        <Field
                            component={AntInput}
                            name="email"
                            type="email"
                            placeholder="Email"
                            className="h-12 rounded-lg"
                            hasFeedback
                            value={values?.email}
                        />
                        <Field
                            component={AntInput}
                            type="text"
                            name="userName"
                            placeholder="Username"
                            className="h-12 rounded-lg"
                            hasFeedback
                            value={values?.user}
                        />
                        <Field
                            component={AntInputPassword}
                            name="password"
                            type="password"
                            placeholder="Password"
                            className="h-12 rounded-lg"
                            hasFeedback
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeTwoTone />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                            value={values?.password}
                        />
                        <Field
                            component={AntInputPassword}
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm Password"
                            className="h-12 rounded-lg"
                            hasFeedback
                            iconRender={(visible) =>
                                visible ? (
                                    <EyeTwoTone />
                                ) : (
                                    <EyeInvisibleOutlined />
                                )
                            }
                            value={values?.confirmPassword}
                        />
                        <FormAnt.Item className="mb-0">
                            <Button
                                type="primary"
                                block
                                className="text-sm px-4 py-2 py h-12 rounded-full font-medium"
                                htmlType="submit"
                                loading={isSubmitting}
                                style={{
                                    paddingTop: '9px',
                                    paddingBottom: '9px',
                                }}
                            >
                                Register
                            </Button>
                        </FormAnt.Item>
                    </Form>
                )}
            </Formik>

            <div className="login-links text-center">
                <span
                    className="text-black-1 text-sm h-auto py-0 relative"
                    style={{ top: '-7px' }}
                >
                    Already have an account.
                    <a
                        className="font-medium text-blue-200 hover:text-info"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault()

                            history.push(LoginInPath)
                        }}
                    >
                        {' '}
                        Log in
                    </a>
                </span>
            </div>
        </React.Fragment>
    )
}

Sigin.propTypes = {}

export default Sigin
