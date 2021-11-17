import React from 'react'

const PromotionItem = ({
    className,
    style,
    title,
    subTitle,
    image,
    containerTitleColor = '#0085c8',
}) => (
    <div className="w-full pb-10 relative mb-3" style={style}>
        <img className="w-full" alt={image} src={image} />
        <div className="absolute bottom-0 left-0 right-0 px-2a">
            <div
                className="px-2 xl:px-6 py-2"
                style={{ backgroundColor: containerTitleColor }}
            >
                <div className="text-yellow-2 text-xs md:text-base lg:text-sm  xl:text-lg">
                    {title}
                </div>
                <div className="text-white text-xs md:text-base lg:text-xs xl:text-base">
                    {subTitle}
                </div>
            </div>
        </div>
    </div>
)

export default PromotionItem
