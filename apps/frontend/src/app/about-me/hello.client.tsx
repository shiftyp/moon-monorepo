"use client"

import React, { useState } from 'react'

export const HelloComponent = ({ initialMessage }: { initialMessage: string }) => {
    const [message, setMessage] = useState<string>(initialMessage)

    return (
        <div onClick={() => {
            fetch('/hello').then((res) => {
                res.json().then((data) => {
                    setMessage(data.message)
                })
            })
        }}>Client: {message}</div>
    )
}