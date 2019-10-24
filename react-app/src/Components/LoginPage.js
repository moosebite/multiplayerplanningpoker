import React from 'react'

import '../Styles/LoginPage.css'

class LoginPage extends React.Component {
    
    handleSubmit = (event) => {
        console.log('Form submitted!');

        //event.preventDefault(); 
        localStorage.setItem('username', this.input.value);
        //this.props.data.addUser(this.input.value);

        this.props.router.push('./GameRoom');
    }

    render() {
        return (
            <div>
                <h1>Input your name:</h1>
                <form action= './GameRoom'>
                <input type='text' className='input1'
                ref={(input) => this.input = input}
                />
                <button onClick = {this.handleSubmit} >Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginPage