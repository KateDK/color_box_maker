import React from 'react';

const Box = props => {
  const {width, height, color} = props;
  const style = {width:Number(width),height:Number(height), backgroundColor: color}
  return <div className="Box" style={style}></div>
}

export default Box;
