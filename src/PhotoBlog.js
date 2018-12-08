import React, { Component } from 'react'

import Header from './components/Header'
import Footer from './components/Footer'
import Gallery from 'react-photo-gallery' // http://neptunian.github.io/react-photo-gallery/
import Lightbox from 'react-images' // https://github.com/jossmac/react-images
import { galleryFormattedPhotoSet, lightboxFormattedPhotoSet } from './helpers/helperFunctions'

class PhotoBlog extends Component {
  state = {
    lightboxIsOpen: false
  }

  toggleLightbox = () => {
    this.setState({
      lightboxIsOpen: this.lightboxIsOpen ? false : true
    })
  }

  render() {
    return (
      <React.Fragment>
        <Header props={{loggedIn: true}}/>
        <Gallery 
          photos={galleryFormattedPhotoSet} 
          onClick={this.toggleLightbox} 
          columns={3}
        />
        <Lightbox
          images={lightboxFormattedPhotoSet}
          isOpen={this.state.lightboxIsOpen}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          onClose={this.toggleLightbox}
          backdropClosesModal={true}
        />
        <Footer />
      </React.Fragment>
    )
  }
}

export default PhotoBlog
