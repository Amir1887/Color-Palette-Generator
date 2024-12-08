import React from 'react'
import  PropTypes from 'prop-types'
import CustomSlider from './CustomSlider/CustomSlider'

function HSLColorInput({hsl, onHslChange}) {
    const [h, s, l] = hsl
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold pl-2">HSL</h3>
      <div className="flex space-x-2">
      <input
        type="number"
        min={0}
        max={360}
        placeholder="H"
        value={h}
        onChange={(e) => onHslChange(0, parseFloat(e.target.value || 0))}
        className="border-2 border-slate-300 rounded-lg w-full px-2 py-1"
      />
      <input
        type="number"
        min={0}
        max={100}
        placeholder="S"
        value={s}
        onChange={(e) => onHslChange(1, parseFloat(e.target.value || 0))}
        className="border-2 border-slate-300 rounded-lg w-full px-2 py-1"
      />
      <input
        type="number"
        min={0}
        max={100}
        placeholder="L"
        value={l}
        onChange={(e) => onHslChange(2 , parseFloat(e.target.value || 0))}
        className="border-2 border-slate-300 rounded-lg w-full px-2 py-1"
      />
      </div>

      
<div className="mt-2 space-y-1">
    <CustomSlider
        min={0}
        max={360}
        value={isNaN(h)? 0:h}
        onChange={(e) => onHslChange(0, parseFloat(e.target.value || 0))}
        className="mt-4 space-y-2"
        gradient="linear-gradient(to right ,red ,yellow, lime, cyan, blue, magenta, red )"
      />
      <CustomSlider
        min={0}
        max={100}
        value={isNaN(s)? 0 : s * 100} // multiplied by 100 to match the slider's percentage scale.
        onChange={(e) => onHslChange(1, parseFloat(e.target.value )/100 || 0)} //  converts the percentage value (0–100) back to a decimal (0–1), which is the expected range for saturation in the HSL model.
        className="mt-4 space-y-2"
        gradient={`linear-gradient(to right, 
          hsl(${h}, 0%,   ${l * 100}%), 
          hsl(${h}, 100%, ${l * 100}%)`} // saturation from 0 to 100
      />
      <CustomSlider
        min={0}
        max={100}
        value={isNaN(l) ? '' : Math.round( l * 100 )}
        onChange={(e) => onHslChange(2, parseFloat(e.target.value) /100 || 0)}
        className="mt-4 space-y-2"
        gradient={`linear-gradient(to right, 
          hsl(${h}, ${s * 100}%, 0%), 
          hsl(${h}, ${s * 100}%, 50%),  
          hsl(${h}, ${s * 100}%, 100%)`} // lightness from 0 to 50 to 100
      />
    </div>
    </div>
  )
}

HSLColorInput.propTypes = {
  hsl: PropTypes.arrayOf(PropTypes.number).isRequired,
  onHslChange: PropTypes.func.isRequired
}

export default HSLColorInput
