import React from 'react'
import PropTypes from 'prop-types'

import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'

class Photo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ...props
    }
  }

  static propTypes = {
    _id: PropTypes.string.isRequired,
    filename: PropTypes.string.isRequired,
    originalname: PropTypes.string.isRequired,
    __v: PropTypes.number,
    index: PropTypes.number,
    tags: PropTypes.array.isRequired
  }  

  render() {
    return (
      <figure className="grid-figure">
        <div className="grid-photo">
          <ReactFancyBox
            thumbnail={`http://paparanni.com/images/uploads/thumbs/${this.props.filename}`}
            image={`http://paparanni.com/images/uploads/${this.props.filename}`}
            caption={this.props.originalname}
            id={this.props._id}
            alt={this.props.originalname}
            showCloseBtn={false}
            tags={this.props.tags}
          />
        </div>

        <figcaption>
          <h3>{this.props.originalname.substring(0,this.props.originalname.indexOf('.'))}</h3>
          <ul>
            {this.props.tags ? this.props.tags.map((tag, key) => <li className="" key={key}>{tag}</li>) : ''}
          </ul>
        </figcaption>
      </figure>
    )
  }
}

export default Photo
