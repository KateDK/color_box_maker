import React from 'react';

const Box = props => {
  const {width, height, color} = props;
  const style = {width:width,height, backgroundColor: color}
  return <div className="Box" style={style}></div>
}

Box.defaultProps = {
  width: 400,
  height: 400,
  color: "purple"
}

export default Box;
