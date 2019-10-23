import React from 'react'

import '../Styles/LoginPage.css'
import { addUser } from '../Utils/DataService'

class LoginPage extends React.Component {
    
    handleSubmit = (event) => {
        console.log('Form submitted!');

        //event.preventDefault(); 

        addUser(this.input.value);
    }

    render() {
        return (
            <div>
                <h1>Input your name:</h1>
                <form action= './GameRoom'>
                <input type='text' className='input1'
                ref={(input) => this.input = input}
                />
                <button onClick= './GameRoom' onClick = {this.handleSubmit} >Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginPage