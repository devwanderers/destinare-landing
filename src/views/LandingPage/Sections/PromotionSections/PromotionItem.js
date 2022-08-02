import React from 'react'

const PromotionItem = ({ className, style, title, subTitle, image }) => (
    <div className="w-full pb-10 relative mb-3" style={style}>
        <div className="bottom-0 left-0 right-0">
            <div className="px-2 xl:px-6 py-2 text-center">
                <div className="text-black-0 text-xs md:text-base lg:text-sm  xl:text-xl font-bold">
                    {title}
                </div>
                <div className="text-gray-500 text-xs md:text-base lg:text-xs xl:text-base mt-4 font-semibold">
                    {subTitle}
                </div>
            </div>
        </div>
    </div>
)

export default PromotionItem
