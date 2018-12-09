import React from 'react'

import PropTypes from 'prop-types'

const Photo = props => {
  return (
    <figure className="grid-figure">
      <div className="grid-photo">
        <img src={`http://paparanni.com/images/uploads/${props.filename}`} alt={props.originalname} className="grid-photo" />
      </div>

      <figcaption>
        <h3>{props.originalname.substring(0,props.originalname.indexOf('.'))}</h3>
        <ul>
          {props.tags ? props.tags.map((tag, key) => <li className="" key={key}>{tag}</li>) : ''}
        </ul>
      </figcaption>

    </figure>
  )
}

Photo.propTypes = {
  _id: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  originalname: PropTypes.string.isRequired,
  __v: PropTypes.number,
  index: PropTypes.number,
  tags: PropTypes.array.isRequired
}

export default Photo
