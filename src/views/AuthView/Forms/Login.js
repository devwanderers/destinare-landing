import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, Form as FormAnt, Alert } from 'antd'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import * as Yup from 'yup'
import { useHistory } from 'react-router'
import { validations } from './../../../services/yupValidations'
import {
    AntInput,
    AntInputPassword,
} from './../../../components/CreateAntField/index'
import { SignInPath } from '../../../constants/routerConstants'

const schema = Yup.object({
    emailOrUsername: validations.mail,
    password: validations.generic,
})

const initialValues = {
    emailOrUsername: '',
    password: '',
}

const Login = ({ onSubmit, showError, errorMessage }) => {
    const history = useHistory()

    return (
        <React.Fragment>
            <div className="font-medium mb-2">Log in</div>
            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={onSubmit}
            >
                {({ isSubmitting, values }) => (
                    <Form className="mb-4">
                        <Field
                            component={AntInput}
                            name="emailOrUsername"
                            type="email"
                            placeholder="Email"
                            className="h-12 rounded-lg"
                            hasFeedback
                            value={values?.emailOrUsername}
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
                        {showError && (
                            <Alert
                                className="mb-5"
                                message={errorMessage}
                                type="error"
                                showIcon
                            />
                        )}
                        <FormAnt.Item className="mb-0">
                            <Button
                                block
                                type="primary"
                                htmlType="submit"
                                className="text-sm px-4 py-2 py h-12 rounded-full font-medium"
                                // disabled={isSubmitting}
                                loading={isSubmitting}
                                style={{
                                    paddingTop: '9px',
                                    paddingBottom: '9px',
                                }}
                            >
                                LOGIN
                            </Button>
                        </FormAnt.Item>
                        <div className="login-links flex flex-col text-center">
                            <a
                                type="link"
                                className="text-sm h-auto py-0 text-black-1 hover:text-info"
                            >
                                Forgot password?
                            </a>
                            <span
                                className="text-black-1 text-sm h-auto py-0 relative"
                                style={{ top: '-7px' }}
                            >
                                {"Don't have an account? "}
                                <a
                                    className="font-medium text-blue-900 hover:text-info"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()

                                        history.push(SignInPath)
                                    }}
                                >
                                    Sign up
                                </a>
                            </span>
                        </div>
                    </Form>
                )}
            </Formik>
            {!showError && <div className="h-40px mb-5"></div>}
        </React.Fragment>
    )
}

Login.propTypes = {}

export default Login
