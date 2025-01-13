import React from 'react'
import { fireEvent, render, screen } from '../test-utils'

import buttonFixture from "./button.fixture";
import { Button } from './button';

describe('Spinner', () => {
    it('should render a button with content', async () => {
        await render(buttonFixture["Primary"])
        const button = screen.getByRole('button')
        
        expect(button).toHaveTextContent('Primary')
    })
    it('should render a button with additional attributes', async () => {
        const onClick = jest.fn()
        await render(<Button kind="primary" aria-controls="item" onClick={onClick}>Primary</Button>)
        const button = screen.getByRole('button')

        expect(button).toHaveAttribute('aria-controls', 'item')

        fireEvent.click(button)

        expect(onClick).toHaveBeenCalledTimes(1)

        fireEvent.click(button)

        expect(onClick).toHaveBeenCalledTimes(2)
    })
})