import { render as baseRender, act, waitFor } from "@testing-library/react"
export * from '@testing-library/react'
import "@testing-library/jest-dom"
import React from "react"

// TODO: Remove when updating to React 19
const origError = console.error

beforeAll(() => {
    
    console.error = (first: string, ...args: any[]) => {
        if (first.startsWith('Warning:')) {
            return
        }
        origError(first, ...args)
    }
})

afterAll(() => {
    console.error = origError
})

export const render = async (node: React.ReactNode) => {
    const result = await act(() => baseRender(node))

    await waitFor(() => {
        expect(result.container).toBeInTheDocument()
    })

    return result
}