import React from 'react'

export const LineWrapper = ({
    children,
    className,
    side = 'left',
    borderWidth = '100%',
    borderHeight = '100%',
    decorationBottom = '0',
    decorationHeight = '5rem',
}) => {
    return (
        <div
            className={`css-generic w-full max-h-full flex flex-grow relative ${className}`}
        >
            <div
                className={`css-generic ${
                    side === 'left' ? 'lg:pl-14' : 'lg:pr-14'
                } pt-2 lg:pt-10`}
            >
                {children}
            </div>
            <div
                className={`wrapper-line wrapper-line-${
                    side === 'left' ? 'lt' : 'rt'
                }   border-blue-4 border-solid`}
                style={{ height: borderHeight, width: borderWidth }}
            >
                <div className="line-decoration">
                    <div
                        className="border-l-4 -mb-1px border-solid border-primary"
                        style={{
                            bottom: decorationBottom,
                            height: decorationHeight,
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
