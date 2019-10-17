import React from 'react'
import '../Styles/LoginPage.css'

<<<<<<< HEAD
class LoginPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Input your name:</h1>
                <form action='./GameRoom'>
                <input type='text' className='input'/>
                </form>
            </div>
        )
    }
=======
function LoginPage() {
    return (
        <div>
            <h1>Input your name:</h1>
            <form action='./GameRoom'>
            <input type='text' className='input'/>
            </form>
        </div>
    )
>>>>>>> c8b18a090828e02f9106ccb1b2aa21ee1fdb3c5a
}

export default LoginPage