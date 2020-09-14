import React from 'react';
import NewBoxForm from './NewBoxForm';
import Box from './Box';
import { v4 as uuidv4 } from 'uuid';

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
            key={uuidv4()}
          />
        ))}
      </div>
    );
  }
}

export default BoxList;
