import { Button } from 'antd'
import React, { Component } from 'react'
import { returnPromise, timeout } from '../services/promises'

const testingPromiseError = () => {
    return returnPromise(async (resolve, reject) => {
        try {
            await timeout(3000)
            throw new Error('Fallo')
        } catch (error) {
            reject(error)
        }
    })
}

export default class TestingServices extends Component {
    constructor(props) {
        super(props)

        this.state = {
            user: {
                user1: true,
            },
        }
    }

    fireTestPromise = () => {
        testingPromiseError()
            .then((res) => console.log({ res }))
            .catch((err) => console.log({ err }))
    }

    render() {
        return <Button onClick={this.fireTestPromise}>Test promise</Button>
    }
}
