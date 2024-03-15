import React, { useState } from 'react'


const RenderCenter = () => {
    const [color, setColor] = useState('#fff')
    const [text, setText] = useState('Empty Color')

    const ChangeBackGround = (value) => {
        setText(value)
        setColor(value)
    }
  return (
    <div className='render'>
        <div className='colorized' style={{backgroundColor: color}}>
            <h3>{text}</h3>
        </div>
        <input onChange={(e) => ChangeBackGround(e.target.value)} placeholder='input a color'/>
    </div>
  )
}

export default RenderCenter
