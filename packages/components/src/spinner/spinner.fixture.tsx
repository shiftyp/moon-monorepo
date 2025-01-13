import React from 'react'
import { Spinner } from './spinner'

export default {
    'Basic Spinner': <Spinner />,
    'Small Spinner': <Spinner scale={0.5} />,
    'Large Spinner': <Spinner scale={5} />,
    'Button Spinner': <Spinner><button>Loading...</button></Spinner>
}