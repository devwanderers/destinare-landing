/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion'
import Modal from 'react-modal'
import { GiCancel } from 'react-icons/gi'
import { cls } from './../../services/helpers'
import ReactPlayer from 'react-player'
import { videosGallery } from './../../assets/videos/gallery/index'

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
        // scale: 0.5,
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
            duration: 0.3,
        },
    },
}

const GalleryElement = ({ className, selected, onClick, children }) => {
    return (
        <div
            className={cls(`
                flex-1 cursor-pointer
                ${className}
            `)}
            onClick={onClick}
        >
            <div
                className={cls(`
                    transform mx-auto w-10/12 lg:w-8/12 h-full text-7xl flex justify-center items-center bg-white p-1
                    ${selected && 'scale-110'}
                `)}
            >
                {children}
            </div>
        </div>
    )
}

const videos = [
    { id: 'video3', url: videosGallery.video3 },
    {
        id: 'video2',
        url: videosGallery.video2,
    },
    { id: 'video1', url: videosGallery.video1 },
]

const Gallery = ({ className, onSelect }) => {
    const [selected, setSelected] = useState({ ...videos[0] })

    useEffect(() => {
        onSelect(selected.url)
    }, [selected])

    return (
        <div
            className={cls(`
                h-20 md:h-32 lg:h-36 xl:h-40 flex flex-row lg:px-20
                ${className}
            `)}
        >
            {videos.map((v) => (
                <GalleryElement
                    key={`video${v.id}`}
                    className=""
                    onClick={() => setSelected(v)}
                    selected={selected?.id === v.id}
                >
                    <div className="w-full h-full relative">
                        <div className="absolute top-0 left-0 w-full h-full"></div>
                        <ReactPlayer
                            className=""
                            url={v.url}
                            width="100%"
                            height="100%"
                            light={true}
                            controls={false}
                            // onClickPreview={(e) => e.preventDefault()}
                            playIcon={<div></div>}
                        />
                    </div>
                </GalleryElement>
            ))}
        </div>
    )
}

const OverlayGallery = ({ visible = true, onClose }) => {
    const [showModal, setShowModal] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState()

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
            <motion.div
                className="absolute top-0 left-0 w-full h-full bg-black-0 bg-opacity-80"
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
                <div className="relative max-w-1280px h-full mx-auto pt-12 pb-10 px-2 flex flex-col">
                    <div
                        className="absolute top-0 left-0 w-full h-full"
                        onClick={() => onClose()}
                    ></div>
                    <div className="flex-1  w-full pb-8">
                        <div className="w-full h-full text-7xl flex justify-center items-center ">
                            {/* {selectedVideo} */}
                            <div className="w-full h-full flex justify-center items-center max-h-64 md:max-h-560px xl:max-h-600px bg-white p-1">
                                {selectedVideo && (
                                    <ReactPlayer
                                        className=" bg-black-0"
                                        url={selectedVideo}
                                        width="100%"
                                        height="100%"
                                        controls
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                    <Gallery onSelect={(select) => setSelectedVideo(select)} />
                </div>
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
            </motion.div>
        </Modal>
    )
}

export default OverlayGallery
