/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-indent */
import React from 'react';

import '../Styles/Story.css';

class Story extends React.Component {
    constructor(props) {
        super(props);
        this.storyMap = this.props.dataService.getStory();
        console.log(this.storyMap[0].description);
    }
    render() {
        return (
            <div>
            <h1 className="Story">
                {this.storyMap[0].title}

            </h1>
            <div>
                {this.storyMap[0].description}
            </div>
        </div>
        )
    }
}

export default Story;
