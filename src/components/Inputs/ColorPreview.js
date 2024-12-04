import  PropTypes from 'prop-types'
function ColorPreview({color}) {
  return (
    <div 
    className='w-full h-42 lg:h-32 rounded-md shadow-2xl'
    style={{backgroundColor: color}}>
      
    </div>
  )
}

ColorPreview.protoTypes ={ 
    color: PropTypes.string.isRequired
};
export default ColorPreview
