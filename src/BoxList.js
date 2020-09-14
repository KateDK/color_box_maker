import React from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';

class BoxList extends React.Component {
  state = {
    colorBoxes: [],
  };
  addBox = (box) => {
    this.setState({ colorBoxes: [...this.state.colorBoxes, box] });
  };
  render() {
    const { colorBoxes } = this.state;
    return (
      <div>
        <NewBoxForm addBox={this.addBox} />
        BoxList
        {colorBoxes.map((box) => (
          <Box
            color={box.color}
            width={Number(box.width)}
            height={Number(box.height)}
            key={box.id}
            id={box.id}
            removeBox={this.removeBox}
          />
        ))}
      </div>
    );
  }
}

export default BoxList;
