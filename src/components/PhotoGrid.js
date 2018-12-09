import React from 'react'
import PropTypes from 'prop-types'

import Photo from './Photo'

const PhotoGrid = props => {
  return (
    <div className="grid photo-grid">
      { props.photos.map((photo, index) => <Photo {...photo} key={index} />) }
    </div>
  )
}

PhotoGrid.propTypes = {
  photos: PropTypes.array
}

export default PhotoGrid