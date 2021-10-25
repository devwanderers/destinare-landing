import React from 'react'
import Header from './Header'
import Paragraph from './Paragraph'

const Article = ({
    className,
    header,
    subHeader,
    children,
    paragraphProps,
    headerProps,
    subHeaderProps,
}) => {
    return (
        <div className={`flex flex-col ${className}`}>
            <Header {...headerProps}>{header}</Header>
            {subHeader && <Header {...subHeaderProps}>{subHeader}</Header>}
            <Paragraph {...paragraphProps}>{children}</Paragraph>
        </div>
    )
}

export default Article
