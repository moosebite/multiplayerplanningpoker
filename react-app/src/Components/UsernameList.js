import React from 'react'

import '../Styles/UsernameList.css'

class UsernameList extends React.Component {
    render() {
        return(
            <p2>
                (Usernames go here.)
                <div className="spinner-border" role="status">
                    <span className="sr-only">Loading...</span>
                </div>
            </p2>
        )
    }
}

export default UsernameList