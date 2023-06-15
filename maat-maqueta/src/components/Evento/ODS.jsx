import React from 'react'

function ODS({imagen, select, onClick}) {
  
    return <img src={imagen} alt={imagen} className={select ? "imgods imgodselect" : "imgods" } onClick={onClick}></img>;
  
}

export default ODS