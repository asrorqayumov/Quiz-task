import React from 'react';
import './style.css'

export const Button = ({setNumber,value}) => {
  return (
    <button className="btn" onClick={()=>setNumber(value)}>{value}</button>
  )
}
