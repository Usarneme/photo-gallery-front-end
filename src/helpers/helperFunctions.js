import api_results from './photos'

const URL = 'http://paparanni.com/images/uploads/thumbs/'

let galleryFormattedPhotoSet = api_results.photos.map(photo => {
  let tmpObj = 
    {
      src: URL+photo.filename,
      width: 3,
      height: 2
    }
  return tmpObj
})

let lightboxFormattedPhotoSet = api_results.photos.map(photo => {
  let tmpObj = 
    {
      src: URL+photo.filename
    }
  return tmpObj
})

export { galleryFormattedPhotoSet, lightboxFormattedPhotoSet }
