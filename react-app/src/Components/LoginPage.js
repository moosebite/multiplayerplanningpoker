import React from 'react'

import '../Styles/LoginPage.css'

class LoginPage extends React.Component {
    render() {
        return (
            <div className='loginBackground'>
                <h1>Input your name:</h1>
                <form action='./GameRoom'>
                <input type='text' className='input1'/>
                <button onClick='./GameRoom'>Play Planning Poker</button>
                </form>
            </div>
        )
    }
}

export default LoginPage