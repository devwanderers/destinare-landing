import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Formik, Form, Field } from 'formik'
import { Button, Form as FormAnt, Checkbox } from 'antd'
import * as Yup from 'yup'
import { validations } from '../../../services/yupValidations'
// import { countrys } from '../../../constants/countrys'
import { countries } from '../../../constants/listCountries'

import { AntInput, AntSelect } from '../../../components/CreateAntField/index'
import { actionsAuth } from './../../../store/reducers/auth/index'
// import { HomePath } from '../../../constants/routerConstants'

const schema = Yup.object({
    codeClaim: validations.generic,
    destinationClaimKey: validations.generic,
    termsClaim: validations.generic,
})

const initialValues = {
    codeClaim: '',
    destinationClaimKey: '',
    destinationClaimValue: '',
    termsClaim: false,
    // country: null,
}

const Claim = () => {
    const [terms, setTerms] = useState(false)
    const [message, setMessage] = useState('')
    const [statusMsg, setStatusMsg] = useState(false)

    const dispatch = useDispatch()

    const registerClaim = useCallback(
        (data) => dispatch(actionsAuth.claimComplimentary(data)),
        [dispatch]
    )

    const validateCodeOhana = useCallback(
        (data) => dispatch(actionsAuth.validationCodeOhana(data)),
        [dispatch]
    )

    const handleClaim = useCallback(
        async ({ codeClaim, destinationClaimKey, termsClaim }) => {
            if (termsClaim) {
                try {
                    const destinationClaimValue =
                        countries.find((x) => x.key === destinationClaimKey)
                            ?.value ?? ''
                    const resultValidateCode = await validateCodeOhana({
                        codeClaim,
                        destinationClaimValue,
                    }).unwrap()
                    if (resultValidateCode.status === '1') {
                        const resultClaim = await registerClaim({
                            codeClaim,
                            destinationClaimKey,
                        }).unwrap()
                        setStatusMsg(resultClaim.status)
                        setMessage(resultClaim.message)
                    } else {
                        setStatusMsg(false)
                        setMessage(resultValidateCode.message)
                    }
                } catch (error) {
                    console.log('Error: ', error)
                    setStatusMsg(error.status)
                    setMessage(error.message)
                }
            } else {
                window.alert('accept terms and conditions')
            }
        },
        [validateCodeOhana, registerClaim]
    )

    return (
        <React.Fragment>
            <div className="font-medium mb-2 hidden md:flex">Claiming</div>
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
                                value={values?.codeClaim}
                            />
                        </div>
                        <Field
                            component={AntSelect}
                            name="destinationClaimKey"
                            showSearch
                            // type="email"
                            placeholder="Destination"
                            className="h-12 rounded-lg custom-ant-select"
                            selectOptions={countries.sort((x, y) =>
                                x.value > y.value ? 1 : -1
                            )}
                            // hasFeedback
                            value={values?.destinationClaimKey}
                        />

                        <FormAnt.Item
                            className="mb-0"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
                                },
                            ]}
                        >
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
                                    setTerms(v.target.checked)
                                    console.log(v.target.checked)
                                }}
                                defaultChecked={false}
                                onBlur={handleBlur}
                                //  {values?.termsClaim}
                            >
                                <div
                                    className={`ml-4 text-sm ${
                                        terms
                                            ? 'text-green-2 font-light'
                                            : 'text-red-700 font-light'
                                    }`}
                                >
                                    Agree to Terms and Conditions
                                </div>
                            </Checkbox>
                        </FormAnt.Item>

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
            {
                <div
                    className={`h-40px mb-5 ${
                        statusMsg ? 'text-green-1' : 'text-red-700'
                    }`}
                >
                    {message}
                </div>
            }
        </React.Fragment>
    )
}

Claim.propTypes = {}

export default Claim
