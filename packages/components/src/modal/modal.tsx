import React, { PropsWithChildren, createContext, useContext, useState } from 'react'

import "./modal.css"

export type ModalContainerProps = PropsWithChildren<{
    isOpen: boolean
    onClose: () => void
}>

export const ModalContainer = ({ children, isOpen, onClose }: ModalContainerProps) => {

    if (!isOpen) {
        return null
    } else {
        return (
            <div className='modal-container' onMouseDown={(e) => {
                if (e.target === e.currentTarget) {
                    onClose()
                }
            }}>
                {children}
            </div>
        )
    }
}

export type ModalContentProps = PropsWithChildren<{
    id: string,
    heading?: string
}>

export const ModalContent = ({ children, id, heading }: ModalContentProps) => {
    return (
        <div role="dialog" className="modal-content" aria-expanded={true} id={id}>
            {heading ? <h2>{heading}</h2> : null}
            {children}
        </div>
    )
}