import React, { useState } from 'react'
import HexColorInput from './Inputs/HexColorInput'
import RGColorInput from './Inputs/RGColorInput'
import HSLColorInput from './Inputs/HSLColorInput'

function ColorInput() {
    const [hexInput, setHexInput] = useState("#4512ab");
    const [rgbValues, setRgbValues] = useState([212, 122, 211]);
    const [hslValues, setHslValues] = useState([212, 60, 11]);

const handleRGBChange = (index, value) => {
    const newRGB = [...rgbValues];
    newRGB[index] = value
    setRgbValues(newRGB);
}
const handleHSLChange = (index, value) => {
    const newHSL = [...hslValues];
    newHSL[index] = value
    setHslValues(newHSL);
}
  return (
    <div className='bg-cyan-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-y-2 lg:gap-y-0'>
      <p>Color Input</p> 
      <HexColorInput hexInput={hexInput} setHexInput={setHexInput}/>
      <RGColorInput rgbInput={rgbValues} setRgbInput={handleRGBChange}/>
      <HSLColorInput hsl={hslValues} onHslChange={handleHSLChange} />
    </div>
  )
}

export default ColorInput
