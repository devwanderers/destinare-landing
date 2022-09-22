import React from 'react'
import PromotionItem from './PromotionItem'
import { Row, Col } from 'antd'
import useResponsive from './../../../../hooks/useResponsive'
import { useTranslation } from 'react-i18next'

const PromotionsSection = (props) => {
    const { t } = useTranslation('landing')
    const [gutter] = useResponsive({ base: 6, md: 12 })
    return (
        <Row gutter={gutter} className="">
            <Col span={12} lg={6}>
                <PromotionItem
                    title={t('section2.customer_support.title')}
                    subTitle={t('section2.customer_support.description')}
                />
            </Col>
            <Col span={12} lg={6}>
                <PromotionItem
                    title={t('section2.price_guarantee.title')}
                    subTitle={t('section2.price_guarantee.description')}
                />
            </Col>
            <Col span={12} lg={6}>
                <PromotionItem
                    title={t('section2.payment_options.title')}
                    subTitle={t('section2.payment_options.description')}
                />
            </Col>
            <Col span={12} lg={6}>
                <PromotionItem
                    title={t('section2.rewards.title')}
                    subTitle={
                        <p className="">
                            {t('section2.rewards.description')}{' '}
                            <a
                                href="https://nomadzlandnft.io/"
                                target="blank"
                                className=" underline text-blue-7"
                            >
                                {t('section2.rewards.link')}
                            </a>
                        </p>
                    }
                />
            </Col>
        </Row>
    )
}

export default PromotionsSection
