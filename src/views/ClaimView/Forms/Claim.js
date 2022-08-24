import React from 'react'
import { Formik, Form, Field } from 'formik'
import { Button, Form as FormAnt, Alert } from 'antd'
import * as Yup from 'yup'
import { validations } from '../../../services/yupValidations'
import { countrys } from '../../../constants/countrys'

import { AntInput, AntSelect } from '../../../components/CreateAntField/index'

const schema = Yup.object({
    firstName: validations.name,
    lastName: validations.name,
    email: validations.mail,
    country: validations.generic,
    language: validations.generic,
    password: validations.password,
    confirmPassword: validations.passwordConfirmation,
})

const initialValues = {
    firstName: '',
    // country: null,
}

const Claim = ({ onSubmit, showError, errorMessage }) => {
    return (
        <React.Fragment>
            <div className="font-medium mb-2">Claiming</div>
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
                                name="CodeClaim"
                                placeholder="Code"
                                className="h-12 rounded-lg"
                                hasFeedback
                                value={values?.firstName}
                            />
                        </div>
                        <Field
                            component={AntSelect}
                            name="DestinationClaim"
                            showSearch
                            // type="email"
                            placeholder="Destination"
                            className="h-12 rounded-lg custom-ant-select"
                            selectOptions={countrys}
                            // hasFeedback
                            value={values?.country}
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
                            >
                                Activate Trip
                            </Button>
                        </FormAnt.Item>
                    </Form>
                )}
            </Formik>
            {!showError && <div className="h-40px mb-5"></div>}
        </React.Fragment>
    )
}

Claim.propTypes = {}

export default Claim
