import React from 'react';

class NewBoxForm extends React.Component{
  state={
    width: 0,
    height: 0,
    color:"",
  }

  render(){
    return (
      <div>
        <form>
          <label>Width: </label>
          <input name="width" type="text" />
          <label>Height:  </label>
          <input name="height" type="text" />
          <label>Color: </label>
          <input name="color" type="text" />
          <button type="submit">Add Box</button>
        </form>
      </div>
    )
  }
}

export default NewBoxForm;
