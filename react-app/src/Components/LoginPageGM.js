import React from 'react'

import '../Styles/LoginPageGM.css'

class LoginPageGM extends React.Component{
    
        handleSubmit = (event) => {
            console.log('Form submitted!'); 
            
            localStorage.setItem('username', this.input.value);
    
            this.props.router.push('./DecisionSourceMultiplayerPlanningPokerGameMasterGameRoom_GodMode');
        }
    render() {
        return(
            <div className='loginBackground'>
                <h1>Multiplayer Planning Poker</h1> 
                <div className='loginForm'>
                    <h1>Input your name:</h1>
                    <form action= './DecisionSourceMultiplayerPlanningPokerGameMasterGameRoom_GodMode'>
                        <input type='text' className='input1' maxLength='20'
                        ref={(input) => this.input = input}
                        />
                        <center>*20 characters max*</center>
                        <button onClick = {this.handleSubmit} >Play Planning Poker As Game Manager</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default LoginPageGM