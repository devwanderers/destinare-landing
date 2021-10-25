import React from 'react'

const CollectionImage = ({ src, className, size }) => {
    return (
        <div className="css-generic">
            <div
                className="bg-aqua-1 border-8 border-blue-2 border-solid relative box-border "
                style={{ height: size, width: size }}
            >
                <div className="absolute -m-2 top-0 right-0 left-0 bottom-0 border-t-8 border-b-8 border-opacity-30 border-blue-1 border-solid"></div>
                <div className="absolute -m-2 top-0 right-0 left-0 bottom-0 overflow-hidden">
                    <img className="object-contain w-10/12 mx-auto" src={src} />
                </div>
            </div>
        </div>
    )
}

export default CollectionImage
