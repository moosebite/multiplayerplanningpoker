import React from 'react'
import '../Styles/FibButtons.css'
import StoryDescription from './StoryDescription';
import ListRender from './listRender';
import { updateVote } from '../Utils/DataService';


function FibButtons () {
    return (
        //Created Fib Buttons with value corresponding to their ID 
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
//OnClick funtion to pass the ID of a button to update vote function
function showValue (e) {
    updateVote(e.target.id);
    console.log("Value is: ", this );
    }

export default FibButtons