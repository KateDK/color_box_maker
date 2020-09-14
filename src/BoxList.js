import React from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box'
class BoxList extends React.Component{
  state={
    colorBoxes: [],
  }
  addBox = (box) => {
    this.setState({colorBoxes:[...this.state.colorBoxes,box]})
  }
  render(){
    const {colorBoxes} = this.state;
    return (
      <div>
      <NewBoxForm addBox={this.addBox}/>
      BoxList
      {colorBoxes.map(box=><Box color={box.color} width={box.width} height={box.height}/>)}
      </div>)
  }
}

export default BoxList;
