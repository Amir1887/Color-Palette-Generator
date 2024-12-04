import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import chroma from 'chroma-js'

import HexColorInput from './Inputs/HexColorInput'
import RGColorInput from './Inputs/RGColorInput'
import HSLColorInput from './Inputs/HSLColorInput'
import ColorPreview from './Inputs/ColorPreview'
import useDebounce from '../hooks/useDebounce'


function ColorInput() {
    const [chromaColor, setChromaColor] = useState(chroma("#4512ab"));
    const [hexInput, setHexInput] = useState(chromaColor);
    const [rgbValues, setRgbValues] = useState(chromaColor.rgb());
    const [hslValues, setHslValues] = useState(chromaColor.hsl());

    const debouncedHexInput = useDebounce(hexInput, 1000);
    useEffect(() => {
      if (chroma.valid(debouncedHexInput)) {
        const newColor = chroma(debouncedHexInput);
        setChromaColor(newColor); // Update the chroma color state
        setRgbValues(newColor.rgb()); // Update the RGB values
        setHslValues(newColor.hsl()); // Update the HSL values
      } else {
        toast.error(`1* Invalid Color: ${hexInput}`);
      }
      return ()=>{
        toast.dismiss();
      }
    }, [debouncedHexInput]);
    

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
  const isHexValid = (hex) => /^#([0-9A-F]{3}){1,2}$/i.test(hex);
  if (isHexValid(value) && chroma.valid(value)) { // convert to other formats only if the value is a valid HEX code
    const newColor = chroma(value);
    setChromaColor(newColor); // Update the chroma color state
    setRgbValues(newColor.rgb()); // Update the RGB values
    setHslValues(newColor.hsl()); // Update the HSL values
  } 
};

  return (
    <div className='bg-cyan-300 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-4 sm:gap-y-2 lg:gap-y-0 '>
      <ColorPreview color={chromaColor.css()}/>
      <HexColorInput hexInput={hexInput} setHexInput={handleHEXChange}/>
      <RGColorInput rgbInput={rgbValues} setRgbInput={handleRGBChange}/>
      <HSLColorInput hsl={hslValues} onHslChange={handleHSLChange} />
    </div>
  )
}

export default ColorInput
