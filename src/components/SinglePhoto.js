import React from 'react'
import PropTypes from 'prop-types'

const SinglePhoto = props => {
  return (
    <div className="single-photo">
      <img src={`http://paparanni.com/images/uploads/${props.filename}`} alt={props.originalname} />
      <ul className="img-tags">
        {props.tags.map((tag, index) => <li key={index}>{tag}</li>)}
      </ul>
    </div>
  )
}

SinglePhoto.propTypes = {
  _id: PropTypes.string.isRequired,
  filename: PropTypes.string.isRequired,
  originalname: PropTypes.string.isRequired,
  __v: PropTypes.number,
  index: PropTypes.number,
  tags: PropTypes.array.isRequired
}

export default SinglePhoto