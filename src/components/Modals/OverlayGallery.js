/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Modal from 'react-modal'
import { GiCancel } from 'react-icons/gi'
import { cls } from './../../services/helpers'
import ReactPlayer from 'react-player'

const customStyles = {
    overlay: {
        zIndex: 999,
        backgroundColor: 'transparent',
    },
    content: {
        top: '0',
        left: '0',
        right: '0',
        bottom: '0',
        backgroundColor: 'transparent',
    },
}

const container = {
    hidden: {
        opacity: 0,
        scale: 0.1,
        transition: {
            duration: 0.2,
            when: 'afterChildren',
        },
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: 0.15,
            delayChildren: 0,
            duration: 0.4,
        },
    },
}

const button = {
    hidden: {
        opacity: 0.5,
        scale: 0,
        transition: {
            duration: 0.3,
        },
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 0.2,
        },
    },
}

const OverlayGallery = ({ visible = true, onClose, videoUrl }) => {
    const [showModal, setShowModal] = useState(false)

    useEffect(() => {
        if (visible) {
            document.body.style.overflow = 'hidden'
            setShowModal(true)
        } else {
            document.body.style.overflow = 'auto'
        }
    }, [visible])

    return (
        <Modal isOpen={showModal} style={customStyles}>
            <div className="absolute top-0 left-0 w-full h-full bg-black-0 bg-opacity-80">
                <motion.div
                    className="absolute top-0 left-0 w-full h-full"
                    initial="hidden"
                    animate={visible ? 'show' : 'hidden'}
                    variants={container}
                    onAnimationComplete={() => {
                        if (!visible) setShowModal(false)
                    }}
                >
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        onClick={() => onClose()}
                    ></div>
                    <div className="relative max-w-1800px   h-full mx-auto flex flex-col">
                        <div
                            className="absolute top-0 left-0 w-full h-full"
                            onClick={() => onClose()}
                        ></div>
                        <div className="absolute top-0 left-0 w-full h-full lg:py-16 lg:px-8 xl:px-20">
                            {' '}
                            {videoUrl && (
                                <ReactPlayer
                                    className=" bg-black-0 border-2 border-white"
                                    url={videoUrl}
                                    width="100%"
                                    height="100%"
                                    controls
                                />
                            )}
                        </div>
                    </div>
                </motion.div>
                <div className="absolute right-0 top-0 p-2 xl:p-5">
                    <motion.button
                        onClick={() => onClose()}
                        initial="hidden"
                        animate={visible ? 'show' : 'hidden'}
                        variants={button}
                        className="w-8 h-8 xl:w-12 xl:h-12 p-1  transform hover:scale-110 "
                    >
                        <GiCancel color="#fff" size={'100%'} />
                    </motion.button>
                </div>
            </div>
        </Modal>
    )
}

export default OverlayGallery
