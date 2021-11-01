import React from 'react'

const LogoIconSVG = ({
    color = 'white',
    height = '100%',
    width = '100%',
    style,
}) => {
    return (
        <svg
            id="Capa_1"
            data-name="Capa 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1072.97 848.56"
            height={height}
            width={width}
            style={style}
        >
            <path
                d="M804,666.24l-250-193a2.9,2.9,0,0,0-3.57,0L304.24,669.48a2.9,2.9,0,0,0,0,4.53l242.91,193a2.88,2.88,0,0,0,3.57,0L804,670.82A2.9,2.9,0,0,0,804,666.24Z"
                transform="translate(-18.73 -19.13)"
                style={{ fill: color }}
            />
            <path
                d="M539.08,23.61,26.47,432.39a20.56,20.56,0,0,0,.26,32.35L157.61,565.8a20.56,20.56,0,0,0,25.38-.19L539.3,281.55a20.56,20.56,0,0,1,25.38-.2L927.5,561.45a20.56,20.56,0,0,0,25.39-.2L1084,456.72a20.56,20.56,0,0,0-.25-32.35l-519.24-401A20.59,20.59,0,0,0,539.08,23.61Z"
                transform="translate(-18.73 -19.13)"
                style={{ fill: color }}
            />
        </svg>
    )
}

export default LogoIconSVG
