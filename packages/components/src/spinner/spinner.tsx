import React, { PropsWithChildren } from 'react'
import './spinner.css'

export type SpinnerProps = PropsWithChildren<{
    scale?: number
}>

export const Spinner = ({ scale, children }: SpinnerProps) => {
    return (
        <div
            className="spinner"
            style={{
                transform: `scale(${scale || 1})`
            }}
        >
            {children}
        </div>
    )
}