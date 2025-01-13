import React from 'react'
import { LoginForm } from "./login-form";

export default {
    'Basic Login': (
        <LoginForm onSubmit={(username, password) => {
            console.log('onSubmit:', username, password);
        }} />
    ),
    'Basic Failed Login': (
        <LoginForm
            onSubmit={(username, password) => {
                console.log('onSubmit:', username, password);
            }}
            errorMessage={"Bad Username or Password"}
        />),
    'Basic Spinner Login': (<LoginForm
        onSubmit={(username, password) => {
            console.log('onSubmit:', username, password);
        }}
        showSpinner={true}
    />),
}