import React, { FormEvent } from 'react'


import './login-form.css'
import { Spinner } from '../spinner/spinner'
import { Button } from '../button/button'

export type LoginFormProps = {
    onSubmit: (username: string, password: string) => void
    errorMessage?: string
    showSpinner?: boolean
}

export const LoginForm = ({ onSubmit, errorMessage, showSpinner }: LoginFormProps) => {

    return (
        <div className='login-form-container'>
            <form role="form" className='login-form' onSubmit={async (e: FormEvent<HTMLFormElement>) => {
                e.preventDefault()

                if (showSpinner) return;

                const { username, password } = Object.fromEntries(
                    new FormData(e.currentTarget).entries()
                ) as { [key: string]: string }

                onSubmit(username, password)
            }}>
                <div className='login-message-dialog' role="alert" aria-expanded={!!errorMessage || !!showSpinner}>
                    {errorMessage && <p className='error-message'>{errorMessage}</p>}
                    {showSpinner && <p className='status-message'>Logging In</p>}
                </div>
                <label htmlFor="username">
                    Username (required)
                </label>
                <input disabled={showSpinner} name="username" id="username" type="text" required={true} />
                <label htmlFor="password">
                    Password (required)
                </label>
                <input disabled={showSpinner} name="password" id="password" type="password" required={true} />
                <div className="login-button-container">
                    {!showSpinner
                        ? <Button type="submit" name="Login">Login</Button>
                        : <Spinner><Button disabled={true} type="submit" name="Login">Login</Button></Spinner>
                    }
                </div>
            </form>
        </div>
    )
}