import React from 'react';

function Point(props){

  const descObj = props.pointDesc.find((point) => {
    return point.pointTitle === props.point
  });
  console.log(descObj)

  console.log(props)
    return(
      <div>
        <div className="point-title">{props.point}</div>
        <iv className="point-desc">{descObj.text}</iv>
      </div>
    )
}

export default Point;