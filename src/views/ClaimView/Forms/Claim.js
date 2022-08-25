import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { Button, Form as FormAnt, Alert, Checkbox } from 'antd'
import * as Yup from 'yup'
import { validations } from '../../../services/yupValidations'
import { countrys } from '../../../constants/countrys'

import { AntInput, AntSelect } from '../../../components/CreateAntField/index'
import { actionsAuth } from './../../../store/reducers/auth/index'
// import { HomePath } from '../../../constants/routerConstants'

const schema = Yup.object({
    codeClaim: validations.generic,
    destinationClaim: validations.generic,
    termsClaim: validations.generic,
})

const initialValues = {
    codeClaim: '',
    destinationClaim: '',
    termsClaim: false,
    // country: null,
}

const Claim = () => {
    // const [terms, setTerms] = useState(false)
    const [showError, setError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

    const dispatch = useDispatch()

    const registerClaim = useCallback(
        (data) => dispatch(actionsAuth.claimComplimentary(data)),
        [dispatch]
    )

    const handleClaim = useCallback(
        async ({ codeClaim, destinationClaim, termsClaim }) => {
            try {
                window.alert('entro al try')
                if (termsClaim) {
                    window.alert('entro al if')
                    await registerClaim({
                        codeClaim,
                        destinationClaim,
                    }).unwrap()
                    window.alert('Register Claim')
                    // history.push(HomePath)
                    window.alert('fui a home')
                } else {
                    window.alert('accept terms and conditions')
                }
            } catch (error) {
                window.alert('entro al catch')
                console.log('Error: ', error)
                if (error?.error) {
                    setError(true)
                    setErrorMessage(error.message)
                }
            } finally {
                window.alert('finalyuyyy')
            }
        },
        [registerClaim]
    )

    // const handleClaim2 = () => {
    //     console.log('Testing!!!')
    //     console.log('Testing!!!2222')
    //     handleClaim()
    // }

    return (
        <React.Fragment>
            <div className="font-medium mb-2">Claiming</div>
            <Formik
                validationSchema={schema}
                initialValues={initialValues}
                onSubmit={handleClaim}
            >
                {({ values, isSubmitting, setValues, handleBlur }) => (
                    <Form className="mb-4">
                        <div className="flex flex-row space-x-2">
                            <Field
                                component={AntInput}
                                type="text"
                                name="codeClaim"
                                placeholder="Code"
                                className="h-12 rounded-lg"
                                hasFeedback
                                value={values?.firstName}
                            />
                        </div>
                        <Field
                            component={AntSelect}
                            name="destinationClaim"
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
                        <Checkbox
                            className="mb-5"
                            name="termsClaim"
                            // onChange={(v) => {
                            //     setTerms(v.target.checked)
                            // }}
                            onChange={(v) => {
                                setValues({
                                    ...values,
                                    termsClaim: v.target.checked
                                        ? v.target.checked.toString()
                                        : '',
                                })
                            }}
                            defaultChecked={false}
                            onBlur={handleBlur}
                            //  {values?.termsClaim}
                        >
                            <div className="ml-4 font-semibold text-sm">
                                I agree to the terms and conditions
                            </div>
                        </Checkbox>

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
