import React, { useState } from 'react'

function HexColorInput({hexInput, setHexInput}) {

  return (
    <div className='w-full'>
      <h3 className='text-lg font-bold pl-2'>HEX</h3>
      <input
      type='text'
      placeholder='HEX input'
      value={hexInput}
      onChange={(e)=> setHexInput(e.target.value)}
      className='border-2 border-slate-300 rounded-lg w-full px-2 py-1'
      />
    </div>
  )
}

export default HexColorInput

