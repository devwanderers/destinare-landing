import React, { useState, useEffect, useCallback } from 'react'
import { Modal } from 'antd'
import { DestinareLogoColorSVG } from '../../assets/svg/brand'
import { useDispatch, useSelector } from 'react-redux'
import { authReducerSelector } from '../../store/reducers/auth/selectors'
import * as actions from '../../store/reducers/auth/actions'

const WaitingContactModal = () => {
    const [visible, setVisible] = useState(false)
    const { auth, userData, modals } = useSelector(authReducerSelector)
    const { mailSent, verified } = userData
    const contact = modals?.contact

    const dispatch = useDispatch()

    const setModalShowed = useCallback(
        () => dispatch(actions.setModalShowed('contact')),
        []
    )

    const handleModalVisibility = useCallback(() => {
        setVisible(!visible)
        if (!contact) setModalShowed()
    }, [contact, visible])

    useEffect(() => {
        console.log(auth, mailSent, contact, verified)
        if (auth && mailSent && !verified && !contact) {
            handleModalVisibility()
        }
    }, [auth, mailSent, contact, verified])

    return (
        <Modal
            centered
            visible={visible}
            onCancel={handleModalVisibility}
            // width={widthModal}
            maskClosable={false}
            footer={null}
        >
            <div className="flex flex-col items-center">
                {/* <div className="mb-8"> */}
                <div className="w-full flex justify-center">
                    <DestinareLogoColorSVG width={'50%'} />
                </div>
                <hr className="w-full mt-6 md:mt-8 border-black-5" />
                <p className=" mt-5 md:mt-6 text-xl md:text-2xl font-bold text-center text-yellow-1 font-montserrat">
                    {"We're excited to have you as"}
                </p>
                <p className="text-xl md:text-2xl font-bold text-center text-yellow-1 font-montserrat">
                    {'a member of the Destinare family!'}
                </p>
                <p className="mt-5 text-lg md:text-xl font-medium text-center text-black-4 font-montserrat">
                    {"We'll contact you when your"}
                </p>
                <p className=" text-lg md:text-xl font-medium text-center text-black-4 font-montserrat">
                    {'profile site is ready'}
                </p>
            </div>
        </Modal>
    )
}

export default WaitingContactModal
