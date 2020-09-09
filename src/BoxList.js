import React from 'react';
import NewBoxForm from './NewBoxForm';

class BoxList extends React.Component{
  state={
    colorBoxes: [],
  }
  render(){
    return (
      <div>
      <NewBoxForm/>
      BoxList

      </div>)
  }
}

export default BoxList;
