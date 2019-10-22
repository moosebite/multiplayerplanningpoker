import React from 'react'

import '../Styles/UsernameList.css'

import { updateUserList } from '../Utils/DataService'

class UsernameList extends React.Component {
    
state = {
    userMap: {}
}

constructor(props) {
    super(props);

    updateUserList((updatedUserMap) => {
        this.setState({
            userMap: updatedUserMap
        });

        this.render();
    });
}

    render() {
        return(
            <p2>
                (Usernames go here.)
                <br/>
                <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Waiting For Vote
                </button>
                <br/>
                <button class="btn btn-primary" type="button" disabled>
                    <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
                    Vote Submitted
                </button>
            </p2>
        )
    }
}

export default UsernameList