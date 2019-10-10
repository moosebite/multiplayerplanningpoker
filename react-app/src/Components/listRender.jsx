import React, { Component } from "react";

class ListRender extends Component {
  state = {
    count: 0,
    tags: ["Larry", "Moe", "Curly"]
  }; //This is an object that includes any necessary data fo the component

  //This renders the list. Since the array is part of the state, it's re-rendered on update
  renderTags() {
    if (this.state.tags.length === 0) return <h1>Empty room!</h1>;

    return (
      <div dir="rtl">
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  handleIncrement = () => {
    //Instead of making a custom constructor and binding things, you can do this and use an arrow function
    console.log("Increment Click", this);
    this.setState({ count: this.state.count + 1 });
    this.setState({
      tags: this.state.tags.concat(document.getElementById("nameField").value)
    }); //This works, but throws warnings when entering children with the same key.
  };

  render() {
    //A div where were React.Fragment was. We put React.Fragment instead to prevent unnecessary, nested divs

    //For input, don't put value equal to something. Instead use placeholder

    return (
      <React.Fragment>
        <p id="namePara" align="right">
          <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

          <input placeholder="Type name here" id="nameField" className="m-2" />

          <button
            onClick={this.handleIncrement}
            className="btn btn-secondary btn-sm"
            classes="m-2"
          >
            Add Name
          </button>

          {this.renderTags()}
        </p>
      </React.Fragment>
    );
    //Span groups inline elements
    //Between curly braces we can write valid javascript expressions (ex. functions that return values)
  }

  //This is fancy CSS/bootstrap stuff for formatting badges
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const count = this.state.tags.length; //This sets a count variable to the length of the roster
    return count === 0 ? "Zero" : count; //If the count is equal to 0, return 'zero', otherwise return the count.
  }
}

export default ListRender;
