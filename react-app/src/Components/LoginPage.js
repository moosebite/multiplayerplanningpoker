import React from 'react'

import '../Styles/LoginPage.css'

class LoginPage extends React.Component {
    
    handleSubmit = (event) => {
        console.log('Form submitted!'); 
        
        localStorage.setItem('username', this.input.value);

        this.props.router.push('./GameRoom');
    }

    render() {
        return (
            <div className='loginBackground'>
                <h1>Multiplayer Planning Poker</h1> 
                <h1>Input your name:</h1>
                <p3><center>*20 characters max*</center></p3>
                <form action= './GameRoom'>
                <input type='text' className='input1' maxLength='20'
                ref={(input) => this.input = input}
                />
                <button onClick = {this.handleSubmit} >Play Planning Poker</button>
                </form>
            </div>
        )
    }
}

export default LoginPage