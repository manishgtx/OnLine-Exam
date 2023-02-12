import React from 'react'

const Button = (props) => {
  const {title,selected,setSelected,id,...rest} = props
  return (
    <button className={`btn ${selected === id && 'active'}`} {...rest}>{title}</button>
  )
}

export default Button