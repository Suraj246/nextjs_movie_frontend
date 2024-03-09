import React from 'react'
import Login from '../components/login/Login'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Login',
}

const page = () => {
    return (
        <main>
            <Login />
        </main>
    )
}

export default page
