import React from 'react'
import '../Styles/LoginPage.css'

function LoginPage() {
    return (
        <div>
            <h1>Input your name:</h1>
            <form action='./GameRoom'>
            <input type='text' className='input'/>
            </form>
        </div>
    )
}

export default LoginPage