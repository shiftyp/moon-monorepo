import { render, screen, fireEvent, act } from '../test-utils'
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
        await act(() => {
            fireEvent.submit(screen.getByRole('button', {
                name: 'Login'
            }))
        })
        const alert = await screen.findByRole('alert')

        expect(alert).toHaveTextContent(/Bad Username or Password/)
        expect(alert).toHaveAttribute('aria-expanded', 'true')
    })
    it('should show a message on failed login', async () => {
        await render(loginFormFixtures['Basic Spinner Login'])
        await act(() => {
            fireEvent.submit(screen.getByRole('button', {
                name: 'Login'
            }))
        })
        
        const alert = await screen.findByRole('alert')

        expect(alert).toHaveTextContent(/Logging In/)
        expect(alert).toHaveAttribute('aria-expanded', 'true')
    })
})