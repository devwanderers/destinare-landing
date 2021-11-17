import React from 'react'
import PromotionItem from './PromotionItem'
import backgroundImages from './../../../../assets/images/backgrounds/index'
import { Row, Col } from 'antd'
import useResponsive from './../../../../hooks/useResponsive'

const PromotionsSection = (props) => {
    const [gutter] = useResponsive({ base: 6, md: 12 })
    return (
        <Row gutter={gutter} className="">
            <Col span={12} lg={6}>
                <PromotionItem
                    image={backgroundImages.bgPlaceHolder1}
                    title="NEW SEASON IS HERE"
                    subTitle="BUY ONLINE"
                    subTitleClassName="text-white"
                />
            </Col>
            <Col span={12} lg={6}>
                <PromotionItem
                    image={backgroundImages.bgPlaceHolder2}
                    title="BEACH TIME / SUMMER TRIP"
                    subTitle="GO TO SAN DIEGO"
                    subTitleClassName="text-gray-500"
                    containerTitleColor="#00aeff"
                />
            </Col>
            <Col span={12} lg={6}>
                <PromotionItem
                    image={backgroundImages.bgPlaceHolder3}
                    title="EUROPE IN 10 DAYS"
                    subTitle="BUY ONLINE"
                    subTitleClassName="text-white"
                />
            </Col>
            <Col span={12} lg={6}>
                <PromotionItem
                    image={backgroundImages.bgPlaceHolder4}
                    title="TRAVEL TO LOS ANGELES"
                    subTitle="SUMMER PROMOS"
                    subTitleClassName="text-gray-500"
                    containerTitleColor="#00aeff"
                />
            </Col>
        </Row>
    )
}

export default PromotionsSection
