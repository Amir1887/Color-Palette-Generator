import chroma from 'chroma-js'
import { useMemo } from 'react';
import  PropTypes from 'prop-types'

const TOTAL_SHADES = 11;
function GenerateContrastGrid({baseColor}) {

  const shades = useMemo(()=>
      chroma
        .scale([chroma(baseColor).brighten(1.5), chroma(baseColor).darken(2)])
        .mode("lab")
        .colors(TOTAL_SHADES)
        .map((color)=> chroma(color))
    , [baseColor]);

  const getTextColor = (bgColor) =>{
    const luminance = chroma(bgColor).luminance(); //calculating luminance of bg
    return luminance > 0.5 ?  "#000000" : "#ffffff"
  }

    return (
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-11">
        {shades.map((shade, index) => {
          // Determine the step value
          const step =
            index === 0
              ? 50
              : index === TOTAL_SHADES - 1
              ? 950
              : index * 100;
          
          const textColor = getTextColor(shade);

          return (
            <div
              key={index}
              className="w-full h-16"
              style={{ 
                backgroundColor: shade.hex(),
                color: textColor
              }}
            >
              <p className="text-center text-white font-light">{step}</p>
              <p className="text-center text-white font-medium">{shade.hex().toUpperCase()}</p>
            </div>
          );
        })}
      </div>
    );
    
}

GenerateContrastGrid.propTypes = {
  baseColor: PropTypes.string.isRequired
}
export default GenerateContrastGrid
