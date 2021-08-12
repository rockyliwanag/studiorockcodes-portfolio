import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Carousel from 'react-images'
import { Link } from 'gatsby'

const HeroCarousel = ({ images }) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const toggleMainImage = (selectedIndex) => {
    setSelectedIndex(selectedIndex)
  }

  const renderGallery = (images) => {
    if (!images) return

    const gallery = images.map((obj, i) => {
      return (
        <article className="6u 12u$(xsmall) work-item" key={i}>
          <a
            className="image fit thumb"
            href={obj.source}
            onClick={(e) => {
              e.preventDefault()
              toggleMainImage(i)
            }}
          >
            <img src={obj.thumbnail} alt="" />
          </a>
          <h3> {obj.caption} </h3> <p> {obj.description} </p>
          {obj.info && obj.site ? 
            <div>
              <Link to={obj.info}>More Info</Link> &nbsp; &nbsp; &nbsp; &nbsp;
              <a href={obj.site} target="_blank" rel="noopener noreferrer">
                Visit Site
              </a>
            </div>
          : null }
        </article>
      )
    })
    

    return <div className="row"> {gallery} </div>
  }
  return (
    <div>
      {renderGallery(images)}
   
            <Carousel currentIndex={selectedIndex} views={images} />

    </div>
  )
}

Gallery.displayName = 'Gallery'
Gallery.propTypes = {
  images: PropTypes.array,
}

export default HeroCarousel
