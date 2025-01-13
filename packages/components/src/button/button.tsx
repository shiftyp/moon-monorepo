import React, { PropsWithChildren } from 'react'
import './button.css'

export type ButtonProps = PropsWithChildren<{
    kind?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>>

export const Button = ({ kind, children, ...buttonProps }: ButtonProps) => {
    return (
        <button
            {...buttonProps}
            className={`button ${kind ? `button-${kind}` : 'button-primary'} ${buttonProps.className ? buttonProps.className : ''}`}
        >
            {children}
        </button>
    )
}