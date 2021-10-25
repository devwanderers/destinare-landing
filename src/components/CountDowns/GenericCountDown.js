import React from 'react'
import Countdown from 'react-countdown'

const Render = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
    className = '',
}) => {
    return (
        <div className={`count-numbers flex text-white ${className}`}>
            <div className="flex-1">{days > 9 ? days : `0${days}`}</div>
            <div>:</div>
            <div className="flex-1">{hours > 9 ? hours : `0${hours}`}</div>
            <div>:</div>
            <div className="flex-1">
                {minutes > 9 ? minutes : `0${minutes}`}
            </div>
            <div>:</div>
            <div className="flex-1">
                {seconds > 9 ? seconds : `0${seconds}`}
            </div>
        </div>
    )
}

const GenericCountDown = ({ date, className }) => {
    return (
        <Countdown
            date={date}
            renderer={(props) => <Render {...props} className={className} />}
        />
    )
}

export default GenericCountDown
