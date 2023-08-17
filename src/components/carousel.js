import React from "react"
import Slider from "react-slick"

import { getImage, GatsbyImage } from "gatsby-plugin-image"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="w-8 h-12 absolute top-1/2 translate-y-[-50%] left-0 lg:-left-12 -mt-4 bg-white bg-opacity-20 py-2 pl-1 lg:bg-transparent z-10"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faChevronLeft}
        size="2x"
        className="opacity-30 hover:opacity-70 transition-opacity"
      />
    </div>
  )
}

const NextArrow = ({ onClick }) => {
  return (
    <div
      className="w-8 h-12 absolute top-1/2 translate-y-[-50%] right-0 lg:-right-12 -mt-4 bg-white bg-opacity-20 py-2 pl-1 lg:bg-transparent z-10"
      onClick={onClick}
    >
      <FontAwesomeIcon
        icon={faChevronRight}
        size="2x"
        className="opacity-30 hover:opacity-70 transition-opacity"
      />
    </div>
  )
}

export const Carousel = ({ embeddedImagesLocal, square }) => {
  return (
    <div className="lg:w-4/5 max-w-[1000px] w-full m-auto mb-24">
      <Slider
        dots
        dotsClass="slick-dots slick-thumb !-bottom-[70px] !flex justify-center"
        infinite
        adaptiveHeight={!square}
        prevArrow={<PrevArrow />}
        nextArrow={<NextArrow />}
        customPaging={index => (
          <a>
            <div className="aspect-square">
              <GatsbyImage
                className="h-full w-full m-auto overflow-hidden"
                objectFit={square ? "contain" : "cover"}
                image={getImage(
                  embeddedImagesLocal[index]?.childImageSharp?.gatsbyImageData
                )}
              />
            </div>
          </a>
        )}
      >
        {embeddedImagesLocal.map((img, i) => (
          <div className={`${square ? "aspect-square" : "h-full"}`}>
            <GatsbyImage
              objectFit="contain"
              className="h-full w-full m-auto"
              image={getImage(img?.childImageSharp?.gatsbyImageData)}
            />
          </div>
        ))}
      </Slider>
    </div>
  )
}
