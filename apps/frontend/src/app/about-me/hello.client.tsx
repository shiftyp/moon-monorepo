"use client"

import React, { useState } from 'react'
import { UserForm } from '@moon-app/components/src/user-form/user-form'

export const HelloComponent = ({ initialMessage }: { initialMessage: string }) => {
    const [message, setMessage] = useState<string>(initialMessage)

    const onSubmit = async (name: string, email: string, age: number) => {
        const res = await fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name,
                email,
                age,
            }),
        })
        const data = await res.json()
        setMessage(JSON.stringify(data))
    }

    return (
        <>
        <div onClick={() => {
            fetch('/hello').then((res) => {
                res.json().then((data) => {
                    setMessage(data.message)
                })
            })
        }}>Client: {message}</div>
            <UserForm kind="signup" onSubmit={onSubmit} errorMessage='' showSpinner={false} />
        </>
    )
}