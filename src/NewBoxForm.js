import React from 'react';

class NewBoxForm extends React.Component{
  state={
    width: "",
    height: "",
    color:"",
  }
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }
  render(){
    return (
      <div>
        <form>
          <label>Width: </label>
          <input name="width" type="text" value={this.state.width} onChange={this.handleChange}/>
          <label>Height:  </label>
          <input name="height" type="text" value={this.state.height} onChange={this.handleChange}/>
          <label>Color: </label>
          <input name="color" type="text" value={this.state.color} onChange={this.handleChange}/>
          <button type="submit">Add Box</button>
        </form>
      </div>
    )
  }
}

export default NewBoxForm;
