import React, { FormEvent } from 'react'

import './login-form.css'
import { Spinner } from '../spinner/spinner'
import { Button } from '../button/button'

export type LoginFormProps = {
    kind: 'login' | 'signup',
    onSubmit: (email: string, password: string) => void
    errorMessage?: string
    showSpinner?: boolean
}

export const LoginForm = ({ kind, onSubmit, errorMessage, showSpinner }: LoginFormProps) => {

    return (
        <div className='login-form-container'>
            <form role="form" className='login-form' onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault()

                if (showSpinner) return;

                const { email, password } = Object.fromEntries(
                    new FormData(e.currentTarget).entries()
                ) as { [key: string]: string }

                onSubmit(email, password)
            }}>
                <div className='login-message-dialog' role="alert" aria-expanded={!!errorMessage || !!showSpinner}>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    {showSpinner && <p className='status-message'>{kind === 'login' ? 'Logging In' : 'Signing Up'}</p>}
                </div>
                <label htmlFor="email">
                    Email (required)
                </label>
                <input disabled={showSpinner} name="email" id="email" type="email" required={true} />
                <label htmlFor="password">
                    Password (required)
                </label>
                <input disabled={showSpinner} name="password" id="password" type="password" required={true} />
                <div className="login-button-container">
                    {!showSpinner
                        ? <Button type="submit" name="Login">{kind === 'login' ? 'Login' : 'Sign Up'}</Button>
                        : <Spinner><Button disabled={true} type="submit" name="Login">Login</Button></Spinner>
                    }
                </div>
            </form>
        </div>
    )
}