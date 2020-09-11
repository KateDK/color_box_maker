import React from 'react';
import NewBoxForm from './NewBoxForm';

class BoxList extends React.Component{
  state={
    colorBoxes: [],
  }
  addBox = (box) => {

    console.log(">>>Box: ",box);
    this.setState({colorBoxes:[...this.state.colorBoxes,box]})
  }
  render(){
    return (
      <div>
      <NewBoxForm addBox={this.addBox}/>
      BoxList

      </div>)
  }
}

export default BoxList;
