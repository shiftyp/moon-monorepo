import React from 'react'
import { HelloComponent } from './hello.client'

export const HelloServerComponent = async () => {
    const { message } = await fetch(`http://localhost:3000/hello`, { cache: 'no-store' }).then(resp => resp.json()) as {
        message: string
    }

     return <HelloComponent initialMessage={message} />
}