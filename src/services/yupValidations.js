import * as Yup from 'yup'
import validator from 'validator'

export const SUPPORTED_FORMATS = ['image/jpg', 'image/jpeg', 'image/png']

const FILE_SIZE = 100 * 1024

export const regex = {
    alpha: /^[A-Za-z]+$/,
    alphaNumeric: /[a-zA-Z0-9]/,
    atLeastOneUpperCase: /[A-Z]/,
    phoneNumber:
        /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/,
    exact5: /^[0-9]{5}$/,
}

export const validations = {
    password: Yup.string()
        .min(8, 'Too Short!')
        .max(64, 'Too Long!')
        .matches(
            regex.atLeastOneUpperCase,
            'Must contain al least one uppercase letter.'
        )
        .required('Required'),
    passwordConfirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Passwords must match')
        .required('Required'),
    userName: Yup.string()
        .min(3, 'Too Short!')
        .max(64, 'Too Long!')
        .test(
            'alphaNumeric',
            'Must contain only letters and numbers.',
            (value) => value && validator.isAlphanumeric(value)
        )
        .required('Required'),
    walletAddress: Yup.string()
        .min(3, 'Too Short!')
        .max(64, 'Too Long!')
        .test(
            'alphaNumeric',
            'Must be a valid wallet address.',
            (value) => value && validator.isEthereumAddress(value)
        )
        .required('Required'),
    mail: Yup.string()
        .max(64, 'Too Long!')
        .lowercase('Must contain only lower case')
        .email('Must be a valid email format. example@email.com')
        .required('Required'),
    phone: Yup.string()
        .matches(regex.phoneNumber, 'Must be a valid phone number.')
        .required('Required'),
    name: Yup.string()
        .min(3, 'Too Short!')
        .max(30, 'Too Long!')
        .test(
            'alpha',
            'Must contain only letters.',
            (value) =>
                !value || (value && validator.isAlpha(value.replace(' ', '')))
        ),
    // .required('Required'),
    birthDate: Yup.date().required('Required'),
    country: Yup.string().required('Required'),
    state: Yup.string().required('Required'),
    city: Yup.string().required('Required'),
    line: Yup.string().required('Required'),
    postalCode: Yup.string()
        .matches(regex.exact5, 'Must be exactly 5 digits')
        .required('Required'),
    file: Yup.mixed()
        .required('A file is required')
        .test(
            'fileSize',
            'File too large',
            (value) => value && value[0].size <= FILE_SIZE
        )
        .test(
            'fileFormat',
            'Unsupported Format',
            (value) => value && SUPPORTED_FORMATS.includes(value[0].type)
        )
        .required('Required'),
    min20Usd: Yup.mixed()
        .required('Required')
        .test('usdAmount', 'Minimum to invest is 20 USD', (value) => {
            if (value) {
                let _v = value
                _v = _v.replace(/\D/g, '')
                _v = parseFloat(_v)
                return _v >= 20.0
            }
            return false
        }),
    no0Usd: Yup.mixed()
        .required('Required')
        .test('usdAmount', 'Usd amount must be higher than 0', (value) => {
            if (value) {
                let _v = value
                _v = parseFloat(_v)
                return _v > 0.0
            }
            return false
        }),
    generic: Yup.string().max(64, 'Too Long!').required('Required'),
    boolean: Yup.bool().oneOf([true], 'Field must be checked'),
    onlyNumber: Yup.mixed()
        .required('Required')
        .test('onlyNumber', 'Field must be a number', (value) => {
            if (value) {
                const _v = value
                const isnum = /^\d+$/.test(_v)

                return isnum
            }
            return false
        }),
    isColor: Yup.mixed()
        .required('Required')
        .test(
            'color',
            'Field must be a valid color format. Examples. RGBA: rgba(0, 0, 0, 1), HEXA: #000000, RGB: rgb(0,0,0), Color: red',
            (value) => {
                if (value) {
                    const s = new Option().style
                    s.color = value
                    return s.color !== ''
                }
                return false
            }
        ),
    number: Yup.number().required('Required'),
    array: Yup.array().required('Required'),
    validateIsNotCurrentUser: (currentUser, currentMembers) => {
        return Yup.mixed()
            .required('Required')
            .test('validUserName', 'You can not add yourself', (value) => {
                if (value) {
                    if (
                        value === currentUser.userName ||
                        value === currentUser.userMail
                    )
                        return false
                    return true
                }
                return false
            })
            .test(
                'validateIsNotExistingMember',
                'You can not add existing members',
                (value) => {
                    if (value) {
                        let valid = true

                        for (
                            let index = 0;
                            index < currentMembers.length;
                            index++
                        ) {
                            const { userName, userMail } = currentMembers[index]
                            if (value === userName || value === userMail) {
                                valid = false
                                break
                            }
                        }
                        return valid
                    }
                    return false
                }
            )
    },
}
