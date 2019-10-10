import React from 'react'
import '../Styles/FibButtons.css'

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
    
export default FibButtons