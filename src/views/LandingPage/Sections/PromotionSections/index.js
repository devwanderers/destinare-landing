import React from 'react'
import PromotionItem from './PromotionItem'
import { Row, Col } from 'antd'
import useResponsive from './../../../../hooks/useResponsive'

const PromotionsSection = (props) => {
    const [gutter] = useResponsive({ base: 6, md: 12 })
    return (
        <Row gutter={gutter} className="">
            <Col span={12} lg={6}>
                <PromotionItem
                    title="24/7 Customer Support"
                    subTitle="Do you need help or have a question? Contact our proactive 24/7 customer support team via discord or online ticket system."
                />
            </Col>
            <Col span={12} lg={6}>
                <PromotionItem
                    title="Best Price Guarantee"
                    subTitle="We guarantee we won't be beat on price. If you find a cheaper deal on another website after you book with us, we will give you a complimentary hotel stay."
                />
            </Col>
            <Col span={12} lg={6}>
                <PromotionItem
                    title="Multi-Payment Options"
                    subTitle="We offer various payment methods to make a booking with us. Choose from Credit and Debit Cards and the leading Cryptocurrencies(Q4)."
                />
            </Col>
            <Col span={12} lg={6}>
                <PromotionItem
                    title="Real Value Rewards"
                    subTitle={
                        <p className="">
                            Earn rewards easily and quickly with our innovative
                            tokenised incentive programs including discounts,
                            monthly rewards.{' '}
                            <a
                                href="https://nomadzlandnft.io/"
                                target="blank"
                                className=" underline text-blue-7"
                            >
                                Learn More.
                            </a>
                        </p>
                    }
                />
            </Col>
        </Row>
    )
}

export default PromotionsSection
