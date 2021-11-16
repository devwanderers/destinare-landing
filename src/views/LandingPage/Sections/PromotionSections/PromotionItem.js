import React from 'react'

const PromotionItem = ({
    className,
    style,
    title,
    subTitle,
    image,
    containerTitleColor = '#0085c8',
}) => (
    <div className="flex-1" style={style}>
        <div className="pb-10 relative">
            <img className="w-full" alt={image} src={image} />
            <div className="absolute bottom-0 left-0 right-0 px-4 ">
                <div
                    className="lg:px-2 xl:px-6 py-2"
                    style={{ backgroundColor: containerTitleColor }}
                >
                    <div className="text-yellow-2 lg:text-sm xl:text-lg">
                        {title}
                    </div>
                    <div className="text-white lg:text-xs xl:text-base">
                        {subTitle}
                    </div>
                </div>
            </div>
        </div>
    </div>
)

export default PromotionItem
