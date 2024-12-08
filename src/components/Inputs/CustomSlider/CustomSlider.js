import React from 'react'
import  './Customslider.css'
import  PropTypes from 'prop-types'
function CustomSlider({min, max, value, onChange, gradient}) {
  return (
    <div className='slider-container'>
      <input
      className='slider'
      type='range'
      min={min}
      max={max}
      value={value}
      onChange={onChange}
      style={{background: gradient}}
      />
    </div>
  )
}

CustomSlider.prototypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
    value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    onChange: PropTypes.func.isRequired,
    gradient: PropTypes.string.isRequired,
}

export default CustomSlider
