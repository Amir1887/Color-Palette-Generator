import React, { useState } from 'react'
import chroma from 'chroma-js'
import HexColorInput from './Inputs/HexColorInput'
import RGColorInput from './Inputs/RGColorInput'
import HSLColorInput from './Inputs/HSLColorInput'

function ColorInput() {
    const [chromaColor, setChromaColor] = useState(chroma("#4512ab"));
    const [hexInput, setHexInput] = useState(chromaColor);
    const [rgbValues, setRgbValues] = useState(chromaColor.rgb());
    const [hslValues, setHslValues] = useState(chromaColor.hsl());

const handleRGBChange = (index, value) => {
    const newRGB = [...rgbValues];
    newRGB[index] = value
    setRgbValues(newRGB);

    const newColor = chroma(newRGB, 'rgb');
    setChromaColor(newColor);
    setHexInput(newColor.hex());
    setHslValues(newColor.hsl());
}
const handleHSLChange = (index, value) => {
    const newHSL = [...hslValues];
    newHSL[index] = value
    setHslValues(newHSL);

const newColor = chroma(newHSL, 'hsl');
setChromaColor(newColor);
setHexInput(newColor.hex());
setRgbValues(newColor.rgb());
}

const handleHEXChange = (value) => {
  setHexInput(value); // Update the HEX input state immediately
  if (chroma.valid(value)) { // convert to other formats only if the value is a valid HEX code
    const newColor = chroma(value);
    setChromaColor(newColor); // Update the chroma color state
    setRgbValues(newColor.rgb()); // Update the RGB values
    setHslValues(newColor.hsl()); // Update the HSL values
  } else {
    console.warn("Invalid HEX input"); // Log a warning for invalid inputs
  }
};

  return (
    <div className='bg-cyan-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-y-2 lg:gap-y-0 max-w-50'>
      <HexColorInput hexInput={hexInput} setHexInput={handleHEXChange}/>
      <RGColorInput rgbInput={rgbValues} setRgbInput={handleRGBChange}/>
      <HSLColorInput hsl={hslValues} onHslChange={handleHSLChange} />
    </div>
  )
}

export default ColorInput
