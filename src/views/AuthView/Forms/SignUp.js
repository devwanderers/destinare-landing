import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, Form as FormAnt, Alert, Input } from 'antd'
import * as Yup from 'yup'
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons'
import { validations } from '../../../services/yupValidations'
import { useHistory } from 'react-router'

import { LoginInPath } from '../../../constants/routerConstants'
import { countrys } from './../../../constants/countrys'
import { availableLangues } from './../../../constants/language'
import useAuth from './../../../hooks/useAuth'
import {
    AntInput,
    AntInputPassword,
    AntSelect,
} from '../../../components/CreateAntField/index'

const schema = Yup.object({
    firstName: validations.name,
    lastName: validations.name,
    email: validations.mail,
    country: validations.generic,
    language: validations.generic,
    // userName: validations.userName,
    discordId: validations.generic,
    // walletAddress: validations.walletAddress,
    password: validations.password,
    confirmPassword: validations.passwordConfirmation,
})

const initialValues = {
    firstName: '',
    lastName: '',
    userName: '',
    email: '',
    // country: null,
    discordId: '',
    password: '',
    confirmPassword: '',
}

const SigUp = ({
    onSubmit,
    showError,
    errorMessage,
    disabled,
    walletAddress,
}) => {
    const history = useHistory()
    const { login } = useAuth()

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
                            value={values?.email.toLowerCase()}
                        />
                        <Field
                            component={AntSelect}
                            name="country"
                            showSearch
                            // type="email"
                            placeholder="Country of Residence"
                            className="h-12 rounded-lg custom-ant-select"
                            selectOptions={countrys}
                            // hasFeedback
                            value={values?.country}
                        />
                        <Field
                            component={AntSelect}
                            name="language"
                            showSearch
                            // type="email"
                            placeholder="Preferred Language"
                            className="h-12 rounded-lg custom-ant-select"
                            selectOptions={availableLangues}
                            // hasFeedback
                            value={values?.language}
                        />
                        {/* <Field
                            component={AntInput}
                            type="text"
                            name="userName"
                            placeholder="Username"
                            className="h-12 rounded-lg"
                            hasFeedback
                            value={values?.userName}
                        /> */}
                        <Field
                            component={AntInput}
                            type="text"
                            name="discordId"
                            placeholder="Discord ID"
                            className="h-12 rounded-lg"
                            hasFeedback
                            value={values?.discordId}
                        />
                        <Input
                            type="text"
                            name="walletAddress"
                            placeholder="Wallet Address"
                            className="h-12 rounded-lg mb-5"
                            value={walletAddress ?? ''}
                            disabled
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
                                type="primary"
                                block
                                className="text-sm px-4 py-2 py h-12 rounded-full font-medium"
                                htmlType="submit"
                                loading={isSubmitting}
                                style={{
                                    paddingTop: '9px',
                                    paddingBottom: '9px',
                                }}
                                disabled={disabled}
                            >
                                Register
                            </Button>
                            <Button
                                type="primary"
                                block
                                className="text-sm px-4 py-2 mt-4 py h-12 rounded-full font-medium"
                                style={{
                                    paddingTop: '9px',
                                    paddingBottom: '9px',
                                }}
                                onPointerDown={login}
                                disabled={walletAddress}
                            >
                                Connect Metamask
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
            {!showError && <div className="h-40px mb-5"></div>}
        </React.Fragment>
    )
}

SigUp.propTypes = {}

export default SigUp
