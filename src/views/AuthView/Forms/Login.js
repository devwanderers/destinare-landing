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
import { useTranslation } from 'react-i18next'

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
    const { t } = useTranslation(['auth', 'commons'])

    return (
        <React.Fragment>
            <div className="font-medium mb-2">{t('commons:login')}</div>
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
                            placeholder={t('commons:inputs.email')}
                            className="h-12 rounded-lg"
                            hasFeedback
                            value={values?.emailOrUsername.toLowerCase()}
                        />
                        <Field
                            component={AntInputPassword}
                            name="password"
                            type="password"
                            placeholder={t('commons:inputs.password')}
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
                                {t('commons:login')}
                            </Button>
                        </FormAnt.Item>
                        <div className="login-links flex flex-col text-center">
                            <a
                                type="link"
                                className="text-sm h-auto py-0 text-black-1 hover:text-info"
                            >
                                {t('auth:login.forgot_password')}
                            </a>
                            <span
                                className="text-black-1 text-sm h-auto py-0 relative"
                                style={{ top: '-7px' }}
                            >
                                {t('auth:login.no_account')}{' '}
                                <a
                                    className="font-medium text-blue-900 hover:text-info"
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault()

                                        history.push(SignInPath)
                                    }}
                                >
                                    {t('commons:signUp')}
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
