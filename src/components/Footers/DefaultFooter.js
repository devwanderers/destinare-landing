import React from 'react'
import { Col, Row } from 'antd'
import { FaDiscord, FaTwitter } from 'react-icons/fa'
import { windowOpen } from '../../services/windowServices'
import { whitePaperLink } from './../../constants/linksConstranst'
import { useTranslation } from 'react-i18next'

const DefaultFooter = (props) => {
    const { t } = useTranslation('commons')
    return (
        <footer className="py-12 ">
            <div className="max-w-1280px px-6 mx-auto">
                <div className="flex flex-row justify-between border-b border-gray-300 pb-8">
                    <div className="flex flex-row justify-between max-h-full w-full lg:w-6/12  items-center"></div>
                </div>
                <div className="flex justify-end my-8">
                    <div className="space-x-4 flex flex-row text-2xl">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                windowOpen('https://discord.gg/nomadzlandnft')
                            }}
                        >
                            <span>
                                <FaDiscord />
                            </span>
                        </a>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault()
                                windowOpen('https://twitter.com/Destinare_io')
                            }}
                        >
                            <span>
                                <FaTwitter />
                            </span>
                        </a>
                    </div>
                </div>
                <Row>
                    <Col xs={12}>
                        <div></div>
                        <div>{t('footer.description')}</div>
                    </Col>
                    <Col xs={12} className="flex justify-end">
                        <div></div>
                        <div className="space-x-2">
                            <a>
                                <span>Offices</span>
                            </a>
                            <a onClick={() => windowOpen(whitePaperLink)}>
                                <span>WHITE PAPER</span>
                            </a>
                            <a>
                                <span>Marketing & Campaigns </span>
                            </a>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault()
                                    windowOpen(
                                        'https://discord.gg/nomadzlandnft'
                                    )
                                }}
                            >
                                <span>Help Center</span>
                            </a>
                        </div>
                    </Col>
                </Row>
            </div>
        </footer>
    )
}

export default DefaultFooter
