import React from 'react';

const Box = (props) => {
  const { width, height, color, id, removeBox } = props;
  const style = { width: width, height, backgroundColor: color };
  return (
    <span>
      <div className="Box" style={style}></div>
      <button onClick={() => removeBox(id)}>X</button>
    </span>
  );
};

Box.defaultProps = {
  width: 400,
  height: 400,
  color: 'purple',
};

export default Box;
