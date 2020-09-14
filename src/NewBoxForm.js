import React from 'react';
import { v4 as uuidv4 } from 'uuid';

class NewBoxForm extends React.Component {
  state = {
    width: '',
    height: '',
    color: '',
    id: uuidv4(),
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addBox(this.state);
    this.setState({
      width: '',
      height: '',
      color: '',
      id: uuidv4(),
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Width: </label>
          <input
            name="width"
            type="text"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <label>Height: </label>
          <input
            name="height"
            type="text"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <label>Color: </label>
          <input
            name="color"
            type="text"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <button type="submit">Add Box</button>
        </form>
      </div>
    );
  }
}

export default NewBoxForm;
