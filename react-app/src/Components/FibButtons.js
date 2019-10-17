import React from 'react'
import '../Styles/FibButtons.css'
<<<<<<< HEAD

class FibButtons extends React.Component {
    render() {
        return (
            <body className='body1'>
            <button className="myButton" id="0">0</button>
            <button className="myButton" id="1">1</button>
            <button className="myButton" id="2">2</button>
            <button className="myButton" id="3">3</button>
            <button className="myButton" id="5">5</button>
            <button className="myButton" id="8">8</button>
            <button className="myButton" id="13">13</button>
            <button className="myButton" id="21">21</button>
            <button className="myButton" id="?">?</button>
            <br />
        </body>
            )
        }
    }
    
=======
import StoryDescription from './StoryDescription';
import ListRender from './listRender';
import { updateVote } from '../Utils/DataService';


function FibButtons () {
    return (
        
        <body className='body1'>
        <button className="myButton" id="0" onClick = {showValue}>0 </button>
        <button className="myButton" id="1" onClick = {showValue}>1</button>
        <button className="myButton" id="2" onClick = {showValue}>2</button>
        <button className="myButton" id="3" onClick = {showValue}>3</button>
        <button className="myButton" id="5" onClick = {showValue}>5</button>
        <button className="myButton" id="8" onClick = {showValue}>8</button>
        <button className="myButton" id="13" onClick = {showValue}>13</button>
        <button className="myButton" id="21" onClick = {showValue}>21</button>
        <button className="myButton" id="?" onClick = {showValue}>?</button>
        <br />
        
    </body>
    )
}
function showValue (e) {
    updateVote(e.target.id);
    console.log("Value is: ", this );
    
    }

>>>>>>> c8b18a090828e02f9106ccb1b2aa21ee1fdb3c5a
export default FibButtons