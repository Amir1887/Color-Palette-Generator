import React from 'react'
import  PropTypes from 'prop-types'

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
        onChange={(e) => onHslChange(0, parseInt(e.target.value || 0))}
        className="border-2 border-slate-300 rounded-lg w-full px-2 py-1"
      />
      <input
        type="number"
        min={0}
        max={100}
        placeholder="S"
        value={s}
        onChange={(e) => onHslChange(1, parseInt(e.target.value || 0))}
        className="border-2 border-slate-300 rounded-lg w-full px-2 py-1"
      />
      <input
        type="number"
        min={0}
        max={100}
        placeholder="L"
        value={l}
        onChange={(e) => onHslChange(2 , parseInt(e.target.value || 0))}
        className="border-2 border-slate-300 rounded-lg w-full px-2 py-1"
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
