import React, { useState, useEffect } from 'react'
import OverlayGallery from './../../../components/Modals/OverlayGallery'
import { cls } from './../../../services/helpers'
import { videosGallery } from './../../../assets/videos/gallery/index'
import { thumbGallery } from './../../../assets/videos/thumbnails/index'
import { GoPlay } from 'react-icons/go'

const videos = [
    {   id: 'video1', 
        url: videosGallery.video1, 
        thumb: thumbGallery.thumb1 
    },
    {
        id: 'video2',
        url: videosGallery.video2,
        thumb: thumbGallery.thumb2
    },
    {   id: 'video3', 
        url: videosGallery.video3,
        thumb: thumbGallery.thumb3
    },
]


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
                `)}
            >
                {children}
            </div>
        </div>
    )
}

const Gallery = ({ className, onSelect }) => {
    const [selected, setSelected] = useState(null)

    useEffect(() => {
        if (selected) onSelect(selected.url)
    }, [selected])

    return (
        <div
            className={cls(`
                h-20 md:h-32 lg:h-36 xl:h-40 flex flex-row xl:px-20
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
                    <div className="w-full h-full relative bg-red-500">
                        <div className="absolute top-0 left-0 w-full h-full flex items-center text-white">
                            <GoPlay className="mx-auto" size="40%" />
                        </div>
                        <img src={v.thumb}  className="w-full h-auto h-full" />
                    </div>
                </GalleryElement>
            ))}
        </div>
    )
}
const VideosSection = () => {
    const [openModal, setOpenModal] = useState(false)
    const [selectedVideo, setSelectedVideo] = useState()

    const handleSelected = (v) => {
        setOpenModal(true)
        setSelectedVideo(v)
    }

    return (
        <div className="section3 w-full flex flex-row mx-auto relative mb-12">
            <Gallery className="w-full" onSelect={handleSelected} />
            <OverlayGallery
                videoUrl={selectedVideo}
                visible={openModal}
                onClose={() => setOpenModal(false)}
            />
        </div>
    )
}

export default VideosSection
