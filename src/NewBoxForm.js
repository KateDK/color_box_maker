import React from 'react';

class NewBoxForm extends React.Component{
  state={
    width: "",
    height: "",
    color:"",
  }

  render(){
    return (
      <div>
        <form>
          <label>Width: </label>
          <input name="width" type="text" value={this.state.width}/>
          <label>Height:  </label>
          <input name="height" type="text" value={this.state.height}/>
          <label>Color: </label>
          <input name="color" type="text" value={this.state.color}/>
          <button type="submit">Add Box</button>
        </form>
      </div>
    )
  }
}

export default NewBoxForm;
