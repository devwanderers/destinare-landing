import React from 'react'
import PromotionItem from './PromotionItem'
import backgroundImages from './../../../../assets/images/backgrounds/index'

const PromotionsSection = (props) => {
    return (
        <div className="flex flex-row space-x-2">
            <PromotionItem
                image={backgroundImages.bgPlaceHolder1}
                title="NEW SEASON IS HERE"
                subTitle="BUY ONLINE"
                subTitleClassName="text-white"
            />
            <PromotionItem
                image={backgroundImages.bgPlaceHolder2}
                title="BEACH TIME / SUMMER TRIP"
                subTitle="GO TO SAN DIEGO"
                subTitleClassName="text-gray-500"
                containerTitleColor="#00B5EB"
            />
            <PromotionItem
                image={backgroundImages.bgPlaceHolder3}
                title="EUROPE IN 10 DAYS"
                subTitle="BUY ONLINE"
                subTitleClassName="text-white"
            />
            <PromotionItem
                image={backgroundImages.bgPlaceHolder4}
                title="TRAVEL TO LOS ANGELES"
                subTitle="SUMMER PROMOS"
                subTitleClassName="text-gray-500"
                containerTitleColor="#00B5EB"
            />
        </div>
    )
}

export default PromotionsSection
