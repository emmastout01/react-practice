// Importing React
import React, { Component } from 'react';


class Input extends Component {
  render() {
    return (
      <div>
        <input onChange={this.onInputChange}></input>
      </div>
    );
  }

/* When the input field changes, the console will log the new value of the input field each time it changes. 
 For example, if a user types 'Hello' into the input field, the console will log:
H
He
Hel
Hell
Hello
 */
  onInputChange(event) {
      console.log(event.target.value);
  }
}

export default Input;
