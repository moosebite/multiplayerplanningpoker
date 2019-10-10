import React from 'react'
import '../Styles/LoginPage.css'

class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Input your name:</h1>
                <form action='./GameRoom'>
                <input type='text' className='input1'/>
                <button onClick='./GameRoom'>Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginPage