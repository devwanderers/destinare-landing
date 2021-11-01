import React from 'react'
import { Spin } from 'antd'

const PageLoading = (props) => {
    return (
        <div className="flex-1 flex justify-center items-center">
            <Spin />
        </div>
    )
}

export default PageLoading
