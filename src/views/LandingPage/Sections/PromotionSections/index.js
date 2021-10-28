import React from 'react'
import PromotionItem from './PromotionItem'

const PromotionsSection = (props) => {
    return (
        <div className="flex flex-row">
            <PromotionItem
                gradient
                title="NEW SEASON IS HERE"
                subTitle="BUY ONLINE"
                subTitleClassName="text-white"
            />
            <PromotionItem
                title="BEACH TIME / SUMMER TRIP"
                subTitle="GO TO SAN DIEGO"
                subTitleClassName="text-gray-500"
            />
            <PromotionItem
                gradient
                title="EUROPE IN 10 DAYS"
                subTitle="BUY ONLINE"
                subTitleClassName="text-white"
            />
            <PromotionItem
                title="TRAVEL TO LOS ANGELES"
                subTitle="SUMMER PROMOS"
                subTitleClassName="text-gray-500"
            />
        </div>
    )
}

export default PromotionsSection
