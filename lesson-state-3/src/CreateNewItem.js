import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateNewItem extends Component {
  state = {
    value: '',
  }

  inputIsEmpty = () => {
    return this.state.value === '';
  }

  handleChange = event => {
    this.setState({ value: event.target.value});
  }

  handleAddItem = event => {
    event.preventDefault();
    this.props.addItem(this.state.value);
  }

  render() {
    return (
      <form onSubmit={this.handleAddItem}>
        <input
          type="text"
          placeholder="Enter New Item"
          value={this.state.value}
          onChange={this.handleChange}
        />
        <button disabled={this.inputIsEmpty()}>Add</button>
      </form>
    );
  }
}

CreateNewItem.PropTypes = {
  addItem: PropTypes.func.isRequired,
}

export default CreateNewItem;
