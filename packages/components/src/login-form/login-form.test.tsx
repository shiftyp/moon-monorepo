import React from 'react'
import { render, screen, fireEvent } from '../test-utils'
import { LoginForm } from './login-form'
import loginFormFixtures from './login-form.fixture'

describe('Login Form', () => {
    it('should render a username, password, and submit button', async () => {
        await render(loginFormFixtures['Basic Login'])

        screen.getByLabelText(/Username/)
        screen.getByLabelText(/Password/)
        screen.getByRole('button', {
            name: 'Login'
        })
    })
    it('should show a message on failed login', async () => {
        await render(loginFormFixtures['Basic Failed Login'])
        const alert = await screen.findByRole('alert')

        expect(alert).toHaveTextContent(/Bad Username or Password/)
        expect(alert).toHaveAttribute('aria-expanded', 'true')
    })
    it('should show a message on spinner', async () => {
        await render(loginFormFixtures['Basic Spinner Login'])
        
        const alert = await screen.findByRole('alert')

        expect(alert).toHaveTextContent(/Logging In/)
        expect(alert).toHaveAttribute('aria-expanded', 'true')
    })
    it('should not submit when the form is spinning', async () => {
        const onSubmit = jest.fn()
        await render(<LoginForm onSubmit={onSubmit} showSpinner={true}></LoginForm>)

        const loginForm = screen.getByRole('form')

        fireEvent.submit(loginForm)

        expect(onSubmit).not.toHaveBeenCalled()
    })
    it('should submit the form passing username and password', async () => {
        const onSubmit = jest.fn()
        await render(<LoginForm onSubmit={onSubmit}></LoginForm>)

        const loginForm = screen.getByRole('form')

        fireEvent.submit(loginForm)

        expect(onSubmit).toHaveBeenCalledWith('', '')

        const username = screen.getByLabelText(/Username/)
        const password = screen.getByLabelText(/Password/)

        fireEvent.change(username, { target: { value: 'Ryan' } })
        fireEvent.change(password, { target: { value: 'Secret1234' } })

        fireEvent.submit(loginForm)

        expect(onSubmit).toHaveBeenCalledWith('Ryan', 'Secret1234')
    })
})