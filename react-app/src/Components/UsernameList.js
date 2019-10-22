import React from 'react'

import '../Styles/UsernameList.css'

class UsernameList extends React.Component {
    render() {
        return(
            <p2>
                (Usernames go here.)
                <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Waiting for vote
                </button>
            </p2>
        )
    }
}

export default UsernameList