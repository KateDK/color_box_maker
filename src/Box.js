import React from 'react';
import './Box.css';

const Box = (props) => {
  const { width, height, color, id, removeBox } = props;
  const style = { width: width, height, backgroundColor: color };
  return (
    <div className="Box">
      <button onClick={() => removeBox(id)}>X</button>
      <div style={style}></div>
    </div>
  );
};

Box.defaultProps = {
  width: 400,
  height: 400,
  color: 'purple',
};

export default Box;
