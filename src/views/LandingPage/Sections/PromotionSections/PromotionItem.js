import React from 'react'

const PromotionItem = ({ className, style, title, subTitle, gradient }) => (
    <div
        className={` flex-1 py-5 lg:py-12 ${
            gradient ? 'gradient-g' : 'bg-white'
        }`}
        style={style}
    >
        <div className="w-10/12 lg:w-8/12 mx-auto">
            <a className="flex flex-col tracking-wider leading-none ">
                <span
                    className={`text-xs lg:text-base font-semibold w-full break-words mb-2`}
                >
                    {title}
                </span>
                <span
                    className={`text-xs lg:text-base w-full break-words ${
                        gradient ? 'text-white' : 'text-gray-500'
                    }`}
                >
                    {subTitle}
                </span>
            </a>
        </div>
    </div>
)

export default PromotionItem
